# 메가박스 3관 좌석 추첨기

현재 Firebase 실시간 연결이 설정되어 있습니다. firebase-config.js를 null로 설정하면 체험 모드로 실행됩니다. 인터넷 연결이 필요합니다(CSS 및 Firebase SDK CDN). 체험 결과는 현재 브라우저에 저장되며 다른 기기와 공유되지 않습니다.

## 실제 다중 교실 사용
1. 3.md의 안내에 따라 Firebase Realtime Database와 웹 앱을 만드세요.
2. firebase-config.js의 null을 Firebase 콘솔에서 복사한 설정 객체로 교체하세요(databaseURL 필수).
3. index.html과 firebase-config.js를 함께 Vercel 정적 프로젝트에 업로드하세요.
4. 같은 주소로 접속하고 상단에 실시간 연결됨이 표시되는지 확인하세요.

65석(B~F열, 각 3~15번), 4개 학급 총 56명, 반별 번호 범위, 학생별 1회 추첨, 반별 좌석 색상, 결과 팝업, CSV 저장, 전체 초기화를 제공합니다. 문서가 E/F열 X석의 정확한 위치를 지정하지 않아 명시된 3~15번 65석을 모두 사용합니다.

동시 추첨은 전체 assignments 경로의 Firebase 트랜잭션으로 처리해 좌석 및 학생 중복을 방지합니다. 원본의 누락된 실시간 리스너도 수정했습니다.

관리자 패널은 원본과 같이 별도 인증이 없습니다. DB 테스트 모드와 공개 페이지에서는 접속자가 초기화할 수 있으므로 행사 참여자에게만 주소를 공유하세요. 지속 운영에는 관리자 인증 및 DB 규칙 설정이 필요합니다.

## Firebase 접근 설정
Authentication에서 익명 로그인을 활성화하고 Realtime Database 규칙에 database.rules.json의 내용을 게시하세요. 인증된 익명 사용자에게 assignments 읽기/쓰기를 허용합니다. 익명 로그인은 참가자 신원을 확인하지 않으며 초기화 권한을 관리자에게 제한하지 않습니다.

