
![image](https://github.com/Gustavo-Seemann/Gustavo-Seemann/assets/101838119/c6fcc374-4b5e-44bb-bd10-9fd9f92d8fc1)



# GlobeSpeak.

Empresa Ficticia de Traduções e Viagens internacionais chamada GlobeSpeak, a proposta de empresa é fornecer serviços envolvendo relações internacionais, sendo eles documentos para viagens, vistos, cidadania e nacionalidade, entre outros.

## Proposta do Desenvolvimento.

O projeto desenvolvido como um desafio técnico. 
- Tempo para realização foram de 72 horas.
- Projeto deveria ser realizado em Vue 3 usando as biblietecas Vue Router e Axios.
- Implementar o front-end consumindo uma API Restful, incluindo um CRUD com validação de dados, que no contexto da aplicação é chamado de cadastro de tradutores, no quais trabalham para a empresa ficticia de relações internacionais.

## Tecnologias Usadas.

O projeto utilizou para o front-end: Vue 3, JavaScript, SASS/SCSS, Font Awesome Icons, Vue Roter, Vuex, Axios.

Para o back-end foi utilizado uma simulação com o json-server.

## Configuração do projeto.

### Instalação
```
npm install
```

### Compilação e Hot-reloads para desenvolvimento.
```
npm run serve
```

### Compilação para produção.
```
npm run build
```

### Lint dos arquivos
```
npm run lint
```

## Documentação da API

Para todar o back-end é necessário rodar o comando:

```json-server --watch data.json```

#### Retorna todas os tradutores.

```http
  GET http://localhost:3000/pessoas
```


#### Retorna todos os produtos.

```http
  GET http://localhost:3000/produtos
```

#### Retorna todos os pedidos.

```http
  GET http://localhost:3000/pedidos
```


## Autores

- [@Gustavo-Seemann](https://www.github.com/Gustavo-Seemann)


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
