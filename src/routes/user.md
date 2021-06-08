# User

## GET

### Obtener lista

```
GET http://localhost:5000/users?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: 'Bearer {token}'
```
::: details Queries disponibles
```sh
?limit=20                   # 20 es el valor por defecto
?offset=0                   # 0 es el valor por defecto
?order[]=id&order[]=ASC     # [id, ASC] es el valor por defecto
?email={value}              # Opcional
?firstname={value}          # Opcional
?lastname={value}           # Opcional
```
:::

### Obtener uno

```
GET http://localhost:5000/{uuid}
Authorization: 'Bearer {token}'
```

## POST

```
POST http://localhost:5000/users
Authorization: 'Bearer {token}'
Content-Type: application/json

{
    "email": "adolfo@gmail.com",
    "password": "aeap19980929",
    "firstname": "Adolfo",
    "lastname": "Alvarez"
}
```

## PUT

```
PUT http://localhost:5000/users/{uuid}
Authorization: 'Bearer {token}'
Content-Type: application/json

{
    "email": "",
    "password": "",
    "firstname": "",
    "lastname": ""
}
```

::: tip Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

## DELETE

```
DELETE http://localhost:5000/users/{uuid}
Authorization: 'Bearer {token}'
```