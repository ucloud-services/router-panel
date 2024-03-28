# router-panel

Para o correto funcionamento deste projeto, é preciso declarar as variaveis de ambiente descritas abaixo.

Ex.:

.env
```
KEYCLOAK_URL=https://sso.example.com/auth/
KEYCLOAK_REALM=example
KEYCLOAK_CLIENT_ID=router-panel
```

Além disso, é preciso mapear o arquivo json com as informações que serão exibidas no painel.

Ex.:

references.json
```json
[
  {
    "href": "https://google.com/",
    "img": "https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png",
    "alt": "Google icon",
    "name": "Google",
    "hint": "Mecanismo de busca"
  }
]
```

Exemplo de comando de execução do docker

```shell
docker run --rm --name router-panel -p 8080:80 -e KEYCLOAK_URL=https://sso.example.com/auth/ -e KEYCLOAK_REALM=example -e KEYCLOAK_CLIENT_ID=router-panel -v $(pwd)/references.json:/usr/share/nginx/html/assets/references.json ghcr.io/ucloud-services/router-panel:v0.0.1
```