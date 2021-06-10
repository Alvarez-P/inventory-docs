# Expense

## GET

### Obtener lista

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/expenses?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: Bearer {token}
```
::: details Queries disponibles
```sh
?limit={number}                         # 20 es el valor por defecto
?offset={number}                        # 0 es el valor por defecto
?order[]={column}&order[]=ASC           # [id, ASC] es el valor por defecto
?name={string}                          # Opcional
?description={string}                   # Opcional
?date[]={date}&date[]=equal             # Opcional
?total[]={number}&total[]=less          # Opcional
```
:::

### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/expenses/{uuid}
Authorization: Bearer {token}
```

## POST

Roles permitidos: `ADMIN` `CASHIER`
```
POST http://host.com/api/expenses
Authorization: Bearer {token}
Content-Type: application/json

{
    "name": "name",
    "description": "description",
    "date": "date",
    "total": "total"
}
```

## PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/expenses/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "name": "name",
    "description": "description",
    "date": "date",
    "total": "total"
}
```

::: tip Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

## DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/expenses/{uuid}
Authorization: Bearer {token}
```