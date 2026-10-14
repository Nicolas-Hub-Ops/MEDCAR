# Fundamentos de Back-End com JavaScript

## 1. Conceitos fundamentais

### Backend
É a parte da aplicação responsável pelo processamento de dados, execução de regras de negócio, comunicação com recursos como bancos de dados e serviços externos, autenticação, autorização e tratamento de erros.

**Exemplo prático:** em um sistema de oficina mecânica, o Back-End verifica se um cliente existe antes de cadastrar um veículo associado a ele.

### API
É a sigla para *Application Programming Interface* (Interface de Programação de Aplicações). É uma interface que permite a comunicação entre diferentes sistemas ou aplicações, seguindo um conjunto de regras.

**Exemplo prático:** o Front-End envia uma requisição `GET /clients` para uma API e recebe a lista de clientes cadastrados.

### REST
É a sigla para *Representational State Transfer*. É um estilo arquitetural utilizado no desenvolvimento de APIs, que define princípios para a comunicação entre sistemas, geralmente utilizando HTTP e recursos identificados por URLs.

**Exemplo prático:** uma API REST pode utilizar os seguintes endpoints para gerenciar clientes:

- `GET /clients`: consulta clientes.
- `POST /clients`: cadastra um cliente.
- `PUT /clients/10`: substitui os dados do cliente de ID 10.
- `DELETE /clients/10`: exclui o cliente de ID 10.

### CRUD
É a sigla para *Create, Read, Update, Delete* (Criar, Ler, Atualizar e Excluir). Representa as quatro operações básicas utilizadas para gerenciar dados em uma aplicação.

**Exemplo prático:** em um cadastro de clientes:

- **Create:** cadastrar um cliente.
- **Read:** consultar um cliente.
- **Update:** atualizar o e-mail de um cliente.
- **Delete:** excluir um cliente.

### Node.js
É um ambiente de execução JavaScript que permite executar código JavaScript fora do navegador, sendo amplamente utilizado no desenvolvimento Back-End.

**Exemplo prático:** executar um arquivo JavaScript no terminal:

```javascript
console.log('Meu primeiro programa Back-End!');
```

Comando para executar o arquivo `index.js`:

```bash
node index.js
```

### Express
É um framework web para Node.js que facilita a criação de servidores e APIs HTTP, oferecendo recursos para gerenciar rotas, requisições, respostas e middlewares.

**Exemplo prático:** criar uma rota que retorna uma mensagem em JSON:

```javascript
import express from 'express';

const app = express();

app.get('/clients', (req, res) => {
    res.status(200).json({
        message: 'Lista de clientes'
    });
});

app.listen(3000);
```

Ao acessar `GET /clients`, o servidor retorna uma resposta JSON.

### MongoDB
É um banco de dados NoSQL orientado a documentos, que armazena dados em estruturas semelhantes a JSON, utilizando internamente o formato BSON.

**Exemplo prático:** armazenar um documento na coleção `clients`:

```json
{
    "name": "Nicolas",
    "email": "nicolas@example.com",
    "phone": "11999999999"
}
```

Nesse exemplo, `clients` é a coleção, e o objeto representa um documento.

---

## 2. HTTP

**HTTP** é a sigla para *Hypertext Transfer Protocol* (Protocolo de Transferência de Hipertexto). É um protocolo utilizado na comunicação entre clientes e servidores na Web.

Ele define como as requisições são enviadas e como as respostas são devolvidas.

**Exemplo prático:** o Front-End envia uma requisição HTTP para consultar os clientes de uma API:

```http
GET /clients HTTP/1.1
Host: localhost:3000
```

O servidor processa a requisição e retorna uma resposta HTTP.

## 3. Métodos HTTP

São métodos que indicam a operação pretendida sobre um recurso.

| Método | Finalidade | Exemplo |
|---|---|---|
| `GET` | Consultar dados | `GET /clients` |
| `POST` | Criar um recurso | `POST /clients` |
| `PUT` | Substituir um recurso | `PUT /clients/10` |
| `PATCH` | Atualizar parcialmente um recurso | `PATCH /clients/10` |
| `DELETE` | Excluir um recurso | `DELETE /clients/10` |

**Exemplo prático:** utilizar `POST /clients` para enviar os dados de um novo cliente à API.

## 4. Status Codes

São códigos numéricos enviados pelo servidor para indicar o resultado de uma requisição HTTP.

Os códigos são divididos em categorias:

| Categoria | Significado |
|---|---|
| `1xx` | Informações |
| `2xx` | Sucesso |
| `3xx` | Redirecionamento |
| `4xx` | Erros relacionados à requisição do cliente |
| `5xx` | Erros no servidor |

Alguns códigos comuns:

| Código | Significado | Exemplo |
|---|---|---|
| `200 OK` | Requisição processada com sucesso | Consulta realizada. |
| `201 Created` | Recurso criado com sucesso | Cliente cadastrado. |
| `204 No Content` | Requisição concluída sem conteúdo na resposta | Exclusão realizada sem retornar um corpo. |
| `400 Bad Request` | Requisição inválida | Dados enviados em formato inadequado. |
| `401 Unauthorized` | Autenticação necessária ou inválida | Token ausente ou inválido. |
| `403 Forbidden` | Acesso não permitido | Usuário sem permissão para excluir um cliente. |
| `404 Not Found` | Recurso não encontrado | Cliente inexistente. |
| `500 Internal Server Error` | Erro interno do servidor | Falha inesperada durante o processamento. |

