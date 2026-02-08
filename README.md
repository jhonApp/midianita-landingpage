# ✝️ Midianita - AI Design Platform for Churches

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech Stack](https://img.shields.io/badge/stack-React%20%7C%20TypeScript%20%7C%20Tailwind-blueviolet)

> **Design Profissional para sua Igreja em Segundos.**
> Uma Landing Page de alta conversão (High-Fidelity) desenvolvida para apresentar a plataforma SaaS Midianita.

---

## 📸 Preview

![Midianita Hero Section](./public/preview-hero.png)
*(Note: Please ensure a screenshot is saved in public/preview-hero.png)*

---

## 🚀 Sobre o Projeto

O **Midianita** é uma solução SaaS focada em democratizar o design gráfico para igrejas através de Inteligência Artificial.

Este repositório contém a **Landing Page Institucional**, construída com foco em:
- **Performance:** Carregamento instantâneo.
- **UX Imersiva:** Animações fluidas que guiam o olhar do usuário.
- **Responsividade Extrema:** Suporte desde mobile (320px) até monitores Ultrawide (2560px+).
- **Estética Premium:** Utilização de Glassmorphism e Dark Mode profundo (`slate-950`).

---

## ✨ Funcionalidades Chave

- **🎨 UI Ultra-Moderna:** Design System baseado em Glassmorphism, degradês sutis e tipografia fluida.
- **🖥️ Suporte Ultrawide:** Layouts adaptativos que se expandem elegantemente em monitores 21:9 (até 2560px de largura).
- **🤖 Simulação de IA em Tempo Real:** Componente Hero interativo que simula a digitação de um prompt e a "geração" de uma imagem (State Machine Loop).
- **✨ Animações de Entrada:** Elementos com *Fade Up* e *Stagger* utilizando `Framer Motion`.
- **📱 Grid Responsivo Inteligente:** Bento Grid que altera de 1 coluna (Mobile) para até 5 colunas (Ultrawide).

---

## 🛠️ Tech Stack

O projeto foi construído com as tecnologias mais recentes do ecossistema React:

| Categoria | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Core** | [React 18](https://reactjs.org/) | Biblioteca de UI componentizada. |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para robustez. |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS para agilidade e consistência. |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) | Animações complexas de layout e micro-interações. |
| **Ícones** | [Lucide React](https://lucide.dev/) | Ícones leves, consistentes e modernos. |
| **Build Tool** | [Vite](https://vitejs.dev/) | HMR instantâneo e build otimizado. |

---

## 🔧 Instalação e Execução

**Pré-requisitos:** Node.js (v18+) instalado.

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/midianita-landing.git
cd midianita-landing
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Rode o servidor de desenvolvimento
```bash
npm run dev
```

### 4. Acesse no navegador
Abra http://localhost:5173 para ver o projeto.

---

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes Reutilizáveis (Button, Card)
├── sections/            # Seções da Landing Page (Hero, Features, Pricing)
├── assets/              # Imagens e ícones estáticos
├── hooks/               # Custom Hooks
├── App.tsx              # Componente Raiz
└── main.tsx             # Entry Point
tailwind.config.ts       # Configuração de Breakpoints (incluindo 3xl/Ultrawide)
```

---

## 🤝 Contribuindo

1. Faça um **Fork** do projeto.
2. Crie uma **Branch** para sua Feature (`git checkout -b feature/AmazingFeature`).
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4. **Push** para a Branch (`git push origin feature/AmazingFeature`).
5. Abra um **Pull Request**.

---

## 📝 Licença

Distribuído sob a licença MIT.

---

<p align="center">
Feito com 💙 e ☕ para o Reino.
</p>
