@echo off
cd /d "%~dp0"

echo ----------------------------
echo  Agregando cambios al repo...
echo ----------------------------
git add .

echo ----------------------------
echo  Confirmando cambios...
echo ----------------------------
git commit -m "Actualización realizada desde Phoenix Code"

echo ----------------------------
echo  Subiendo a GitHub...
echo ----------------------------
git push

echo.
echo ? Cambios subidos con éxito.
pause