**Exemplo prático com Express:**

```javascript
res.status(201).json({
    message: 'Cliente cadastrado com sucesso'
});
```

Nesse caso, o servidor retorna o status `201` e uma mensagem em JSON.

## 5. JSON

**JSON** é a sigla para *JavaScript Object Notation*. É um formato textual utilizado para representar e transmitir dados estruturados entre sistemas.

Apesar do nome, JSON pode ser utilizado por diferentes linguagens de programação.

**Exemplo prático:**

```json
{
    "name": "Nicolas",
    "email": "nicolas@example.com",
    "age": 25
}
```

Esse objeto representa os dados de um cliente.

No Express, podemos enviar JSON utilizando:

```javascript
res.json({
    name: 'Nicolas',
    email: 'nicolas@example.com'
});
```

Para interpretar requisições com corpo JSON, utilizamos o middleware:

```javascript
app.use(express.json());
```

Assim, os dados enviados no corpo da requisição podem ser acessados por meio de `req.body`, desde que a requisição utilize um formato compatível.

## 6. Rotas (Routes)

São definições que associam caminhos e métodos HTTP às funções responsáveis por processar as requisições correspondentes.

No Express, as rotas determinam quais funções serão executadas quando determinados endpoints forem acessados.

**Exemplo prático:**

```javascript
app.get('/clients', (req, res) => {
    res.json({
        message: 'Consulta de clientes'
    });
});
```

Nesse exemplo, uma requisição `GET /clients` executa a função associada à rota.

Podemos separar as rotas em arquivos próprios:

```javascript
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Lista de clientes'
    });
});

export default router;
```

Se esse router for registrado com `app.use('/clients', router)`, o endpoint será `GET /clients`.

## 7. Controllers

São componentes responsáveis por receber e processar as requisições HTTP no nível da aplicação web, coordenando a chamada das funcionalidades necessárias e preparando as respostas.

Normalmente, um controller chama um service para executar as regras de negócio.

**Exemplo prático:**

```javascript
import clientService from '../services/clientService.js';

async function getClients(req, res, next) {
    try {
        const clients = await clientService.getAll();

        res.status(200).json(clients);
    } catch (error) {
        next(error);
    }
}

export default { getClients };
```

Nesse exemplo, o controller solicita os clientes ao service e devolve o resultado ao consumidor da API.

O erro é encaminhado ao middleware de tratamento de erros do Express.

## 8. Services

São componentes utilizados para concentrar e organizar as regras de negócio e as operações necessárias para realizar determinadas funcionalidades.

Eles ajudam a separar a lógica da aplicação dos detalhes da comunicação HTTP.

**Exemplo prático:**

```javascript
import Client from '../models/Client.js';

async function getAll() {
    return await Client.find();
}

export default { getAll };
```

Nesse exemplo, o service consulta os clientes utilizando o model do Mongoose.

O controller pode chamar essa função sem precisar conhecer os detalhes da consulta ao banco de dados.

## 9. Middlewares

São funções executadas durante o processamento de uma requisição HTTP no Express.

Um middleware pode acessar a requisição, modificar dados, executar verificações, encerrar a resposta ou transferir o processamento para a próxima etapa.

**Exemplo prático:**

```javascript
function requestLogger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);

    next();
}

export default requestLogger;
```

Para utilizar esse middleware:

```javascript
app.use(requestLogger);
```

Quando uma requisição chegar à aplicação, o middleware registrará o método HTTP e a URL no terminal. O `next()` permite que o processamento continue.

Middlewares também podem ser utilizados para autenticação, validação, registro de logs e tratamento centralizado de erros.

---

## 10. Fluxo de uma API com Express

Os conceitos anteriores trabalham em conjunto durante o processamento de uma requisição.

Um fluxo comum em uma aplicação Back-End é:

```text
Cliente / Front-End
        |
        v
Requisição HTTP
        |
        v
Middleware
        |
        v
Rota (Route)
        |
        v
Controller
        |
        v
Service
        |
        v
Model (Mongoose)
        |
        v
Banco de dados (MongoDB)
        |
        v
Resposta HTTP
        |
        v
Cliente / Front-End
```

Esse fluxo é ilustrativo. Dependendo da aplicação, podem existir outros middlewares, validações, serviços externos e caminhos de execução.

### Exemplo de funcionamento

Imagine que o Front-End envie uma requisição `POST /clients` para cadastrar um cliente.

1. O Express recebe a requisição.
2. Os middlewares executam as etapas configuradas para aquela requisição.
3. A rota identifica o controller responsável.
4. O controller recebe os dados enviados.
5. O service executa as regras de negócio.
6. O model utiliza o Mongoose para salvar o documento no MongoDB.
7. O controller retorna uma resposta HTTP com o resultado.

Essa organização facilita a manutenção, a reutilização de código e a separação de responsabilidades.