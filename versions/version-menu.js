/* 한 잔의 흔적 · 버전 메뉴
   모든 버전 파일이 이 파일 하나를 함께 읽는다.
   새 버전을 만들면 VERSION_HISTORY 맨 위에 항목 하나만 추가하면 된다. */
const VERSION_HISTORY = [
  { id: "v38", file: "coffee-trace-v38.html", title: "바깥 테두리는 이전 방식으로", desc: "v37의 층 배치는 유지하고, 바깥 테두리만 이전의 옅은 외곽색 빛으로 되돌림", date: "2026-10-28", latest: true },
  { id: "v37", file: "coffee-trace-v37.html", title: "커피링 색을 층으로 조화롭게", desc: "바깥 테두리 · 띠 · 안쪽 경계 · 가운데에 맛 팔레트의 서로 다른 색을 반지름 방향의 층으로 배치하고, 각도별 색은 띠 안의 은은한 얼룩으로만 남김", date: "2026-10-28" },
  { id: "v36", file: "coffee-trace-v36.html", title: "커피링에도 맛 팔레트의 색 조합", desc: "유기체 덩어리들이 있던 방향의 맛 색이 커피링 띠로 모여, 최종 얼룩에서도 팔레트의 여러 색이 보인다", date: "2026-10-28" },
  { id: "v35", file: "coffee-trace-v35.html", title: "덩어리마다 맛의 색이 보이는 유기체", desc: "맛 팔레트의 다섯 색이 각각 덩어리로 자리 잡고 서로 오가며 섞여, 한 맛 안에서도 다채롭게 보인다", date: "2026-10-28" },
  { id: "v34", file: "coffee-trace-v34.html", title: "마실수록 커지는 유기체", desc: "처음에는 작게 시작해 모금이 늘수록 유기체와 최종 커피링이 커진다 (0회 0.4배 → 많이 마실수록 1.1배)", date: "2026-10-28" },
  { id: "v33", file: "coffee-trace-v33.html", title: "실제 모금 동작 인식 개선", desc: "손–입 거리뿐 아니라 접근, 입 주변 가림, 후퇴의 시간적 흐름을 판정하여 실제 컵 사용 시의 모금 인식을 개선한 버전", date: "2026-10-27" },
  { id: "v32", file: "coffee-trace-v32.html", title: "모금 동작 인식 보정 · 손 가림 수정", date: "2026-10-27" },
  { id: "v31", file: "coffee-trace-v31.html", title: "입 주변에 잠깐 머문 뒤 내려가면 한 모금", date: "2026-10-27" },
  { id: "v30", file: "coffee-trace-v30.html", title: "손가락 인식 (손 인식 모델 추가)", date: "2026-10-27" },
  { id: "v29", file: "coffee-trace-v29.html", title: "입 근처에서 손이 가려져도 모금 유지", date: "2026-10-27" },
  { id: "v28", file: "coffee-trace-v28.html", title: "모금 인식 범위 확대 · 인식 범위 선택", date: "2026-10-27" },
  { id: "v27", file: "coffee-trace-v27.html", title: "모금 인식 보완 (입 가림 · 컵 쥔 손 · 거리 표시)", date: "2026-10-27" },
  { id: "v26", file: "coffee-trace-v26.html", title: "모금 동작 인식 · 유기체와 커피링 크기", date: "2026-10-27" },
  { id: "v25", file: "coffee-trace-v25.html", title: "유기체와 커피링의 연속적인 전환", date: "2026-10-27" },
  { id: "v24", file: "coffee-trace-v24.html", title: "자연스러운 얼룩 형태", date: "2026-10-27" },
  { id: "v23", file: "coffee-trace-v23.html", title: "설명 문장 삭제 · 물방울 계속 생성", date: "2026-10-27" },
  { id: "v22", file: "coffee-trace-v22.html", title: "발효 · 캐러멜 · 견과 · 초콜릿 색 분리", date: "2026-10-27" },
  { id: "v21", file: "coffee-trace-v21.html", title: "역동적인 얼룩 형태", date: "2026-10-23" },
  { id: "v20", file: "coffee-trace-v20.html", title: "누른 그 자리에서 침전", date: "2026-10-23" },
  { id: "v19", file: "coffee-trace-v19.html", title: "길게 눌러 침전 · 누른 자리 형태", date: "2026-10-23" },
  { id: "v18", file: "coffee-trace-v18.html", title: "버전 13 표현 복원 + 상호작용", date: "2026-10-23" },
  { id: "v17", file: "coffee-trace-v17.html", title: "유기체 그라데이션 복원 · 흔적 줄임", date: "2026-10-23" },
  { id: "v16", file: "coffee-trace-v16.html", title: "커서 흰 점 수정", date: "2026-10-23" },
  { id: "v15", file: "coffee-trace-v15.html", title: "물방울 흔적 · 자동 침전", date: "2026-10-23" },
  { id: "v14", file: "coffee-trace-v14.html", title: "갈색 띠 제거 · 향미 색 외곽", date: "2026-10-23" },
  { id: "v13", file: "coffee-trace-v13.html", title: "바디감 → 침전 구조", date: "2026-10-23" },
  { id: "v12", file: "coffee-trace-v12.html", title: "기분 → 맛 (7가지)", date: "2026-10-23" },
  { id: "v11", file: "coffee-trace-v11.html", title: "PNG 대신 SVG 저장", date: "2026-10-23" },
  { id: "v10", file: "coffee-trace-v10.html", title: "온도 입력 → 마시는 중", date: "2026-10-23" },
  { id: "v09", file: "coffee-trace-v09.html", title: "개방감 범위 · 혼잡도 속도", date: "2026-10-23" },
  { id: "v08", file: "coffee-trace-v08.html", title: "개방감 = 떠다니는 범위", date: "2026-10-23" },
  { id: "v07", file: "coffee-trace-v07.html", title: "개방감 = 움직임 폭", date: "2026-10-14" },
  { id: "v06", file: "coffee-trace-v06.html", title: "개방감 움직임 강화", date: "2026-10-14" },
  { id: "v05", file: "coffee-trace-v05.html", title: "유기적 커피링 침전", date: "2026-10-13" },
  { id: "v04", file: "coffee-trace-v04.html", title: "연속 Gaussian 유기체", date: "2026-10-13" },
  { id: "v03", file: "coffee-trace-v03.html", title: "유기체 깨짐 수정",     date: "2026-10-13" },
  { id: "v02", file: "coffee-trace-v02.html", title: "전체 화면 적용",       date: "2026-10-12" },
  { id: "v01", file: "coffee-trace-v01.html", title: "초기 버전",           date: "2026-10-12" }
];

