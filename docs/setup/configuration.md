# Configuración

## Desarrollo

Para ejecutar la API en el ambiente de desarrollo es necesario crear un archivo llamado `.env` donde se establecerán las variables necesarias para el proyecto con el formato establecido en el archivo `.env.example`.

::: tip Nota
Para el ambiente de desarrollo las siguientes variables deben tener los siguientes valores:

```bash
DB_HOST=db
DOCKER_COMMAND=npm run start
DOCKER_NODE_ENV=development
```
:::

Para iniciar el proyecto ejecute el comando:

```sh
$ docker-compose up -d 
```

Unicamente es necesario esperar unos segundos a que la base de datos inicie y el proyecto ya estará listo para usarse.

Para detenerlo se usa el comando:

```sh
$ docker-compose down
```

## Test

Para ejecutar los tests de la API es necesario crear un archivo llamado `.env.test` donde se establecerán las variables necesarias para el proyecto con el formato establecido en el archivo `.env.example`.

::: tip Nota
Para los tests las siguientes variables deben tener los siguientes valores:

```bash
DB_HOST=db
DOCKER_COMMAND=npm run test
DOCKER_NODE_ENV=test
```
:::

Después de ésto basta con ejecutar el proyecto con el comando:

```sh
$ docker-compose --env-file ./.env.test up
```

Unicamente es necesario esperar unos segundos a que la base de datos inicie y se ejecutarán tanto las migraciones como los tests.

Para detenerlo basta con el atajo `Ctrl + C`