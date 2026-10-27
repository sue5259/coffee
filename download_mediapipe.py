#!/usr/bin/env python3
"""MediaPipe Pose Landmarker 파일을 mediapipe/ 폴더에 내려받습니다 (전시장에서 인터넷 없이 실행하기 위해 한 번만).
사용법:  python3 download_mediapipe.py
이 파일이 없으면 작품은 실행할 때 인터넷(CDN)에서 같은 파일을 불러옵니다."""
import os, sys, urllib.request

VERSION = '0.10.14'                      # 작품 코드의 MP_VERSION과 같아야 합니다
PKG = f'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@{VERSION}'
FILES = [
    (f'{PKG}/vision_bundle.mjs', 'vision_bundle.mjs', True),
    (f'{PKG}/wasm/vision_wasm_internal.js', 'wasm/vision_wasm_internal.js', True),
    (f'{PKG}/wasm/vision_wasm_internal.wasm', 'wasm/vision_wasm_internal.wasm', True),
    (f'{PKG}/wasm/vision_wasm_nosimd_internal.js', 'wasm/vision_wasm_nosimd_internal.js', False),
    (f'{PKG}/wasm/vision_wasm_nosimd_internal.wasm', 'wasm/vision_wasm_nosimd_internal.wasm', False),
    ('https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task',
     'pose_landmarker_lite.task', True),
]
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'mediapipe')
failed = False
for url, rel, required in FILES:
    dst = os.path.join(root, rel)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    try:
        with urllib.request.urlopen(url, timeout=60) as r, open(dst + '.part', 'wb') as f:
            f.write(r.read())
        os.replace(dst + '.part', dst)
        print(f'  받음  {rel}  ({os.path.getsize(dst) // 1024} KB)')
    except Exception as e:
        if os.path.exists(dst + '.part'): os.remove(dst + '.part')
        print(f'  {"실패" if required else "건너뜀"}  {rel}  ({e})')
        failed = failed or required
if failed:
    print('\n일부 필수 파일을 받지 못했습니다. 인터넷 연결을 확인한 뒤 다시 실행하세요.'); sys.exit(1)
print('\n완료: mediapipe/ 폴더가 준비되었습니다. 이제 인터넷 없이도 카메라 인식이 동작합니다.')
