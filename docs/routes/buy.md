# Buys

## Buy

### GET

#### Obtener lista

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/buys?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: Bearer {token}
```
::: details Queries disponibles
```sh
?limit={number}                         # 20 es el valor por defecto
?offset={number}                        # 0 es el valor por defecto
?order[]={column}&order[]=ASC           # [id, ASC] es el valor por defecto
?quantity[]={number}&quantity[]=equal   # Opcional
```
:::

#### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/buys/{uuid}
Authorization: Bearer {token}
```

### POST

Roles permitidos: `ADMIN`
```
POST http://host.com/api/buy-orders/{uuid}/buys
Authorization: Bearer {token}
Content-Type: application/json

{
    "items": [{
        "productId": "productId",
        "quantity": quantity
    }]
}
```

### PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/buys/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "quantity": quantity
}
```

### DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/buys/{uuid}
Authorization: Bearer {token}
```

## Buy Order

### GET

#### Obtener lista

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/buy-orders?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: Bearer {token}
```
::: details Queries disponibles
```sh
?limit={number}                         # 20 es el valor por defecto
?offset={number}                        # 0 es el valor por defecto
?order[]={column}&order[]=ASC           # [id, ASC] es el valor por defecto
?totalBuy[]={number}&totalBuy[]=equal   # Opcional
?status={string}                        # Opcional ENUM('CANCELED', 'PAID', 'DUE')
```
:::

#### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/buy-orders/{uuid}
Authorization: Bearer {token}
```

### POST

Roles permitidos: `ADMIN` `CASHIER`
```
POST http://host.com/api/buy-orders
Authorization: Bearer {token}
Content-Type: application/json

{
    "date": "date",
    "status": "status"          # PAID / DUE
}
```

### PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/buy-orders/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "date": "date",
    "status": "status"          # PAID / DUE / CANCELED
}
```

::: tip Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

### DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/buy-orders/{uuid}
Authorization: Bearer {token}
```