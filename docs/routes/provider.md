# Provider

## GET

### Obtener lista

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/providers?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: Bearer {token}
```
::: details Queries disponibles
```sh
?limit={number}                         # 20 es el valor por defecto
?offset={number}                        # 0 es el valor por defecto
?order[]={column}&order[]=ASC           # [id, ASC] es el valor por defecto
?name={string}                           # Opcional
?country={string}                        # Opcional
?city={string}                           # Opcional
?state={string}                          # Opcional
```
:::

### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/{uuid}
Authorization: Bearer {token}
```

## POST

Roles permitidos: `ADMIN`
```
POST http://host.com/api/providers
Authorization: Bearer {token}
Content-Type: application/json

{
    "name": "name",
    "address": "address",
    "country": "country",
    "city": "city",
    "state": "state",
    "phone": "phone",
    "email": "email",
    "notes": "notes",
    "contactName": "contactName"
}
```

## PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/providers/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "name": "name",
    "address": "address",
    "country": "country",
    "city": "city",
    "state": "state",
    "phone": "phone",
    "email": "email",
    "notes": "notes",
    "contactName": "contactName"
}
```

::: tip Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

## DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/providers/{uuid}
Authorization: Bearer {token}
```