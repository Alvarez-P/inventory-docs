# User

## GET

### Obtener lista

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/users?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: Bearer {token}
```
::: details Queries disponibles
```sh
?limit={number}                         # 20 es el valor por defecto
?offset={number}                        # 0 es el valor por defecto
?order[]={column}&order[]=ASC           # [id, ASC] es el valor por defecto
?email={string}                         # Opcional
?firstname={string}                     # Opcional
?lastname={string}                      # Opcional
```
:::

### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/user/{uuid}
Authorization: Bearer {token}
```

## POST

Roles permitidos: `ADMIN`
```
POST http://host.com/api/users
Authorization: Bearer {token}
Content-Type: application/json

{
    "email": "email",
    "password": "password",
    "firstname": "firstname",
    "lastname": "lastname"
}
```

## PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/users/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "email": "email",
    "password": "password",
    "firstname": "firstname",
    "lastname": "lastname"
}
```

::: tip Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

## DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/users/{uuid}
Authorization: Bearer {token}
```
