# Casa Rápida, Landing Page

Landing page de conversão para a **Casa Rápida** (Tangará da Serra/MT), empresa de instalação de porcelanato, mosaico, pedras naturais, lastras e revestimentos (piscinas e fachadas). **Não é marmoraria**, a comunicação foi construída em cima de "serviço de instalação", não venda de material, com concorrência direta de azulejistas.

Fonte: briefing (Google Forms) respondido por Rafael Andrade Souza em 26/09/2026 + intake de contrato QH4 (Produto Projeto Stones).

## Contexto do cliente

- Cidade: Tangará da Serra/MT (~120 mil habitantes), no mercado há 10 anos
- Diferencial real: equipe própria de instalação (sem terceirizar) com entrega mais rápida (obras em ~1,5 mês vs. 3–4 meses da concorrência) e acabamento refinado (recortes em cantos, portas e rodapés)
- Público-alvo: 30–65 anos, advogados, médicos, empresários, fazendeiros (inclusive fazendas de Cuiabá)
- Posicionamento pedido: moderno e inovador, ousado (foge do padrão), técnico/especialista
- Horário de atendimento: 07h às 17h, domingo a sexta
- Sem site, GMN, domínio, hospedagem ou WordPress hoje; Instagram (@casarapida_) parado mas com acervo de fotos/vídeos que o cliente vai enviar
- Fotos reais recebidas do cliente em 30/09/2026 (arquivo digitalizado com 62 fotos de obras já entregues); as melhores foram selecionadas e aplicadas na LP (ver seção "Imagens" abaixo)

## Identidade visual aplicada

Paleta e fundo claro foram pedidos explicitamente pelo cliente ("preto e dourado" + fundo claro), o que é uma exceção ao padrão de fundo "escuro claro" usado nas LPs de marmoraria, aqui foi respeitado o pedido do cliente.

| Token | Hex | Uso |
|---|---|---|
| `--cream` | `#F6F2EA` | Fundo principal |
| `--paper` | `#FBF9F4` | Fundo de cards/seções alternadas |
| `--ink` | `#1C1912` | Texto principal |
| `--ink-soft` | `#4A4436` | Texto secundário |
| `--graphite` | `#17140F` | Seções escuras (diferenciais, CTA final, rodapé) |
| `--gold` | `#B0863C` | Cor de destaque (botões, ícones, tags) |
| `--gold-light` | `#D9B872` | Hover / detalhes sobre fundo escuro |
| `--gold-deep` | `#8C6A2C` | Textos de destaque sobre fundo claro |

**Tipografia:** Poppins (títulos) + Inter (corpo), o cliente pediu apenas "uma fonte legível", sem indicar nome específico, então foi aplicado o padrão QH4.

**Motivo visual central:** cantos cortados a 45° (clip-path) em botões, cards, molduras de foto e badges, referência direta ao recorte e acabamento de porcelanato em cantos/portas/rodapés, que é o diferencial que o próprio cliente destacou no briefing. Esse motivo substitui os cantos arredondados genéricos e amarra a identidade visual ao negócio.

## O que já está configurado

- Estrutura completa: hero, sobre, 6 serviços (destaque em porcelanato, lastras e pedras naturais, os de maior demanda segundo o cliente), diferenciais, processo (4 etapas), galeria, área de atendimento, FAQ (as 3 perguntas reais do briefing), CTA final e formulário
- JSON-LD `HomeAndConstructionBusiness` + `FAQPage`, Open Graph, Twitter Card, canonical, meta description otimizada
- Formulário **sem Google Apps Script** (cliente não tem): monta a mensagem com todos os campos e abre direto no WhatsApp, como manda o padrão quando não há Apps Script configurado
- Botão de envio nasce desabilitado e só libera com `checkValidity()`
- Scroll reveal, hover states e microinterações reais (sem depender de bibliotecas externas)
- SEO técnico: `robots.txt`, `sitemap.xml`, `vercel.json`, `site.webmanifest`, página de obrigado e 404 personalizada
- Todas as imagens com `width`/`height` (evita CLS) e preload da imagem do hero
- Fotos reais do cliente aplicadas em todos os slots (hero, sobre, 6 serviços, 4 fotos de galeria e fundo do CTA final), selecionadas a partir do arquivo com 62 fotos que ele mandou
- Animações mais autorais: entrada em cascata do título do hero, foto do hero com leve tilt 3D ao mover o mouse, contador animado (10 anos), linha do "como funciona" desenhando conforme rola a tela, feixe de luz sutil na seção de diferenciais, e lightbox ao clicar nas fotos da galeria

## Imagens aplicadas (fotos reais do cliente)

