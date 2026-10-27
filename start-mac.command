#!/bin/bash
# 더블클릭으로 실행 (처음 한 번: 터미널에서 chmod +x start-mac.command)
cd "$(dirname "$0")"
python3 serve.py 8000
