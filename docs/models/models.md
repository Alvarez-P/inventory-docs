# Modelos 

### User

| Campo         | Tipo de dato  | Descripción               |
| ------------- | :----------:  | :-------------------------|
| **id**        |    `uuid`     | Identificador único       |
| **email**     |   `string`    | Correo electrónico único  |
| **password**  |  `string`     | Contraseña                |
| **firstname** |   `string`    | Nombre                    |
| **lastname**  |  `integer`    | Apellido                  |
| **role**      |   `string`    | Role (ADMIN, CASHIER)     |
| **isActive**  |  `boolean`    | Item activo o inactivo    |

### Profile

| Campo             | Tipo de dato | Descripción            |
| ----------------- | :----------: | :--------------------- |
| **id**            |    `uuid`    | Identificador único    |
| **user_id**       |    `uuid`    | Usuario                |
| **gender**        |   `string`   | Género (FEMALE, MALE)  |
| **dni**           |   `string`   | DNI                    |
| **phone**         |   `integer`  | Número de teléfono     |
| **birthday**      |    `date`    | Fecha de nacimiento    |
| **address**       |   `string`   | Dirección              |
| **isActive**      |   `boolean`  | Item activo o inactivo |

### Expense

| Campo             | Tipo de dato  | Descripción               |
| ---------------   | :----------:  | :-----------------------  |
| **id**            |    `uuid`     | Identificador único       |
| **name**          |   `string`    | Nombre del gasto          |
| **description**   |   `string`    | Descripción               |
| **total**         |   `float`     | Total del gasto           |
| **date**          |  `date`       | Fecha del gasto           |
| **isActive**      |  `boolean`    | Item activo o inactivo    |

### Buy

| Campo             | Tipo de dato  | Descripción               |
| ---------------   | :----------:  | :-----------------------  |
| **id**            |    `uuid`     | Identificador único       |
| **productId**     |   `uuid`      | Id del producto           |
| **quantity**      |   `integer`   | Cantidad de productos     |
| **total**         |   `float`     | Total de la compra        |
| **buyOrderId**    |    `uuid`     | Id de la orden de compra  |
| **isActive**      |  `boolean`    | Item activo o inactivo    |

### BuyOrder

| Campo             | Tipo de dato  | Descripción               |
| ---------------   | :-----------: | :------------------------ |
| **id**            |    `uuid`     | Identificador único       |
| **date**          |    `date`     | Fecha de la compra        |
| **totalBuy**      |    `float`    | Total de la compra        |
| **buyerId**       |    `uuid`     | Id del comprador          |
| **status**        |     `enum`    | Status (CANCELED PAID DUE)|
| **isActive**      |   `boolean`   | Item activo o inactivo    |

### Category

| Campo             | Tipo de dato  | Descripción                   |
| ----------------- | :-----------: | :---------------------------- |
| **id**            |    `uuid`     | Identificador único           |
| **name**          |    `string`   | Nombre de la categoría        |
| **description**   |    `string`   | Descripción de la categoría   |
| **isActive**      |   `boolean`   | Item activo o inactivo        |

### Inventory

| Campo             | Tipo de dato  | Descripción                   |
| ---------------   | :-----------: | :---------------------------  |
| **id**            |    `uuid`     | Identificador único           |
| **productId**     |    `uuid`     | Id del producto               |
| **quantity**      |   `integer`   | Total de productos en tienda  |
| **isActive**      |   `boolean`   | Item activo o inactivo        |

### Product

| Campo             | Tipo de dato  | Descripción                   |
| ---------------   | :----------:  | :-----------------------      |
| **id**            |    `uuid`     | Identificador único           |
| **name**          |   `string`    | Nombre                        |
| **providerId**    |    `uuid`     | Id del proveedor              |
| **categoryId**    |    `uuid`     | Id de la categoría            |
| **price**         |    `float`    | Precio                        |
| **description**   |    `string`   | Descripción                   |
| **code**          |    `string`   | Código                        |
| **cost**          |    `float`    | Costo                         |
| **min**           |    `integer`  | Número mínimo de productos    |
| **max**           |    `integer`  | Número máximo de productos    |
| **status**        |    `enum`     | Status (DISCONTINUED ACTIVE)  |
| **image**         |    `string`   | Url de la imagen del producto |
| **isActive**      |   `boolean`   | Item activo o inactivo        |

### Provider

| Campo             | Tipo de dato  | Descripción                   |
| ---------------   | :----------:  | :-----------------------      |
| **id**            |    `uuid`     | Identificador único           |
| **name**          |   `string`    | Nombre                        |
| **address**       |    `string`   | Dirección                     |
| **country**       |    `string`   | País                          |
| **city**          |    `string`   | Ciudad                        |
| **state**         |    `string`   | Estado                        |
| **phone**         |    `integer`  | Número de teléfono            |
| **email**         |    `string`   | Correo electrónico            |
| **notes**         |    `string`   | Notas                         |
| **contactName**   |    `string`   | Nombre del contacto           |
| **isActive**      |   `boolean`   | Item activo o inactivo        |

### SaleOrder

| Campo             | Tipo de dato  | Descripción                   |
| ---------------   | :----------:  | :-----------------------      |
| **id**            |    `uuid`     | Identificador único           |
| **totalSale**     |   `float`     | Total de la venta             |
| **sellerId**      |    `uuid`     | Id del comprador              |
| **status**        |    `enum`     | Status (CANCELED PAID DUE)    |
| **isActive**      |   `boolean`   | Item activo o inactivo        |

### Sale

| Campo             | Tipo de dato  | Descripción               |
| ---------------   | :----------:  | :-----------------------  |
| **id**            |    `uuid`     | Identificador único       |
| **productId**     |   `uuid`      | Id del producto           |
| **quantity**      |   `integer`   | Cantidad de productos     |
| **total**         |   `float`     | Total de la venta         |
| **saleOrderId**   |    `uuid`     | Id de la orden de venta   |
| **isActive**      |  `boolean`    | Item activo o inactivo    |