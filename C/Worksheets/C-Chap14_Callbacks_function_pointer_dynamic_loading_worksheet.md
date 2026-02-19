---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 워크시트 Chapter 14: Callback과 Dynamic Loading

---

## 학습 목표
- 함수 포인터 선언/사용을 실습한다
- 콜백 기반 코드 구조를 직접 작성한다
- 동적 로딩의 기본 흐름을 이해한다

---

## 실습 1: 함수 포인터 계산기
요구사항:
- `add`, `sub`, `mul`, `div_safe` 함수 작성
- `typedef int (*BinOp)(int, int);`
- 연산자와 함수 포인터를 구조체 배열로 매핑

출력 예:
```text
8 + 3 = 11
8 - 3 = 5
8 * 3 = 24
8 / 3 = 2
```

---

## 실습 2: qsort 콜백
요구사항:
- `int cmp_asc(const void*, const void*)`
- `int cmp_desc(const void*, const void*)`
- 같은 배열을 오름차순/내림차순 각각 정렬

체크:
- [ ] 비교 함수의 반환 규칙을 설명할 수 있는가?

---

## 실습 3: 이벤트 콜백 등록
요구사항:
- `register_handler`, `emit_message` 구현
- 핸들러 미등록(NULL)일 때 안전 처리

참고 시그니처:
```c
typedef void (*MessageHandler)(const char *msg);
```

---

## 실습 4: 동적 로딩 개념 정리
코드 작성 대신 아래를 표로 정리하세요.
1. Dynamic Linking과 Dynamic Loading 차이
2. Windows API: `LoadLibrary`, `GetProcAddress`
3. POSIX API: `dlopen`, `dlsym`
4. 실패 시 처리 전략(로그, fallback, 종료 기준)

---

## 선택 실습: 운영체제별 빌드 확인
- Windows 환경:
- `plugin.dll` 로드 흐름 예제 조사
- Linux/macOS 환경:
- `libplugin.so`/`libplugin.dylib` 로드 흐름 예제 조사

주의:
- 실행 환경과 빌드 옵션이 다르므로 개념 위주로 정리

---

## 제출 체크리스트
- [ ] 함수 포인터 계산기 코드 동작 확인
- [ ] `qsort` 오름/내림 결과 캡처
- [ ] 콜백 미등록 시 예외 처리 구현
- [ ] 동적 로딩 비교표 작성 완료