| Arquivo | Foto usada | Onde entra |
|---|---|---|
| `hero.jpg` | Piscina com deck e revestimento em pedra | Imagem principal do hero |
| `sobre.jpg` | Equipe em obra (camisa Casa Rápida) | Seção "Sobre" |
| `servico-porcelanato.jpg` | Piso amplo de porcelanato polido | Card de serviço |
| `servico-lastras.jpg` | Parede com chapa grande de pedra | Card de serviço |
| `servico-pedras.jpg` | Textura de pedra natural | Card de serviço |
| `servico-mosaico.jpg` | Revestimento em espinha de peixe | Card de serviço |
| `servico-piscina.jpg` | Piscina com plantas e guarda-sol | Card de serviço |
| `servico-fachada.jpg` | Fachada residencial com pedra | Card de serviço |
| `galeria-1.jpg` a `galeria-4.jpg` | Bancada de banheiro, box em pedra escura, suíte com iluminação, fachada comercial | Galeria com lightbox |
| `cta-bg.jpg` | Pátio com parede de pedra e piscina | Fundo do CTA final |
| `logo.png` | Logo enviada pelo cliente (marca completa) | Header e footer |
| `logo-icon.png` | Recorte só do símbolo da logo, sem texto | Favicon e `site.webmanifest` |

Todas foram recortadas e comprimidas para o tamanho de cada slot (ver script usado, se precisar reprocessar outras fotos do mesmo lote é só pedir). Se o cliente preferir trocar alguma por outra do mesmo acervo, me diga qual seção e eu troco.

## O que trocar antes de publicar

1. **Domínio**, não há domínio registrado ainda. Troquei `https://casarapida.com.br` como placeholder em canonical, Open Graph, JSON-LD, `sitemap.xml` e `robots.txt`. Buscar/replace por `casarapida.com.br` assim que o domínio real for definido.
3. **GTM ID**, não foi enviado. Está como `GTM-XXXXXXX` no `<head>` do `index.html`.
4. **Endereço completo**, o briefing só trouxe um endereço residencial do Rafael (para registro de domínio/WHOIS), não confirmado como endereço comercial público. Por isso o JSON-LD ficou só com cidade/estado (Tangará da Serra/MT). Se o cliente confirmar que esse é o endereço a exibir publicamente, adicionar `streetAddress` e `postalCode` no bloco `PostalAddress` do `index.html`.
5. **Google Meu Negócio / avaliações**, cliente não tem ainda (contrato inclui otimização de GMN prata); não há seção de depoimentos/avaliações porque não existem depoimentos reais disponíveis.

## Pendências do briefing

- Referências visuais: cliente respondeu "não tenho referência", direção visual foi uma decisão de design da QH4 em cima do que ele descreveu gostar (moderno, ousado, técnico, sem excesso de informação)
- Área de cobertura: LP fala apenas de Tangará da Serra. Expansão para Cuiabá e norte do MT foi citada na reunião comercial mas ainda precisa ser validada com o cliente antes de entrar na comunicação
- Sem confirmação de domínio/hospedagem, response do formulário indica que o cliente não tem nada disso ainda

## Estrutura da pasta

```
casa-rapida-lp/
├── index.html
├── obrigado.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── vercel.json
├── site.webmanifest
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/ (fotos e logo reais do cliente, ver tabela acima)
```

## Stack e comportamento

- HTML/CSS/JS puro, sem framework, pronto para deploy estático na Vercel
- `vercel.json` com `cleanUrls`, cache longo para `/assets` e página de erro customizada
- Sem dependências externas além das fontes do Google Fonts (Poppins + Inter)

## Checklist de entrega

- [x] SEO (title, meta description, canonical)
- [x] Open Graph + Twitter Card
- [x] JSON-LD (HomeAndConstructionBusiness + FAQPage)
- [x] sitemap.xml
- [x] robots.txt
- [x] vercel.json
- [x] Página de obrigado personalizada
- [x] Página de erro 404 personalizada
- [x] site.webmanifest
- [x] Formulário com validação (`checkValidity`) e botão desabilitado até preenchimento válido
- [x] Redirecionamento direto pro WhatsApp (sem Apps Script)
- [x] Imagens com width/height + preload do hero
- [x] Testado em desktop (1440px) e mobile (390px) via Playwright, sem erros de console
- [x] Fotos reais do cliente aplicadas em todos os slots
- [x] Logo real do cliente aplicada no header, footer e favicon (`logo.png` e `logo-icon.png`)
- [ ] Definir domínio real e atualizar canonical/OG/JSON-LD/sitemap/robots
- [ ] Configurar GTM ID real
