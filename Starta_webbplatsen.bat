@echo off
cd /d "%~dp0"
title BL Kakel and Bygg - webbplats
echo ============================================
echo   BL Kakel ^& Bygg AB - installerar och startar
echo ============================================
echo.
if exist node_modules (
  echo Rensar en tidigare ofullstandig installation...
  rmdir /s /q node_modules
)
echo Installerar bibliotek (kan ta ett par minuter forsta gangen)...
echo.
call npm install
if errorlevel 1 (
  echo.
  echo Nagot gick fel under installationen. Se felmeddelandet ovan.
  pause
  exit /b 1
)
echo.
echo ============================================
echo   Startar webbplatsen...
echo   Nar du ser "Ready" nedan, oppna denna adress i din webblasare:
echo   http://localhost:3000
echo.
echo   Lamna det har fonstret oppet medan du tittar pa sidan.
echo   Stang fonstret (eller tryck Ctrl+C) for att stoppa.
echo ============================================
echo.
call npm run dev
pause
