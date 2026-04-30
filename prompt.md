# Prompt: Desenvolvimento da Landing Page — EMBAVE

## 🎯 Objetivo

Crie uma **Landing Page (LP) de alta conversão** para a empresa **EMBAVE — Emplacadora Baiana de Veículos**, uma microempresa com mais de 20 anos de atuação no setor de despachante veicular. O foco principal da LP é **converter visitantes em leads de WhatsApp**, transmitindo confiança, agilidade e profissionalismo.

---

## 🛠️ Stack Tecnológica

- **Framework:** React 18+ com **Vite** como bundler
- **Linguagem:** TypeScript (preferencial) ou JavaScript
- **Estilização:** Tailwind CSS + CSS Modules para variáveis de tema
- **Animações:** **Framer Motion** (animações de entrada, scroll, hover) + **AOS (Animate On Scroll)** como alternativa para reveals simples
- **Ícones:** `lucide-react`
- **Roteamento:** Não necessário (single page) — usar scroll suave com `react-scroll` ou âncoras nativas
- **Otimização:** Lazy loading de imagens, code splitting básico
- **Deploy ready:** Estrutura compatível com Vercel/Netlify

---

## 🎨 Sistema de Design

### Paleta de Cores (CSS Variables)

Mantenha as cores em **um único arquivo de variáveis** (`src/styles/theme.css` ou via `tailwind.config.js` extendido) para facilitar futuras alterações.

```css
:root {
  /* Cores primárias da marca */
  --color-primary-blue: #1B3A6B;       /* Azul principal do logo */
  --color-primary-blue-dark: #122849;  /* Azul escuro para hover/ênfase */
  --color-primary-blue-light: #2C5490; /* Azul claro para destaques sutis */

  --color-accent-yellow: #F5B81C;      /* Amarelo do logo */
  --color-accent-yellow-dark: #D89E0A; /* Amarelo escuro para hover */
  --color-accent-yellow-light: #FFD45C;/* Amarelo claro para fundos suaves */

  /* Neutros */
  --color-white: #FFFFFF;
  --color-off-white: #F8F9FB;          /* Fundo de seções alternadas */
  --color-gray-100: #EEF1F5;
  --color-gray-300: #C8CDD6;
  --color-gray-600: #5A6473;
  --color-gray-900: #1A1F2B;

  /* Semânticas */
  --color-whatsapp: #25D366;
  --color-success: #22C55E;

  /* Tipografia */
  --font-display: 'Poppins', sans-serif;   /* Títulos */
  --font-body: 'Inter', sans-serif;        /* Corpo */

  /* Espaçamento e Raio */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-soft: 0 4px 20px rgba(27, 58, 107, 0.08);
  --shadow-medium: 0 10px 40px rgba(27, 58, 107, 0.12);
}
```

### Tipografia

- **Títulos:** Poppins (700/800) — moderna, com presença forte
- **Corpo:** Inter (400/500) — alta legibilidade
- Importar via Google Fonts no `index.html` ou via `@import` no CSS global

### Princípios Visuais

- Interface **leve, limpa e profissional** — transmite confiança institucional
- **Espaçamento generoso** entre seções (mínimo `py-20` em desktop)
- **Cantos arredondados** consistentes (`--radius-md` em cards, `--radius-lg` em imagens)
- **Sombras suaves e azuladas** (não usar sombras pretas genéricas)
- Detalhes geométricos sutis com a cor amarela (linhas, underlines, badges) inspirados no logo

---

## 📐 Estrutura do Site (Sections)

A LP deve conter as seguintes seções, **nesta ordem**:

### 1. **Header / Navbar (fixo no topo)**
- **Layout:** Logo à esquerda + menu central + CTA WhatsApp à direita
- **Conteúdo:**
  - Logo EMBAVE (`/public/images/logo_embave.png`)
  - Links: `Início`, `Serviços`, `Sobre`, `Depoimentos`, `Contato` (scroll suave)
  - Botão CTA: **"Fale no WhatsApp"** com ícone do WhatsApp (cor `--color-whatsapp`)
- **Comportamento:**
  - Fundo transparente no topo da página, ganha fundo branco com `backdrop-blur` ao rolar
  - Em mobile: hamburguer menu animado (slide-in lateral)
- **Animação:** Fade-in no carregamento (delay 0s, duration 0.6s)

---

