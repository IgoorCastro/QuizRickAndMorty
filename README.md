# 🛸 Rick and Morty Quiz

Um quiz interativo baseado no universo de **Rick and Morty**, onde o jogador deve adivinhar corretamente o nome dos personagens exibidos na tela.  
O jogo pontua acertos, penaliza erros e permite pular perguntas, tornando a experiência dinâmica e desafiadora.

---

## 🎮 Como funciona o jogo

- Uma imagem de um personagem é exibida
- O jogador deve selecionar **nome correto do personagem**
- A pontuação é ajustada conforme as ações do jogador

---

## 🧠 Regras de Pontuação

- ✅ **Resposta correta:** +15 pontos  
- ❌ **Resposta incorreta:** −15% da pontuação atual  
- ⏭️ **Pular pergunta:** −10% da pontuação atual  
- 🏆 **Sem limite máximo de pontos**

---

## 🖼️ Personagens

- Os personagens são carregados dinamicamente
- As imagens vêm da **API oficial de Rick and Morty**
- Cada rodada apresenta um personagem diferente

---

## ⚙️ Tecnologias Utilizadas

- **React / Next.js**
- **TypeScript**
- **CSS Modules**
- **Rick and Morty API**
- **Vercel** (deploy)

---

## 🌐 API Utilizada

Os dados dos personagens são obtidos através da API pública:

🔗 https://rickandmortyapi.com/

---

## 📚 Projeto para estudo

Este projeto possui caráter exclusivamente educacional.

---

```bash
# instalar dependências
npm install

# rodar o projeto
npm run dev
