# Painel de Estudos React

Projeto modelo do **Elo** para estudar e adaptar. É um painel de tarefas de estudo feito com **Vite + React**, cobrindo o essencial do dia a dia:

- componentes e props
- estado com `useState`
- efeito e persistência com `useEffect` + `localStorage`
- listas com `key`
- formulário controlado
- filtros e renderização condicional

## Como rodar

```bash
git clone https://github.com/Efrnds/elo-react-painel-estudos.git
cd elo-react-painel-estudos
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (geralmente `http://localhost:5173`).

## Scripts

- `npm run dev` — sobe o servidor de desenvolvimento
- `npm run build` — gera a build de produção em `dist/`
- `npm run preview` — pré-visualiza a build

## Estrutura

```text
src/
  components/
    Stats.jsx
    TaskForm.jsx
    TaskItem.jsx
    TaskList.jsx
  hooks/
    useLocalStorage.js
  App.jsx
  main.jsx
```

## Ideias para adaptar

1. Adicionar edição inline do título da tarefa
2. Ordenar por prioridade (alta → baixa)
3. Criar categorias (Frontend, Backend, Banco de Dados)
4. Exportar/importar JSON das tarefas
5. Trocar o tema visual e transformar em um app seu

## Para quem é

Alunas e alunos que já viram JavaScript básico e estão começando React. Use como trampolim: clone, rode, quebre, melhore.