### 2. **Hero Section**
- **Layout:** 2 colunas em desktop (texto à esquerda 55%, imagem à direita 45%) | 1 coluna em mobile (texto em cima, imagem abaixo)
- **Fundo:** Gradiente sutil de `--color-white` para `--color-off-white`, com um elemento decorativo amarelo (forma geométrica abstrata) no canto superior direito
- **Conteúdo Texto:**
  - Badge superior (pill amarela): `⭐ +20 anos de experiência na Bahia`
  - Título (h1): **"Resolvemos a documentação do seu veículo com agilidade e segurança"**
  - Subtítulo: *"Há mais de 20 anos cuidando da burocracia para você ficar tranquilo. Emplacamento, transferência, licenciamento e muito mais — tudo em um só lugar."*
  - 2 botões:
    - Primário (azul): **"Solicitar atendimento"** → abre WhatsApp
    - Secundário (outline azul): **"Ver serviços"** → scroll para seção de serviços
  - Linha de prova social abaixo dos botões: ícones + texto pequeno como `✓ Atendimento ágil  ✓ +5.000 clientes  ✓ Sem complicação`
- **Imagem:** `/public/images/hero_atendimento.jpg`
- **Animações (Framer Motion):**
  - Texto: fade-in com slide da esquerda, com stagger entre elementos (badge → título → subtítulo → botões)
  - Imagem: fade-in com leve scale (de 0.95 para 1.0)
  - Elemento decorativo amarelo: rotação infinita lenta (loop, 20s)

---

### 3. **Seção "Sobre / Por que a EMBAVE"**
- **Layout:** 2 colunas — imagem à esquerda, texto à direita
- **Fundo:** `--color-off-white`
- **Conteúdo:**
  - Tag-line superior em amarelo: `SOBRE NÓS`
  - Título: **"Mais de duas décadas cuidando da sua documentação"**
  - Parágrafo: *"A EMBAVE — Emplacadora Baiana de Veículos — nasceu para descomplicar a vida de quem precisa lidar com documentação veicular. Atendemos pessoas físicas e jurídicas em toda a Bahia, com a experiência de quem já resolveu milhares de processos."*
  - 4 mini-cards horizontais com ícone + título + descrição curta:
    1. 🏆 **20+ anos de experiência** — Tradição e expertise comprovada
    2. ⚡ **Atendimento ágil** — Processos otimizados para agilidade máxima
    3. 🛡️ **Total segurança** — Documentação 100% conforme órgãos oficiais
    4. 👥 **Atendimento humano** — Contato direto via WhatsApp
- **Imagem:** `/public/images/sobre_equipe.jpg`
- **Animações:**
  - Imagem: parallax sutil ao scroll
  - Cards: stagger fade-in conforme entram no viewport (`whileInView`)

---

### 4. **Seção de Serviços (Principal — alta importância)**
- **Layout:** Grid de 5 cards (3 + 2 em desktop, 2 colunas em tablet, 1 coluna em mobile)
- **Fundo:** `--color-white` com padrão sutil de pontos azul-claro
- **Cabeçalho da seção (centralizado):**
  - Tag-line: `NOSSOS SERVIÇOS`
  - Título: **"Tudo o que seu veículo precisa em um só lugar"**
  - Subtítulo: *"Cuidamos de toda a burocracia para você economizar tempo e evitar dores de cabeça."*
- **Cards de Serviço (cada um):**
  - Imagem ilustrativa no topo (`object-cover`, `aspect-ratio: 4/3`)
  - Ícone sobreposto em badge azul circular
  - Título do serviço
  - Descrição curta (2 linhas)
  - Botão "Saiba mais" (link → WhatsApp com mensagem pré-preenchida do serviço)
- **Os 5 serviços:**
  1. **Emplacamento de Veículos** — Primeiro emplacamento de veículos novos ou usados com total segurança e agilidade. → `/public/images/servico_emplacamento.jpg`
  2. **Transferência de Propriedade** — Processo completo de transferência veicular com toda documentação necessária. → `/public/images/servico_transferencia.jpg`
  3. **Licenciamento Anual** — Renovação do licenciamento do seu veículo de forma rápida e sem complicações. → `/public/images/servico_licenciamento.jpg`
  4. **Regularização de IPVA** — Auxílio na regularização de débitos de IPVA e taxas atrasadas. → `/public/images/servico_ipva.jpg`
  5. **Serviços de CNH** — Renovação, segunda via e outros serviços relacionados à habilitação. → `/public/images/servico_cnh.jpg`
- **Animações:**
  - Hover nos cards: leve elevação (`translateY(-8px)`) + sombra mais intensa + a borda inferior amarela cresce de 0 a 100% de largura
  - Entrada: stagger fade-in-up no scroll

---

### 5. **Seção "Como Funciona" (Processo em 3 passos)**
- **Layout:** 3 colunas conectadas por uma linha tracejada amarela (em desktop) | empilhado em mobile
- **Fundo:** `--color-primary-blue` (seção em destaque, contraste com as anteriores)
- **Texto em branco**, números em amarelo grande
- **Cabeçalho:**
  - Tag-line amarela: `COMO FUNCIONA`
  - Título: **"Resolvemos em 3 passos simples"** (em branco)
