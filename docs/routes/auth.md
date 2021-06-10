# Auth

## POST

### Iniciar sesión

```
POST http://host.com/api/auth/sigin
Content-Type: application/json

{
    "email": "email",
    "password": "password"
}
```

### Renovar access_token

```
POST http://host.com/api/auth/refresh
Content-Type: application/json

{
    "refresh_token": "refresh_token"
}
```
