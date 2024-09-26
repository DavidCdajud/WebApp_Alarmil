<<<<<<< HEAD
# UX_Web_Alarmil
=======
# Alarmil

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server# Alarmil WebApp

Este proyecto es una aplicación web desarrollada con Angular. El objetivo de la aplicación es permitir a los usuarios iniciar sesión, gestionar misiones y monitorear el estado de las alarmas.

## Características

- Pantalla de inicio de sesión
- Creación y monitoreo de alarmas
- Navegación entre pantallas

## Tecnologías utilizadas

- *Angular*: Framework para el desarrollo de aplicaciones web.
- *Bootstrap*: Framework CSS para el diseño de la interfaz de usuario.
- *Google Fonts*: Se utiliza la fuente Roboto.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- *Node.js*: [Descargar Node.js](https://nodejs.org/)
- *Angular CLI*: Puedes instalarlo globalmente ejecutando el siguiente comando:

  ```bash
  npm install -g @angular/cli
Instalación
Sigue los siguientes pasos para clonar y ejecutar el proyecto localmente:

Clona este repositorio:

bash
Copy code
git clone https://github.com/tu-usuario/Alarmil-WebApp.git
Navega al directorio del proyecto:

bash
Copy code
cd Alarmil-WebApp
Instala las dependencias del proyecto:

bash
Copy code
npm install
Ejecución del proyecto
Para iniciar la aplicación en modo de desarrollo, usa el siguiente comando:

bash
Copy code
ng serve
Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador en la URL http://localhost:4200.

Compilación para producción
Para compilar el proyecto en modo de producción:

bash
Copy code
ng build --prod
Este comando generará una carpeta dist/ con los archivos listos para ser desplegados en un servidor.

Estructura del proyecto
bash
Copy code
src/
  ├── app/
  │   ├── login/              # Componente de inicio de sesión
  │   ├── app.component.ts    # Componente raíz
  ├── assets/                 # Recursos estáticos (imágenes, fuentes, etc.)
  ├── styles.css              # Estilos globales
  └── index.html              # Archivo HTML principal
Contribuir
Si deseas contribuir a este proyecto, sigue los siguientes pasos:

Realiza un fork del repositorio
Crea una rama para tu funcionalidad (git checkout -b nueva-funcionalidad)
Realiza tus cambios y haz commit (git commit -m 'Agrega nueva funcionalidad')
Empuja tus cambios al repositorio remoto (git push origin nueva-funcionalidad)
Crea un Pull Request
Licencia
Este proyecto está licenciado bajo la MIT License.

markdown
Copy code

### Explicación:

- *Requisitos previos:* Indico que se necesita tener *Node.js* y *Angular CLI* instalados para poder ejecutar el proyecto.
- *Instrucciones de instalación:* Incluyo los pasos para clonar el repositorio, navegar al directorio del proyecto y ejecutar npm install para instalar las dependencias.
- *Ejecución:* Proporciono el comando para ejecutar el servidor de desarrollo (ng serve) y cómo acceder a la aplicación en el navegador.
- *Compilación para producción:* Explico cómo generar una versión lista para producción con ng build --prod.
- *Estructura del proyecto:* Proporciono una descripción general de cómo está organizado el proyecto.
- *Contribuir:* Guío a los colaboradores sobre cómo contribuir al proyecto.

Este README.md cubre los aspectos básicos necesarios para ejecutar tu proyecto y contribuir al mismo. Si necesitas algo más específico o detallado, no dudes en decirme.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> 6297f15 (Creación Ambiente desarrollo)