- **Os 3 passos:**
  1. **Você nos chama no WhatsApp** — Conte rapidamente qual serviço você precisa.
  2. **Nós orientamos e coletamos a documentação** — Indicamos exatamente o que é necessário.
  3. **Entregamos tudo regularizado** — Você recebe o resultado sem sair de casa.
- **Animações:**
  - A linha tracejada se "desenha" da esquerda para a direita conforme entra no viewport (usar `pathLength` do Framer Motion em SVG)
  - Cada número aparece com bounce sequencial

---

### 6. **Seção de Depoimentos / Prova Social**
- **Layout:** Slider/carrossel horizontal com 3 cards visíveis em desktop, 1 em mobile (usar `swiper` ou `embla-carousel-react`)
- **Fundo:** `--color-off-white`
- **Cabeçalho:**
  - Tag-line: `O QUE DIZEM NOSSOS CLIENTES`
  - Título: **"Quem confia, recomenda"**
- **Cards de depoimento (3 a 5 cards):**
  - Foto circular do cliente (`/public/images/cliente_01.jpg`, `cliente_02.jpg`, `cliente_03.jpg`)
  - 5 estrelas amarelas
  - Texto do depoimento (entre aspas, fonte itálica)
  - Nome do cliente + tipo (Ex: "João Silva — Cliente desde 2019")
- **Depoimentos sugeridos:**
  1. *"Resolveram em 2 dias o que eu vinha tentando há semanas. Atendimento excelente!"* — **Ana Carolina, Salvador**
  2. *"Já é a terceira vez que uso os serviços da EMBAVE. Confiança total, sempre rápidos e sem complicação."* — **Marcos Pereira, Lauro de Freitas**
  3. *"Como empresa, precisava emplacar uma frota nova. A EMBAVE cuidou de tudo, do começo ao fim."* — **Construtora Horizonte LTDA**
- **Animações:**
  - Auto-play suave (5s por slide), pausa no hover
  - Setas de navegação aparecem com fade no hover

---

### 7. **Seção de FAQ (Perguntas Frequentes)**
- **Layout:** 2 colunas — texto introdutório à esquerda, accordion de perguntas à direita
- **Fundo:** `--color-white`
- **Cabeçalho (esquerda):**
  - Tag-line: `DÚVIDAS FREQUENTES`
  - Título: **"Tirando suas dúvidas"**
  - Parágrafo: *"Não encontrou sua dúvida? Fale com a gente no WhatsApp."*
  - Botão WhatsApp
- **Accordion (direita):** mínimo 5 perguntas
  1. Quanto tempo leva para emplacar um veículo novo?
  2. Quais documentos preciso para transferência de propriedade?
  3. Vocês atendem em toda a Bahia?
  4. É possível parcelar o IPVA atrasado?
  5. Posso fazer todo o processo sem ir ao Detran?
- **Animação:** Accordion com altura animada suave (Framer Motion `AnimatePresence`)

---

### 8. **Seção CTA Final**
- **Layout:** Bloco de destaque centralizado, full width
- **Fundo:** Gradiente diagonal de `--color-primary-blue` para `--color-primary-blue-dark`, com formas geométricas amarelas decorativas (círculos e linhas) no fundo
- **Conteúdo:**
  - Título grande em branco: **"Pronto para resolver a documentação do seu veículo?"**
  - Subtítulo: *"Fale com nossos especialistas agora mesmo. Atendimento rápido e sem compromisso."*
  - Botão grande verde WhatsApp: **"Falar no WhatsApp agora"** com ícone
  - Texto pequeno: `📞 Atendimento de segunda a sábado`
- **Animação:** As formas geométricas amarelas têm movimento sutil de flutuação contínua (loop)

---

### 9. **Footer**
- **Layout:** 3 colunas em desktop, empilhado em mobile
- **Fundo:** `--color-gray-900` com texto em branco/cinza claro
- **Conteúdo:**
  - **Coluna 1:** Logo + breve descrição da empresa + redes sociais (Instagram, Facebook)
  - **Coluna 2:** Links rápidos (Serviços, Sobre, Contato)
  - **Coluna 3:** Contato (Endereço, Telefone, E-mail, Horário)
  - Linha inferior: `© 2025 EMBAVE — Emplacadora Baiana de Veículos. Todos os direitos reservados.`

---

### 10. **Botão Flutuante de WhatsApp**
- **Posição:** Fixo no canto inferior direito, sempre visível
- **Visual:** Círculo verde com ícone WhatsApp, sombra média, animação de pulso suave (loop)
- **Tooltip:** "Fale conosco" aparece no hover
- **Comportamento:** Abre WhatsApp com mensagem pré-preenchida: `"Olá! Vim pelo site e gostaria de mais informações sobre os serviços."`

