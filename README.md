<h1 align='center'>Proyecto 1 - Almacén</h1>

### Introducción
Segundo proyecto para seguir practicando la creación de un servidor `API RESTful`, el código tuvo una reestructuración para seguir las buenas prácticas de programación, usando una arquitectura de capas.

En esta ocasión se creó un servidor para administrar la mercadería de un almacén, para ello se usa un archivo JSON como base de datos y para trabajar de forma asíncrona se utilizaron los métodos `new Promise`.

Las propiedades de las entidades que se usan en este proyecto son:
``` json
  {
    "nombre": "azucar",
    "importe": 300,
    "stock": 50,
    "id": 1687843915969
  }
```

### Especificaciones
- Servidor: http://127.0.0.1:8080/productos
- Versión: 1.0.1
- Autor: Javier Anibal Villca
- Repositorio GitHub: git+https://github.com/Javier104-dev/proyecto-1.git

### Tecnologías utilizadas
- **Node.js v18.16.0:** Plataforma de ejecución de JavaScript del lado del servidor.
- **Express:** Framework web para Node.js, simplifica la creación de aplicaciones web y APIs.
- **ESLint:** Herramienta de linting para mantener un código JavaScript/Node.js consistente y legible.
- **Dotenv:** Carga variables de entorno desde un archivo `.env` en la aplicación.
- **Nodemon:** Herramienta que reinicia automáticamente la aplicación Node.js cuando se detectan cambios en el código fuente.

### Explicación de la arquitectura utilizada
La arquitectura que se utilizó es la siguiente:

| Ruta                      | Explicación                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| src                       | Contiene toda nuestra aplicación                                        |
| src/server.js             | Punto de entrada de nuestra aplicación                                  |
| src/productos             | Contiene la estructura de capas del módulo productos                    |
| src/productos/controllers | Capa encargada de gestionar las solicitudes HTTP del proyecto           |
| src/productos/services    | Lógica de negocio de nuestra aplicación                                 |
| src/productos/model       | Contiene el archivo JSON y la lógica necesaria para interactuar con él. |
| src/productos/routes      | Gestiona las rutas de acceso para cada endpoint del módulo              |
| src/productos/utilities   | Contiene funciones en común que se utilizan en todo el módulo           |
| src/config                | Distribuye las variables de entorno provenientes del archivo `.env`     |

<h1 align='center'>Métodos HTTP</h1>

### Métodos utilizados en el proyecto
| Tipo   | URI                                 | Descripción                                       |
| ------ | ----------------------------------- | ------------------------------------------------- |
| GET    | http://127.0.0.1:8080/productos     | Obtiene los registros de los productos            |
| GET    | http://127.0.0.1:8080/productos/:id | Obtiene el registro de un producto en específico  |
| POST   | http://127.0.0.1:8080/productos     | Crea un registro de un nuevo producto             |
| PUT    | http://127.0.0.1:8080/productos/:id  | Modifica el registro de un producto en específico |
| DELETE | http://127.0.0.1:8080/productos/:id  | Elimina el registro de un producto en específico  |

<h2 align='center'>Instrucciones de instalación</h2>

### Requerimientos
- IDE - Visual Studio Code v1.84.2
- Git v2.43.0
- Node.js v20.9.0

### Preparando el ambiente
- Descargar o clonar el repositorio.
- Instalar las dependencias necesarias con el comando `npm install`.
- En la raíz del proyecto crear un archivo `.env` y copiar las variables de entorno que se encuentran en el archivo `.env.dist`
- Correr el comando `npm start` para iniciar el servidor en modo desarrollo.
- Usar la URL base `http://127.0.0.1:8080/productos` para interactuar con el servidor.

---

### Autor
| [<img src='https://avatars.githubusercontent.com/u/105408069?v=4' width=115><br><sub>Javier Anibal Villca</sub>](https://github.com/Javier104-dev) |
| :------------------------------------------------------------------------------------------------------------------------------------------------: |
