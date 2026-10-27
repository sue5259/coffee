# 한 잔의 흔적 — 전시용 폴더 (v32: 모금 동작 인식 · 손가락 인식 · 맞춤 보정)

웹캠으로 "손(또는 컵)이 입 근처에 잠시 머물렀다가 다시 멀어지거나 아래로 내려가는" 동작을 한 모금으로 세고,
(몸 인식 모델로 입 · 어깨 · 팔을, 손 인식 모델로 손가락 21점을 찾습니다)
모금 횟수에 따라 유기체와 최종 커피링의 전체 크기가 작아집니다.
카메라 영상은 브라우저 안에서 동작 인식에만 쓰이며 녹화 · 저장 · 전송하지 않습니다.

## 폴더 구조

```
coffee-trace-exhibit/
├─ index.html               작품 (모든 버전 포함, 오른쪽 위 버전 메뉴)
├─ versions/                버전별 HTML + version-menu.js
├─ mediapipe/               동작 인식 파일 (download_mediapipe.py로 채움)
├─ serve.py                 로컬 서버 (localhost)
├─ download_mediapipe.py    MediaPipe 파일 내려받기 (한 번만)
├─ start-mac.command        macOS: 더블클릭으로 실행
└─ start-windows.bat        Windows: 더블클릭으로 실행
```

## 실행 방법

1. Python 3이 필요합니다 (macOS 기본 포함, Windows는 python.org에서 설치).
2. (권장 · 오프라인 전시) 인터넷이 되는 곳에서 한 번만:
   `python3 download_mediapipe.py`
   - 이 단계를 건너뛰면 실행할 때마다 인터넷에서 같은 파일을 불러옵니다.
3. 서버 실행:
   - macOS: `start-mac.command` 더블클릭 (처음 한 번 터미널에서 `chmod +x start-mac.command`)
   - Windows: `start-windows.bat` 더블클릭
   - 또는 터미널에서 `python3 serve.py` → 브라우저에서 http://localhost:8000/
4. Chrome에서 열고 **마시기 시작**을 누르면 카메라 권한을 묻습니다. 허용하세요.

## 알아둘 점

- `index.html`을 파일로 바로 열면(file://) 카메라를 쓸 수 없고, 화면에 안내와 함께 **수동 모금 기록(− / +)** 으로 자동 전환됩니다.
- 카메라 권한을 거부하거나 모델을 불러오지 못해도 작품은 그대로 동작하며 수동 기록으로 바뀝니다.
- 인식 감도는 `versions/coffee-trace-v32.html` 상단의 `SIP_CONFIG`에서 조절합니다
  (`enterDistance`, `exitDistance`, `dropBelow`, `minHoldMs` 등). 수정 후 `index.html`은 원본 작업 폴더의 build_bundle.py로 다시 만들거나,
  `http://localhost:8000/versions/coffee-trace-v32.html`을 직접 여세요.
- 카메라는 정면에서 상반신(어깨와 입)이 보이도록 두세요.
- 처음 쓰는 사람·자리에서는 "카메라 다시 맞추기"를 누르고 안내에 따라 시범으로 한 모금 마시세요(약 5초). 그 사람의 손–입 거리에 맞춘 범위(맞춤)가 저장됩니다.
- 패널의 "인식 범위"(좁게 · 보통 · 넓게 · 맞춤)로 감도를 바로 바꿀 수 있습니다. 선택은 그 브라우저에 기억됩니다.
- 인식이 잘 안 되면 "카메라 미리보기"를 켜 보세요. 아래에 손–입 거리와 현재 단계가 숫자로 표시됩니다.
  컵을 입에 댔을 때 거리가 `enterDistance`보다 작아지는지 확인하고, 필요하면 SIP_CONFIG 값을 조절하세요.
