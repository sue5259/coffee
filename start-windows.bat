@echo off
cd /d "%~dp0"
python serve.py 8000
if errorlevel 1 py serve.py 8000
pause
