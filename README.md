# API de Sugestões de Documentários

Bem-vindo à API de Sugestões de Documentários! Esta API fornece informações sobre documentários relacionados a mudanças climáticas e sustentabilidade, além de dados sobre a poluição do ar.

## Funcionalidades

- Sugestões de Documentários sobre Sustentabilidade: Receba uma lista de documentários focados em sustentabilidade e impacto ambiental.
- Sugestões de Documentários sobre Mudanças Climáticas: Explore documentários que abordam mudanças climáticas e seus efeitos no planeta.
- Dados sobre Poluição do Ar: Obtenha informações sobre a qualidade do ar para diferentes cidades.

## Endpoints

### 1. Sugestões de Documentários sobre Sustentabilidade

- URL: /suggestions/documentaries/sustainability
- Método: GET

 
2. Sugestões de Documentários sobre Mudanças Climáticas

URL: /suggestions/documentaries/climate-change
Método: GET

Parâmetros de Query:
limit (opcional): Número máximo de documentários a serem retornados. Se não fornecido, retorna todos os documentários.

3. Dados sobre Poluição do Ar
URL: /data/air-pollution
Método: GET

Parâmetros de Query:
city (opcional): Nome da cidade para a qual obter os dados sobre poluição do ar. Se não fornecido, o padrão é "São Paulo".

## Instalação
1. Clone este repositório:

git clone https://github.com/seuusuario/api-sugestoes-de-documentarios.git

2. Navegue até o diretório do projeto:
cd api-sugestoes-de-documentarios

3. Instale as dependências:

npm install

4. Crie um arquivo .env na raiz do projeto e defina a variável PORT (opcional):

PORT=3000

5.Inicie o servidor:
npm start

## Uso
A API estará disponível em http://localhost:3000 (ou na porta definida no arquivo .env).

Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções. Abra um pull request ou envie um issue para relatar problemas.

Licença
Este projeto está licenciado sob a MIT License.

### Explicações:
- Funcionalidades: Descreve as principais funcionalidades da API.
- Endpoints: Detalha cada endpoint da API, incluindo URL, método HTTP, parâmetros e exemplo de resposta.
- Instalação: Passos para instalar e configurar o projeto.
- Uso: Informações sobre como acessar a API localmente.
- Contribuição**: Orientações para contribuir com o projeto.
- Licença: Informação sobre a licença do projeto.

Sinta-se à vontade para ajustar o texto conforme necessário para atender às necessidades específicas do seu projeto.
