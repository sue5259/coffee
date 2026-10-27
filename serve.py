#!/usr/bin/env python3
"""한 잔의 흔적 — 전시용 로컬 서버.
카메라(웹캠)는 보안 정책상 localhost 또는 HTTPS에서만 동작하므로, 이 폴더를 http://localhost 로 엽니다.
사용법:  python3 serve.py   (포트를 바꾸려면: python3 serve.py 8080)"""
import http.server, os, socketserver, sys, threading, webbrowser

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map,
                      '.mjs': 'text/javascript', '.js': 'text/javascript', '.wasm': 'application/wasm',
                      '.task': 'application/octet-stream', '.html': 'text/html; charset=utf-8'}
    def __init__(self, *a, **k): super().__init__(*a, directory=ROOT, **k)
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()
    def log_message(self, *a): pass

class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

if __name__ == '__main__':
    with Server(('127.0.0.1', PORT), Handler) as httpd:
        url = f'http://localhost:{PORT}/'
        print(f'한 잔의 흔적: {url}  (종료: Ctrl+C)')
        if '--no-browser' not in sys.argv:
            threading.Timer(.6, lambda: webbrowser.open(url)).start()
        try: httpd.serve_forever()
        except KeyboardInterrupt: pass
