---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 5: 조건문 (if, switch)

---

## 오늘 목표
- 조건문이 필요한 이유를 설명한다
- `if/else if/else` 흐름을 이해한다
- `switch`를 사용할 수 있다
- 자주 하는 실수를 피한다

---

## 진행 순서
1. 조건과 분기 개념
2. if 문 기본
3. if-else / else if
4. switch 문
5. 실습과 체크포인트

---

## 조건과 분기
- 조건에 따라 실행 흐름이 달라짐
- 프로그램의 "의사결정" 부분

---

## 비교/논리 연산 복습
- 비교: `== != < <= > >=`
- 논리: `&& || !`

```c
if (score >= 60 && score < 90) { ... }
```

---

## if 기본 구조
```c
if (condition) {
    // 조건이 참일 때 실행
}
```

---

## if 예시
```c
int score = 85;
if (score >= 60) {
    printf("PASS\n");
}
```

---

## if-else
```c
if (score >= 60) {
    printf("PASS\n");
} else {
    printf("FAIL\n");
}
```

---

## else if 체인
```c
if (score >= 90) {
    printf("A\n");
} else if (score >= 80) {
    printf("B\n");
} else if (score >= 70) {
    printf("C\n");
} else {
    printf("D\n");
}
```

---

## 조건식은 0/비0
- C에서 0은 false
- 0이 아니면 true

```c
if (x) { /* x != 0 */ }
```

---

## 비교 실수: `=` vs `==`
```c
if (a = b) { /* 대입, 위험 */ }
if (a == b) { /* 비교 */ }
```

---

## 중괄호 습관
- 한 줄이라도 `{}` 권장
- 유지보수 실수 방지

---

## 중첩 if 예시
```c
if (age >= 19) {
    if (member) {
        printf("할인 적용\n");
    }
}
```

---

## 조건식 정리 팁
- 복잡하면 변수로 나누기

```c
int isAdult = (age >= 19);
int isMember = (member == 1);
if (isAdult && isMember) { ... }
```

---

## switch란?
- 값에 따라 여러 분기
- `int`, `char`, `enum`에 사용

---

## switch 기본 구조
```c
switch (value) {
    case 1:
        // ...
        break;
    case 2:
        // ...
        break;
    default:
        // ...
}
```

---

## switch 예시
```c
char grade = 'B';
switch (grade) {
    case 'A': printf("Excellent\n"); break;
    case 'B': printf("Good\n"); break;
    case 'C': printf("OK\n"); break;
    default:  printf("Retry\n"); break;
}
```

---

## break의 의미
- `break`가 없으면 다음 case로 계속 실행됨
- 의도적 fall-through는 주석 권장

---

## fall-through 예시
```c
switch (month) {
    case 3: case 4: case 5:
        printf("Spring\n");
        break;
    default:
        printf("Other\n");
}
```

---

## if vs switch
- 범위 비교는 `if`
- 값이 명확한 경우 `switch`

---

## 조건문 실수 모음
- 세미콜론 `if (x);`
- 중괄호 누락
- 우선순위 혼동

---

## 실습 1: 합격/불합격
요구사항:
- 점수 입력
- 60 이상이면 PASS, 아니면 FAIL

---

## 실습 2: 학점 계산
요구사항:
- 점수 입력
- A/B/C/D 출력

---

## 실습 3: 요일 출력
요구사항:
- 1~7 입력
- switch로 요일 출력

---

## 체크포인트
- if/else 흐름을 설명할 수 있나요?
- switch에서 break의 의미를 아나요?
- 조건식 실수를 피할 수 있나요?

---

## 정리
- 조건문은 프로그램 분기의 핵심
- if는 범위, switch는 고정 값에 적합
- 가독성과 안전성을 우선한다

---

## 다음 시간 예고
- 반복문 (for/while/do-while)
