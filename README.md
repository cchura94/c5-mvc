# Proyecto Node MVC - comandos de GIT
## iniciar un nuevo repositorio
- para iniciar un nuevo repositorio ejecutamos

`
git init
`
- si ya existe (debemos clonar)

`
git clone direccion_remota
`
------
## Agregar un archi al area de prepareción (index)

`
git add nombre_archivo
git add .
`
## Realiza el cambio o un commit (head)
`
git commit -m "Proyecto inicial - 130521"
`
## Subir al repositorio remoto (github, gitlab, bitbucket)
- relacionar el repositorio local con el repositorio remoto
`
git remote add origin direccion_remota
`
## Subir
`
git push origin master
`