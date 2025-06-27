# 🔧 Configurações Iniciais API

## Arquivo .env
Para variáveis de ambiente, crie um arquivo `.env` na raiz da pasta da API seguindo o modelo abaixo.
```
PORT=porta-que-a-api-vai-rodar
FRONTEND_URL=url-do-front-end-com-a-porta
DB_USER=usuario-mongodb
DB_PASSWORD=senha-mongodb
JWT_SECRET=secret-para-autenticacao-jwt
```

> [!WARNING]
> Caso seu usuário ou senha do mongodb comece com caracteres especiais, como o `@`, substitua os mesmos pela representação no padrão url enconding.
>
> Exemplos
> | Caractere | URL Encoding |
> | --- | --- |
> | @ | %40 |
> | : | %3A |
> | / | %2F |
> | # | %23 |