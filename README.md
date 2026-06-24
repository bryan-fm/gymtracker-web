GymTracker Web

Frontend da plataforma GymTracker, uma aplicação para gerenciamento de treinos e acompanhamento da evolução física dos usuários.

O projeto foi desenvolvido utilizando React e TypeScript, consumindo uma API GraphQL construída com NestJS.

Objetivo

O GymTracker surgiu como um projeto pessoal para estudo e aplicação de conceitos modernos de desenvolvimento frontend e backend, incluindo autenticação JWT, GraphQL, arquitetura em camadas, observabilidade e CI/CD.

Além da funcionalidade de gerenciamento de treinos, o projeto serve como ambiente para experimentação de boas práticas de arquitetura e engenharia de software.

Funcionalidades
Autenticação
Login de usuários
Persistência de sessão através de JWT
Rotas protegidas
Controle de acesso baseado em autenticação
Treinos
Listagem de treinos cadastrados
Cadastro de novos treinos
Visualização das informações de cada treino
Registro de check-in nos treinos
Integração com API
Consumo de API GraphQL
Gerenciamento de estado remoto utilizando React Query
Atualização automática dos dados após mutações
Tecnologias Utilizadas
Frontend
React
TypeScript
Vite
React Router
TanStack Query
Backend
NestJS
GraphQL
Prisma
PostgreSQL
Estrutura do Projeto
src/
├── components/     # Componentes reutilizáveis
├── context/        # Contextos globais
├── features/       # Módulos da aplicação
├── hooks/          # Hooks customizados
├── services/       # Comunicação com API
├── types/          # Tipagens compartilhadas

A organização segue uma abordagem baseada em funcionalidades (feature-based architecture), buscando facilitar a manutenção e evolução do sistema.

Executando Localmente
Instalação
npm install
Ambiente de desenvolvimento
npm run dev

Aplicação disponível em:

http://localhost:5173
Integração com Backend

O frontend depende da API GymTracker:

Autenticação JWT
API GraphQL
Gerenciamento de treinos
Check-ins de usuários

Repositório do backend:

https://github.com/bryan-fm/gymtracker

Aprendizados Aplicados

Durante o desenvolvimento foram explorados conceitos como:

Organização modular de aplicações React
Gerenciamento de estado remoto
Consumo de APIs GraphQL
Autenticação baseada em JWT
Separação de responsabilidades
Integração frontend/backend
Boas práticas de tipagem com TypeScript

Próximos Passos:
Cadastro e gerenciamento de Dietas
Histórico de evolução dos treinos
Área administrativa
Dashboard com métricas de progresso
Integração com notificações
Melhorias de observabilidade e monitoramento
