# FrontEnd

Este repositório contém o frontend do sistema de gerenciamento de tarólogos, desenvolvido em React + Vite.

## Estrutura

- **src/pages/**: Páginas principais (Home, Tests)
- **src/components/**: Componentes reutilizáveis (Button, FormContainer, InputField)
- **src/services/api.js**: Configuração do Axios para comunicação com o backend

## Funcionalidades

- Cadastro de tarólogos
- Página de testes para todas as rotas do backend
- Visualização dos resultados das requisições

## Como rodar

1. Instale as dependências:
   ```
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador

## Comunicação com o BackEnd

- O frontend faz requisições HTTP para o backend usando Axios
- O endereço base da API está configurado em `src/services/api.js` (por padrão: `http://localhost:3000/api`)
- As páginas e componentes consomem as rotas para cadastrar e consultar dados

## Exemplos de uso

- Página **Home**: cadastro de tarólogo
- Página **Tests**: testes manuais das rotas do backend
- Páginas acessíveis:
	- **Home** (`/`): formulário de cadastro de tarólogo
	- **Tests** (`/tests`): interface para testar manualmente as rotas do backend

---

## Comunicação entre FrontEnd e BackEnd

- O frontend envia dados via HTTP (POST, GET, PUT, DELETE) para o backend
- O backend processa, valida, salva no banco e retorna respostas para o frontend
- O fluxo principal é: usuário cadastra tarólogo → backend salva e retorna os dados

---

Para dúvidas ou melhorias, consulte os arquivos de cada pasta ou peça ajuda ao assistente técnico!
