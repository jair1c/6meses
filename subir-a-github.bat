@echo off
cd /d "%~dp0"

echo ----------------------------
echo  Agregando cambios al repo...
echo ----------------------------
git add .

echo ----------------------------
echo  Confirmando cambios...
echo ----------------------------
git commit -m "Actualizaci�n realizada desde Phoenix Code"

echo ----------------------------
echo  Subiendo a GitHub...
echo ----------------------------
git push

echo.
echo ? Cambios subidos con �xito.
pause
