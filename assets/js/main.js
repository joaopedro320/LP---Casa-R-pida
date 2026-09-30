(function () {
  'use strict';

  // Ano no rodapé
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header com sombra ao rolar
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 0px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---------------------------------------------------------
  // Contador animado (hero__stats)
  // ---------------------------------------------------------
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.count').forEach(function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    var start = null;
    var duration = 1200;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    setTimeout(function () { requestAnimationFrame(step); }, 500);
  });

  // ---------------------------------------------------------
  // Tilt suave na foto do hero (segue o mouse, só em telas com hover)
  // ---------------------------------------------------------
  var heroMedia = document.getElementById('heroMedia');
  var heroFrame = heroMedia ? heroMedia.querySelector('.hero__frame') : null;
  if (heroMedia && heroFrame && window.matchMedia('(hover: hover)').matches && !reduceMotion) {
    heroMedia.addEventListener('mousemove', function (e) {
      var rect = heroMedia.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      heroFrame.style.transform = 'rotateY(' + (px * 8) + 'deg) rotateX(' + (py * -8) + 'deg)';
    });
    heroMedia.addEventListener('mouseleave', function () {
      heroFrame.style.transform = 'rotateY(0) rotateX(0)';
    });
  }

  // ---------------------------------------------------------
  // Linha do processo: preenche quando a seção entra na tela
  // ---------------------------------------------------------
  var processLine = document.getElementById('processLine');
  if (processLine && 'IntersectionObserver' in window) {
    var lineIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          processLine.style.setProperty('--line-progress', '1');
          lineIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    lineIo.observe(processLine);
  }

  // ---------------------------------------------------------
  // Lightbox da galeria (fotos reais das obras)
  // ---------------------------------------------------------
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');
  var lastFocused = null;

  function openLightbox(src, alt, caption) {
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var img = item.querySelector('img');
      openLightbox(img.src, img.alt, item.getAttribute('data-caption'));
    });
  });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('is-open')) closeLightbox();
  });

  // ---------------------------------------------------------
  // Formulário: sem Google Apps Script configurado.
  // Monta a mensagem com todos os campos e envia direto pro WhatsApp.
  // ---------------------------------------------------------
  var form = document.getElementById('leadForm');
  var submitBtn = document.getElementById('submitBtn');
  var WHATSAPP_NUMBER = '5565996122670';

  function updateSubmitState() {
    submitBtn.disabled = !form.checkValidity();
  }

  if (form) {
    var inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(function (el) {
      el.addEventListener('input', updateSubmitState);
      el.addEventListener('change', updateSubmitState);
    });
    updateSubmitState();

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        updateSubmitState();
        return;
      }

      var nome = form.nome.value.trim();
      var whatsapp = form.whatsapp.value.trim();
      var cidade = form.cidade.value.trim();
      var servico = form.servico.value.trim();
      var mensagem = form.mensagem.value.trim();

      var texto = 'Olá! Vim pelo site da Casa Rápida e gostaria de um orçamento.%0A%0A' +
        'Nome: ' + encodeURIComponent(nome) + '%0A' +
        'WhatsApp: ' + encodeURIComponent(whatsapp) + '%0A' +
        'Cidade: ' + encodeURIComponent(cidade) + '%0A' +
        'Serviço de interesse: ' + encodeURIComponent(servico) +
        (mensagem ? '%0AProjeto: ' + encodeURIComponent(mensagem) : '');

      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + texto, '_blank', 'noopener');
    });
  }
})();