---

## 🎬 Regras de Animação (resumo)

- **Carregamento inicial:** Header → Hero (stagger natural)
- **Scroll reveals:** Usar `whileInView` do Framer Motion com `viewport={{ once: true, amount: 0.2 }}` para que cada seção anime ao entrar
- **Hover states:** Todos os botões e cards devem ter feedback visual (scale, shadow, color shift)
- **Transições suaves:** Sempre `ease-out` ou `ease-in-out`, durações entre 0.4s e 0.8s
- **Performance:** Usar `transform` e `opacity` (GPU-accelerated). Evitar animar `width`/`height` diretamente.
- **Acessibilidade:** Respeitar `prefers-reduced-motion` — usar hook personalizado para desabilitar animações se o usuário preferir.

---

## 📱 Responsividade

Breakpoints (Tailwind padrão):
- **Mobile:** `< 640px` (base)
- **Tablet:** `sm: 640px` e `md: 768px`
- **Desktop:** `lg: 1024px` e `xl: 1280px`
- **Large desktop:** `2xl: 1536px`

Regras:
- **Mobile-first:** começar pelo layout móvel e ir adicionando complexidade
- Hero, Sobre e FAQ: mudar de 2 colunas para 1 em `< md`
- Grid de Serviços: 1 coluna em mobile, 2 em tablet, 3 em desktop
- Tipografia fluida: usar `clamp()` para títulos (ex: `clamp(2rem, 5vw, 3.5rem)`)
- Imagens: sempre com `loading="lazy"` (exceto a do Hero, que deve ser `eager`)
- Touch targets: botões com mínimo `44x44px` em mobile

---

## 🖼️ Imagens — Convenção Importante

**As imagens serão adicionadas posteriormente na pasta `/public/images/`.** Durante o desenvolvimento, o site **deve já referenciar os caminhos definitivos** das imagens (mesmo que ainda não existam), seguindo esta convenção:

```
/public/images/
├── logo_embave.png
├── hero_atendimento.jpg
├── sobre_equipe.jpg
├── servico_emplacamento.jpg
├── servico_transferencia.jpg
├── servico_licenciamento.jpg
├── servico_ipva.jpg
├── servico_cnh.jpg
├── cliente_01.jpg
├── cliente_02.jpg
├── cliente_03.jpg
├── processo_atendimento.jpg
└── cta_final_bg.jpg (opcional, se houver imagem de fundo no CTA)
```

**Importante:** No código, sempre usar caminhos absolutos a partir da raiz pública: `<img src="/images/hero_atendimento.jpg" alt="..." />`. Adicionar atributos `alt` descritivos em todas as imagens (acessibilidade + SEO). Considere implementar um placeholder cinza claro com `aspect-ratio` definido para evitar layout shift enquanto as imagens não são adicionadas.

---

## 📦 Estrutura de Pastas Recomendada

```
embave-lp/
├── public/
│   └── images/         ← imagens serão adicionadas aqui depois
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   └── faq.ts
│   ├── hooks/
│   │   └── useReducedMotion.ts
│   ├── styles/
│   │   ├── theme.css   ← variáveis CSS aqui
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── package.json
└── vite.config.ts
```

---

## ✅ Checklist Final de Qualidade

Antes de considerar pronto, verifique se a página atende todos estes requisitos: HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`); SEO básico configurado (meta tags, Open Graph, título descritivo); Lighthouse com performance > 90 e acessibilidade > 95; todos os links de WhatsApp usando o formato correto `https://wa.me/55XXXXXXXXXXX?text=...` com mensagem pré-preenchida URL-encoded; favicon configurado a partir do logo; todos os botões e links acessíveis via teclado (`focus-visible` com outline visível); contraste de texto sobre fundo seguindo WCAG AA mínimo; imagens com `alt` descritivo e dimensões definidas para evitar layout shift; e teste manual em mobile real ou DevTools nos breakpoints 375px, 768px e 1280px.

---

## 🎯 Prioridade de Conversão

Lembre-se: **o objetivo número 1 é levar o lead ao WhatsApp**. Por isso:

- O botão de WhatsApp deve aparecer em pelo menos **5 pontos da página** (Header, Hero, FAQ, CTA Final, Floating)
- Cada CTA deve ter mensagem pré-preenchida diferente, contextualizada à seção
- Use copy persuasivo: foco em **agilidade**, **segurança**, **experiência** e **descomplicar a vida do cliente**

---

## 🚀 Entrega Esperada

Um projeto React funcional, responsivo, performático e visualmente alinhado à identidade da EMBAVE (azul + amarelo + branco), pronto para receber as imagens na pasta `public/images/` e ser publicado em produção.