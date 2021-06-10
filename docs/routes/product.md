# Product

## GET

### Obtener lista

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/products?limit=20&offset=0&order[]=id&order[]=ASC
Authorization: Bearer {token}
```
::: details Queries disponibles
```sh
?limit={number}                         # 20 es el valor por defecto
?offset={number}                        # 0 es el valor por defecto
?order[]={column}&order[]=ASC           # [id, ASC] es el valor por defecto
?price[]={number}&price[]=equal         # Opcional
?code={string}                          # Opcional
?description={string}                   # Opcional
?cost[]={number}&cost[]=less            # Opcional
?status={string}                        # Opcional
```
:::

### Obtener uno

Roles permitidos: `ADMIN` `CASHIER`
```
GET http://host.com/api/products/{uuid}
Authorization: Bearer {token}
```

## POST

Roles permitidos: `ADMIN`
```
POST http://host.com/api/products
Authorization: Bearer {token}
Content-Type: application/json

{
    "name": "name",
    "providerId": "providerId",
    "categoryId": "categoryId",
    "price": price,
    "code": "code",
    "description": "description",
    "cost": "cost",
    "min": min,
    "max": max,
    "status": "status",         # DISCONTINUED / ACTIVE
    "image": "image"
}
```

## PUT

Roles permitidos: `ADMIN`
```
PUT http://host.com/api/products/{uuid}
Authorization: Bearer {token}
Content-Type: application/json

{
    "name": "name",
    "providerId": "providerId",
    "categoryId": "categoryId",
    "price": price,
    "code": "code",
    "description": "description",
    "cost": "cost",
    "min": min,
    "max": max,
    "status": "status",         # DISCONTINUED / ACTIVE
    "image": "image"
}
```

::: tip Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

## DELETE

Roles permitidos: `ADMIN`
```
DELETE http://host.com/api/products/{uuid}
Authorization: Bearer {token}
```