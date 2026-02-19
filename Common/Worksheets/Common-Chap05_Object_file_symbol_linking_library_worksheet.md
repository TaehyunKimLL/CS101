---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# Common 워크시트 Chapter 5: 오브젝트 파일, 심볼, 링킹

---

## 학습 목표
- 소스 -> 오브젝트 -> 실행 파일 흐름을 실습한다
- 링킹 에러를 의도적으로 만들고 원인을 분석한다
- 정적/동적 라이브러리 차이를 정리한다

---

## 실습 1: 분리 컴파일과 링크
파일:
- `main.c`: `add` 함수 호출
- `math.c`: `add` 함수 정의

실행:
```bash
gcc -c main.c -o main.o
gcc -c math.c -o math.o
gcc main.o math.o -o app
```

---

## 실습 2: Undefined Reference 재현
요구사항:
- `math.o`를 링크에서 제외하고 빌드
- 발생한 에러 메시지 기록
- 왜 에러가 나는지 설명

---

## 실습 3: Multiple Definition 재현
요구사항:
- `main.c`, `math.c` 양쪽에 같은 함수 정의 추가
- 링커 에러 확인
- 해결 방법(한쪽 정의 제거 또는 분리) 정리

---

## 실습 4: 심볼 확인
가능한 도구로 심볼 확인:
- Linux/macOS: `nm main.o`
- Windows: `dumpbin /symbols main.obj`

정리 항목:
- `add`가 정의인지 참조인지
- `main` 심볼 상태

---

## 개념 질문
1. 오브젝트 파일과 실행 파일의 차이는 무엇인가?
2. 심볼 테이블이 없으면 링커가 못하는 일은 무엇인가?
3. 정적 라이브러리와 동적 라이브러리의 장단점을 한 가지씩 적어라.

---

## 제출 체크리스트
- [ ] 분리 컴파일/링크 명령 기록
- [ ] 두 종류의 링킹 에러 재현 결과 첨부
- [ ] 심볼 관찰 결과 정리
- [ ] 개념 질문 답변 작성
