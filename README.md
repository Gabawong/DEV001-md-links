![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/md-links-go.png)

# ACERCA DE MD-LINKS-GO

#####Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...) y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

#####Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

#####Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

#COMO INSTALAR MD-LINKS-GO

#####Para realizar la instalación, escribe el siguiente comando en tu terminal:

```javascript
npm install md-links-go
```
#INSTRUCCIONES PARA SU USO

- [ ] Introduzca el comando md-links-go, aparecerá una bienvenida con las instrucciones.
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/instruction.png)

- [ ] Después del comando escribe la ruta deseada (ejemplo: directorio/ejemplo.md), aparecerá una lista de los enlaces encontrados.
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/path.png)

- [ ] Si desea saber cuántos enlaces hay y cuántos de ellos son únicos, introduzca --stats después de la ruta del archivo.
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/stats.png)

- [ ] Si desea conocer los enlaces válidos existentes, introduzca después de la ruta la opción: --validate.
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/validate.png)

- [ ] Si quieres saber cuántos están rotos en tu archivo.md, añade después de la ruta las dos opciones, una seguida de la otra "--stats --validate" o "--validate --stats".
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/validate%20-%20stats.png)

- [ ]Si tienes alguna duda y necesitas volver a conocer los comandos, escribe "md-Links-go --help".
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/Help.png)

#ERROR
- [ ]Si introduces una ruta incorrecta te aparecerá el siguiente mensaje.
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/error.png)

#DIAGRAMA DE FLUJO
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/Diagrama%20de%20flujo%201.png)
![](https://raw.githubusercontent.com/Gabawong/DEV001-md-links/main/img/Diagrama%20de%20flujo%202.png)



















