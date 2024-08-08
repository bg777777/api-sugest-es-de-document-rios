## Limite de Respostas

Nossa API permite que você limite o número de respostas retornadas em uma solicitação usando o parâmetro `limit`. Isso é útil para evitar sobrecarga de dados e melhorar a performance da sua aplicação.

### Como Usar

Para definir um limite de respostas, adicione o parâmetro `limit` na URL da sua solicitação. Por exemplo, para limitar a 5 respostas:

```http
GET /documentaries?limit=5
