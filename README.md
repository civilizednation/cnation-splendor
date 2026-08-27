# CNATION Splendor

1:1 사용자 vs CPU로 즐기는 Splendor 스타일 웹게임입니다.

## 실행

```bash
node static-server.mjs
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:5188/
```

정적 파일만 사용하는 프로젝트라 별도 패키지 설치는 필요 없습니다.

## 주요 기능

- Classic, Snack, World Landmarks 3개 테마
- 테마별 개발 카드, 카드 뒷면, 토큰, 귀족 카드, 배경 이미지
- 9개 플레이어 캐릭터와 CPU 로봇 캐릭터
- 쉬움, 보통, 어려움 CPU 난이도
- 공개 카드 4장 x 3레벨, 귀족 3장
- 토큰 가져오기, 공개/비공개 예약, 공개/예약 카드 구매
- Gold 조커 지불, 영구 보너스 할인, 귀족 자동 방문
- 예약 3장 제한, 토큰 10개 제한, 15점 종료 후 동일 턴 수 보장
- 브라우저 내장 효과음
- 테마별 128k MP3 배경음악 4곡 순환 재생
- BGM 2초 페이드, 3초 크로스페이드, 설정 메뉴 볼륨/끄기

## 업로드 대상

깃헙에는 게임 실행에 필요한 아래 파일과 폴더를 올리면 됩니다.

- `index.html`
- `game.js`
- `style.css`
- `static-server.mjs`
- `README.md`
- `.gitignore`
- `assets/characters/`
- `assets/gems/`
- `assets/themes/`
- `assets/ui/`
- `assets/audio/bgm/128k/`

`참고/`, `음악/`, `assets/originals/`, `assets/audio/bgm/low/`, `qa/`, `tools/`는 로컬 작업용 자료라 GitHub 업로드 대상에서 제외했습니다.

## 검증

로컬 서버를 켠 뒤 문법 검사를 실행할 수 있습니다.

```bash
npm run check
```
