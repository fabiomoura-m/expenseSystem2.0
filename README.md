<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#funcionalidades-da-aplicação">Funcionalidades</a> •
  <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> • 
  <a href="#como-executar">Como Executar</a> • 
  <a href="#deploy">Deploy</a> 
</p>

## Projeto
![expenseSystem](https://user-images.githubusercontent.com/93055468/229361480-808c307c-e724-4fa9-8de7-47c3d077fd08.png)

## Sobre

Expense System é uma aplicação de um sistema de despesas, onde é possível ter um gerenciamento de despesas dos usuários cadastrados. A aplicação contém 5 páginas, uma para a listagem de todas as despesas cadastradas, outra para listagem de todos os usuários cadastrados, outra para a listagem de todas categorias cadastradas, outra do perfil do usuário, onde exibe os dados cadastrais do usuário e o total de despesas por categoria, e outra onde exibe a descriçãos das despesas do usuário de uma respectiva categoria. Em todas as páginas é possível cadastrar novos dados, assim como filtrar os dados. Todos os formulários contém validação, a aplicação é responsiva e suporta de navegação por rotas.

---

## Funcionalidades da Aplicação

- [x] Exibir o total de despesas pagas e pendentes
- [x] Adicionar/Editar/Excluir despesas
- [x] Adicionar/Editar/Excluir usuários
- [x] Adicionar/Editar/Excluir categoria de despesas
- [x] Filtro de busca, de ordenação e de status.

## Tecnologias Utilizadas

Na construção do projeto foram utilizadas as seguintes ferramentas:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[Vite](https://vitejs.dev/)** 
- **[React-hook-form](https://react-hook-form.com/)**
- **[React-router-dom](https://reactrouter.com/en/main)**
- **[Notyf](https://www.npmjs.com/package/notyf)**
- **[React-modal](https://reactcommunity.org/react-modal/)**
- **[React-icons](https://react-icons.github.io/react-icons/)**

---

## Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.   

Executando a Aplicação:

```sh
  # Clone este repositório
  $ git clone git@github.com:fabiomoura-m/expenseSystem2.0.git 
  # Acesse a pasta do projeto em seu terminal
  $ cd expenseSystem2.0
  # Instalando as dependências do projeto.
  $ npm install
  # Inicie a aplicação web
  $ npm run dev
  # Como o projeto utiliza uma api, é necessário executar o arquivo index-win.exe para inicializar a api.
```

---

## Deploy 

🚀 [expenseSystem](https://expense-system-fabiomoura-m.vercel.app/)
