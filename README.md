<p align="center">
  <a href="https://nodejs.org/en/docs" target="blank"><img src="https://images.squarespace-cdn.com/content/v1/521e95f4e4b01c5870ce81cf/1519923171672-4YI5F2WKL7JUMEJZYKTL/Node_1.png" width="400" alt="Node Logo" /></a>
</p>
<h1 align="center">  Registro Usuarios </h1>
<p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
  <img src="https://img.shields.io/badge/Node-%20v16.18.0-green">
  <img src="https://img.shields.io/badge/Axios-%20v1.3.4-blue">
  <img src="https://img.shields.io/badge/Express-%20v4.18.2-green">
  <img src="https://img.shields.io/badge/Hbs-%20v4.2.0-orange">
</p>

# Descripcion del proyecto
El sistema de registro, como aplicacion front end permitira al usuario final atravez de interfaces greaficas manipular los usuarios,
siendo asi capas de realizar insert, update y poseer la faculta 
de consultar a la base de datos.


## :hammer:Funcionalidades del proyecto
- `Funcionalidad 1`: Funcionalidad para listar los usuarios.
- `Funcionalidad 2`: Funcionalidad para actualizar los usuarios.
- `Funcionalidad 3`: Funcionalidad para crear un nuevo usuario.


## ✔️:Tecnologias utilizadas
- `Node`
- `Express`
- `Axios`
- `Javascript`
- `Hbs`

## Back End
```
https://github.com/criveral2/RiveraChristian-RegistroDeUsuarios-BackEnd.git
```

# Ejecutar en desarrollo
## 1. Clonar el repositorio

```
git clone https://github.com/criveral2/RiveraChristian-RegistroDeUsuarios-FrontEnd.git
```
<br>

## 2. Compilar el proyecto

<br>

Dentro de nuestro proyecto clonado, posicionarce dentro del proyecto:
**\RiveraChristian-RegistroDeUsuarios-BackEnd-master**
verificaremos que se encuentren los archivos **seed.json, requirements.txt, .env**
posterior mente abriremos nuestro terminal (cmd) en esa ruta y ejecutaremos:
<br>

Para instalar nuestras dependencias
```
pip install -r requirements.txt
```

Para construir nuestro esquema de base de datos
```
python manage.py makemigrations
```

Para migrar el esquema a la base de datos
```
python manage.py migrate
```

Para cargar la semilla que contiene nuestras nacionalidades dentro de la base de datos
```
python manage.py loaddata seed.json
```

Y finalmente para ejecutar la aplicacion 
```
py manage.py runserver
```
# Servicios api rest
- `Funcionalidad 1`: Funcionalidad para listar los usuarios.
  </br>
  
   URL:
   ```
   http://localhost:8000/api/users/
   ```
  
- `Funcionalidad 2`: Funcionalidad para actualizar los usuarios.
  </br>
  
   URL:
   ```
   http://localhost:8000/api/users/0163952897
   ```
   JSON:
   ```
   {
    "id": "0163952897",
    "name": "Pablo Malla",
    "birth_date": "1997-03-28",
    "country": 2
   }
   ```
- `Funcionalidad 3`: Funcionalidad para crear un nuevo usuario.
  </br>
  
   URL:
   ```
   http://localhost:8000/api/users/nuevo
   ```
   JSON:
   ```
  {
    "id": "0163952897",
    "name": "Pablo Malla",
    "birth_date": "1997-11-05",
    "country": 1
  }
   ```
- `Funcionalidad 4`: Funcionalidad para escoger nacionalidad.
  </br>
  
   URL:
   ```
   http://localhost:8000/api/users/countries/
   ```