(function () {
  'use strict';
  // 이 스크립트가 있는 폴더를 기준으로 파일 경로를 만든다 (어느 위치의 HTML에서 읽어도 동작)
  const here = document.currentScript && document.currentScript.src ? document.currentScript.src : location.href;
  const currentId = window.COFFEE_TRACE_VERSION || (VERSION_HISTORY[0] && VERSION_HISTORY[0].id);
  const current = VERSION_HISTORY.find(v => v.id === currentId) || VERSION_HISTORY[0];

  const css = `
.vmenu-btn{position:fixed;z-index:6;display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 12px;border-radius:999px;border:1px solid rgba(255,255,255,.75);background:rgba(255,255,255,.62);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);box-shadow:0 1px 0 rgba(255,255,255,.9) inset,0 3px 10px -4px rgba(70,95,120,.25);font:500 12px/1 "Pretendard","Inter","Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic",system-ui,sans-serif;color:#2B3242;cursor:pointer;letter-spacing:.01em}
.vmenu-btn:hover{background:rgba(255,255,255,.8)}
.vmenu-btn:focus-visible{outline:2px solid #151A2E;outline-offset:2px}
.vmenu-btn .vmenu-caret{font-size:9px;color:#6F7A88;transition:transform .15s}
.vmenu-btn[aria-expanded="true"] .vmenu-caret{transform:rotate(180deg)}
.vmenu-pop{position:fixed;z-index:7;width:264px;max-width:calc(100vw - 16px);max-height:calc(100vh - 90px);max-height:calc(100dvh - 90px);overflow-y:auto;overscroll-behavior:contain;padding:10px;border-radius:16px;border:1px solid rgba(255,255,255,.8);background:rgba(244,247,250,.94);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 14px 30px -14px rgba(60,85,110,.45);font-family:"Pretendard","Inter","Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic",system-ui,sans-serif;color:#2B3242}
.vmenu-pop[hidden]{display:none!important}
.vmenu-title{margin:2px 6px 8px;font-size:11.5px;font-weight:600;color:#6F7A88;letter-spacing:.02em}
.vmenu-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px}
.vmenu-item{display:grid;grid-template-columns:14px 30px minmax(0,1fr) auto;align-items:center;gap:6px;width:100%;padding:8px 8px;border:0;border-radius:10px;background:transparent;font:inherit;font-size:12px;color:#2B3242;text-align:left;cursor:pointer;box-shadow:none}
.vmenu-item:hover,.vmenu-item:focus{background:rgba(255,255,255,.85);outline:none}
.vmenu-item:focus-visible{box-shadow:0 0 0 2px #151A2E inset}
.vmenu-item[aria-checked="true"]{font-weight:600;color:#151A2E}
.vmenu-check{font-size:11px;color:#151A2E}
.vmenu-id{font:600 11.5px ui-monospace,"SF Mono",Menlo,Consolas,monospace;color:#151A2E}
.vmenu-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.vmenu-name small{display:block;margin-top:2px;font-size:10.5px;font-weight:400;color:#8A95A3}
.vmenu-latest{font-size:10.5px;font-weight:600;padding:2px 7px;border-radius:7px;background:#D4DEE6;color:#151A2E}
@media (prefers-reduced-motion:reduce){.vmenu-btn .vmenu-caret{transition:none}}`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'vmenu-btn';
  btn.id = 'vmenuBtn';
  btn.setAttribute('aria-haspopup', 'menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'vmenuPop');
  btn.innerHTML = `버전 ${current.id} <span class="vmenu-caret" aria-hidden="true">▾</span>`;

  const pop = document.createElement('div');
  pop.className = 'vmenu-pop';
  pop.id = 'vmenuPop';
  pop.hidden = true;
  pop.innerHTML = `<p class="vmenu-title" id="vmenuTitle">버전 기록</p>
    <ul class="vmenu-list" role="menu" aria-labelledby="vmenuTitle">${VERSION_HISTORY.map(v => `
      <li role="none"><button type="button" class="vmenu-item" role="menuitemradio" tabindex="-1"
        aria-checked="${v.id === current.id}" data-file="${v.file}"${v.desc ? ` title="${v.desc}"` : ''}>
        <span class="vmenu-check" aria-hidden="true">${v.id === current.id ? '✓' : ''}</span>
        <span class="vmenu-id">${v.id}</span>
        <span class="vmenu-name">${v.title}<small>${v.date}</small></span>
        ${v.latest ? '<span class="vmenu-latest">최신</span>' : '<span></span>'}
      </button></li>`).join('')}
    </ul>`;
  document.body.appendChild(btn);
  document.body.appendChild(pop);
  const items = () => Array.from(pop.querySelectorAll('.vmenu-item'));

  // 버튼 바로 아래, 화면 밖으로 벗어나지 않게
  function place(){
    const r = btn.getBoundingClientRect();
    const w = Math.min(264, window.innerWidth - 16);
    let left = r.right - w;
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    pop.style.width = w + 'px';
    pop.style.left = left + 'px';
    pop.style.top = (r.bottom + 6) + 'px';
  }
  function open(focusFirst){
    pop.hidden = false; btn.setAttribute('aria-expanded', 'true'); place();
    const list = items(), i = Math.max(0, list.findIndex(el => el.getAttribute('aria-checked') === 'true'));
    if (focusFirst) list[i].focus();
  }
  function close(returnFocus){
    if (pop.hidden) return;
    pop.hidden = true; btn.setAttribute('aria-expanded', 'false');
    if (returnFocus) btn.focus();
  }
  function go(el){
    const file = el.dataset.file;
    if (el.getAttribute('aria-checked') === 'true'){ close(true); return; }
    if (typeof window.COFFEE_TRACE_GO === 'function'){ window.COFFEE_TRACE_GO(file); return; }   // 한 파일 묶음 안에서는 묶음이 전환한다
    window.location.href = new URL(file, here).href;      // 현재 창에서 해당 버전으로 전환
  }

  btn.addEventListener('click', () => pop.hidden ? open(false) : close(false));
  btn.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(true); }
  });
  pop.addEventListener('click', e => { const el = e.target.closest('.vmenu-item'); if (el) go(el); });
  pop.addEventListener('keydown', e => {
    const list = items(), i = list.indexOf(document.activeElement);
    if (e.key === 'ArrowDown'){ e.preventDefault(); list[(i + 1) % list.length].focus(); }
    else if (e.key === 'ArrowUp'){ e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); }
    else if (e.key === 'Home'){ e.preventDefault(); list[0].focus(); }
    else if (e.key === 'End'){ e.preventDefault(); list[list.length - 1].focus(); }
    else if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); if (i >= 0) go(list[i]); }
    else if (e.key === 'Tab'){ close(false); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(true); });
  document.addEventListener('pointerdown', e => { if (!pop.hidden && !pop.contains(e.target) && !btn.contains(e.target)) close(false); });
  window.addEventListener('resize', () => { if (!pop.hidden) place(); });
})();
