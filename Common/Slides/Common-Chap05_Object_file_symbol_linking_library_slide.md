---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# Common Chapter 5: 오브젝트 파일, 심볼, 링킹, 라이브러리

---

## 오늘 목표
- 소스 코드가 산출물로 변환되는 단계를 구분한다
- 오브젝트 파일과 심볼 테이블의 역할을 설명한다
- 정적/동적 라이브러리 차이를 이해한다
- 대표적인 링킹 에러를 해석할 수 있다

---

## 빌드 파이프라인 산출물
```text
main.c
 -> 전처리 -> main.i
 -> 컴파일 -> main.s
 -> 어셈블 -> main.o
 -> 링킹   -> app.exe (또는 a.out)
```

---

## 오브젝트 파일(.o/.obj)이란?
- 소스 파일 1개의 번역 결과
- 아직 실행 가능한 완성본은 아님
- 기계어 + 재배치 정보 + 심볼 정보 포함

---

## 오브젝트 파일 내부(개념)
- `.text`: 함수 코드
- `.data`: 초기값 있는 전역/정적 변수
- `.bss`: 초기값 없는 전역/정적 변수
- `.symtab`: 심볼 테이블
- `.rel*`: 재배치(relocation) 정보

---

## 심볼(Symbol)
- 함수/변수 이름 같은 식별자 정보
- 정의(Definition)와 참조(Reference)로 나뉨
- 링커는 참조를 실제 주소로 해결(resolve)

---

## 심볼 해결 예시
```c
// main.c
int add(int, int);
int main(void) { return add(1, 2); }
```

```c
// math.c
int add(int a, int b) { return a + b; }
```

---

## 링커가 하는 일
- 여러 오브젝트 파일 결합
- 외부 심볼 참조 해결
- 최종 실행 파일 형식으로 배치
- 필요 라이브러리 의존성 기록

---

## 대표 링킹 에러
- `undefined reference`: 선언은 있는데 정의를 못 찾음
- `multiple definition`: 동일 심볼이 중복 정의됨
- `unresolved external symbol` (MSVC 계열)

---

## 정적 라이브러리
- Windows: `.lib` (정적)
- Linux/macOS: `.a`
- 링크 시 필요한 코드가 실행 파일에 포함
- 배포 단순, 실행 파일 크기 증가 가능

---

## 동적 라이브러리
- Windows: `.dll`
- Linux: `.so`
- macOS: `.dylib`
- 실행 시점에 로드되어 메모리 공유 가능

---

## 정적 vs 동적 요약
- 정적: 독립 실행이 쉬움, 파일이 커질 수 있음
- 동적: 업데이트/공유 유리, 배포 시 런타임 의존성 관리 필요
- 상황에 따라 혼합 사용 가능

---

## 라이브러리 링크 예시(개념)
```bash
gcc main.c math.c -o app
gcc main.o -L. -lmymath -o app
```

- `-L`: 라이브러리 경로
- `-l`: 라이브러리 이름

---

## 심볼 관찰 도구(개념)
- Linux/macOS: `nm`, `objdump`, `readelf`
- Windows: `dumpbin`
- 목적: "정의/참조/중복/누락" 진단

---

## 런타임 로딩과 검색 경로
- 동적 라이브러리는 실행 시 검색됨
- 경로 설정이 잘못되면 실행 시 로드 실패
- 배포 환경에서 경로 정책 점검 필수

---

## 실습 제안
- `main.c`, `math.c`를 분리 컴파일 후 링크
- 함수 정의를 의도적으로 제거해 링킹 에러 관찰
- 심볼 도구로 `add` 심볼 확인

---

## 체크포인트
- 오브젝트 파일과 실행 파일 차이를 설명할 수 있나요?
- 심볼 테이블이 왜 필요한지 말할 수 있나요?
- 정적/동적 라이브러리 차이를 설명할 수 있나요?
- `undefined reference` 원인을 추적할 수 있나요?

---

## 정리
- 컴파일과 링킹은 서로 다른 단계다
- 링커는 심볼 해결과 파일 결합을 담당한다
- 라이브러리 방식 선택은 배포/성능/운영 전략과 연결된다
