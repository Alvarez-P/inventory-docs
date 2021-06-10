# Sales

## Sale

### GET

#### Obtener lista

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/sales?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: Bearer {token}
```
::: details Queries disponibles
```sh
?limit={number}                         # 20 es el valor por defecto
?offset={number}                        # 0 es el valor por defecto
?order[]={column}&order[]=DESC          # [id, ASC] es el valor por defecto
?quantity[]={number}&quantity[]=greater # Opcional
?total[]={number}&total[]=greater       # Opcional
```
:::

#### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/sales/{uuid}
Authorization: Bearer {token}
```

### POST

Roles permitidos: `ADMIN` `CASHIER`
```
POST http://host.com/api/sale-orders/{uuid}/sales
Authorization: Bearer {token}
Content-Type: application/json

{
    "items": [
        {
            "quantity": quantity,
            "productId": "productId"
        }
    ]
}
```

### PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/sales/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "quantity": quantity
}
```

### DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/sales/{uuid}
Authorization: Bearer {token}
```

## Sale Order

### GET

#### Obtener lista

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/sale-orders?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: Bearer {token}
```
::: details Queries disponibles
```sh
?limit={number}                         # 20 es el valor por defecto
?offset={number}                        # 0 es el valor por defecto
?order[]={column}&order[]=ASC           # [id, ASC] es el valor por defecto
?date[]={date}&date[]=ASC               # Opcional
?totalSale[]={number}&totalSale[]=ASC   # Opcional
?status={string}                        # Opcional
```
:::

#### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/sale-orders/{uuid}
Authorization: Bearer {token}
```

### POST

Roles permitidos: `ADMIN` `CASHIER`
```
POST http://host.com/api/sale-orders
Authorization: Bearer {token}
Content-Type: application/json

{
    "date": "date",
    "status": "status"      # CANCELED / PAID / DUE
}
```

### PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/sale-orders/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "date": "date",
    "status": "status"   # CANCELED / PAID / DUE
}
```

::: tip Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

### DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/sale-orders/{uuid}
Authorization: Bearer {token}
```