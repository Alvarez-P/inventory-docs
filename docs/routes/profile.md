# Profile

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
?email={value}              # Opcional
?firstname={value}          # Opcional
?lastname={value}           # Opcional
```
:::

### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/{uuid}
Authorization: Bearer {token}
```

## POST

Roles permitidos: `ADMIN` `CASHIER`
```
POST http://host.com/api/profiles
Authorization: Bearer {token}
Content-Type: application/json

{
    "gender": "gender", # MALE / FEMALE
    "dni": "dni",
    "phone": "phone",
    "birthday": "birthday",
    "address": "address",
    "user_id": "user_id"
}
```

## PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/profiles/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "gender": "gender", # MALE / FEMALE
    "dni": "dni",
    "phone": "phone",
    "birthday": "birthday",
    "address": "address"
}
```

::: tip Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

## DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/profiles/{uuid}
Authorization: Bearer {token}
```