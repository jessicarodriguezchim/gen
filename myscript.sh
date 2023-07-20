#!/bin/bash
#Este es un comentario
mkdir cs01 cs02 cs03 cs04 cs05
#Entrar a la carpeta cs01
cd cs01
#crear el archivo index.html
touch index.html
#Agregando lineas en el archivo
echo"<html>" >> index.html
echo "<head>" >>index.html
echo"<litle> my html-Jessica</litle>"
echo"</head>" >> index.html
echo"<body>" >>index.html
echo"<h1> Me siento como Trinity </h1>" >> index.html
echo"</body>" >> index.html
echo"</html>" >>index.html
#Retornamos al inicio de las carpetas
cd ..
cp-r cs01 cs02
cp-r cs01 cs03
cp-r cs01 cs04
cp-r cs01 cs05
echo"Proyecto creado con éxito"
