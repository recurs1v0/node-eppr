# node-eppr
### EPPR 2020 - Plantilla Básica para NodeJS con Express (RaspberryPi)
visita www.eppr.link para registrarte en la Escuela Virtual. 

# Instrucciones para Alumnos EPPR:

## Instalación Automática:
Desde la terminal de tu Raspberry pi copia y pega el siguiente comando:

`sudo curl -sSL github.eppr.link/eppr-node | sh` 

Revisa la sección "Correr Programa" al final de este documento.

## Instalación Manual

`sudo git clone https://github.com/recurs1v0/node-eppr.git`

`cd node-eppr`

`sudo npm init` 

En este paso llena la información necesaria para crear un nuevo proyecto usando NPM.

Luego, instalaremos 2 modulos NPM; Express & EJs con el siguiente comando

`sudo npm install --save express ejs` 

Para finalizar, cambiaremos los permisos de 2 archivos con los comandos.

`sudo chmod +x index.js` 

`sudo chown pi:root index.js` 

`cd views` 

`sudo chmod +x index.ejs` 

`sudo chown pi:root index.ejs` 

`cd ..` 

## Correr Programa

Utiliza el comando
`pwd` 
para verificar que te encuentras en la carpeta correcta "node-eppr"

Para correr el programa adentro del archivo principal index.js usa el comando

`node index` 

Ingresa a la dirección mostrada en pantalla mediante tu navegador.

