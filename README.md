# Meu Time - Aplicação Web para Visualizar Informações sobre Ligas e Copas

Meu Time é uma aplicação web desenvolvida em Next.js, TypeScript e Tailwind CSS que utiliza a API-Football para exibir informações sobre ligas e copas ao redor do mundo.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Docker e Docker Compose

## Configuração da API-Football

Para acessar a API-Football e obter os dados necessários para a aplicação, você precisará criar uma conta na API-Football e obter uma chave de autenticação (API key). Siga as etapas abaixo:

1. Acesse o site da API-Football [api](https://dashboard.api-football.com/) e crie uma conta.
2. Faça login em sua conta e obtenha a chave de autenticação (API key).

## Configuração do Projeto

Siga as etapas abaixo para configurar e executar o projeto localmente:

1. Clone este repositório para o seu ambiente local.

```shell
git clone https://github.com/diegoandcontroll/fut-app.git
```
2. Acesse o diretório do projeto.
3. Rodando o projeto com docker-compose
```shell
docker-compose up --build
```
4.Executando sem o docker
```shell
  yarn dev
```
