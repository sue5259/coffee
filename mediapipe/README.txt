이 폴더에는 동작 인식에 쓰는 MediaPipe 파일이 들어갑니다.
상위 폴더에서 python3 download_mediapipe.py 를 한 번 실행하면 아래 파일이 채워집니다.

  mediapipe/
    vision_bundle.mjs
    pose_landmarker_lite.task
    hand_landmarker.task        (손가락 인식 · 없어도 동작)
    wasm/
      vision_wasm_internal.js
      vision_wasm_internal.wasm
      vision_wasm_nosimd_internal.js
      vision_wasm_nosimd_internal.wasm

파일이 없으면 작품은 실행할 때 인터넷(CDN)에서 같은 파일을 불러옵니다.
