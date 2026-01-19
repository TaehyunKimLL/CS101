---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 5: 반복문 (for, while, do-while)

---

## 오늘 목표
- 반복문이 필요한 이유를 설명한다
- `for`, `while`, `do-while` 구조를 구분한다
- 반복 조건/탈출 조건을 설계한다
- 무한 루프와 흔한 실수를 피한다

---

## 진행 순서
1. 반복의 개념
2. for 문
3. while 문
4. do-while 문
5. break/continue
6. 실습과 체크포인트

---

## 반복의 개념
- 같은 작업을 여러 번 수행
- 조건이 거짓이 될 때까지 반복

예시:
- 1부터 10까지 출력
- 배열 합계 계산

---

## for 기본 구조
```c
for (init; condition; update) {
    // 반복할 코드
}
```

---

## for 예시: 1~10 출력
```c
for (int i = 1; i <= 10; i++) {
    printf("%d ", i);
}
```

---

## for 흐름 이해
1. init 한 번 실행
2. condition 검사
3. 본문 실행
4. update 실행
5. 다시 condition

---

## for에서 자주 하는 실수
- `i <= 10` vs `i < 10`
- 증감 누락으로 무한 루프
- 변수 범위 착각

---

## while 기본 구조
```c
while (condition) {
    // 반복할 코드
}
```

---

## while 예시: 입력 검증
```c
int n = -1;
while (n < 0) {
    printf("양수를 입력: ");
    scanf("%d", &n);
}
```

---

## while vs for
- 반복 횟수 명확: `for`
- 종료 조건이 먼저: `while`

---

## do-while 기본 구조
```c
do {
    // 반복할 코드
} while (condition);
```

---

## do-while 예시
```c
int n;
do {
    printf("1~9 입력: ");
    scanf("%d", &n);
} while (n < 1 || n > 9);
```

---

## do-while 특징
- 본문이 최소 1회 실행
- 입력 검증에 자주 사용

---

## break와 continue
- `break`: 반복 종료
- `continue`: 다음 반복으로 이동

---

## break 예시
```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    printf("%d ", i);
}
```

---

## continue 예시
```c
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    printf("%d ", i);
}
```

---

## 중첩 반복문
```c
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("(%d,%d) ", i, j);
    }
    printf("\n");
}
```

---

## 무한 루프 주의
```c
while (1) {
    // 종료 조건 없으면 무한 루프
}
```

---

## 반복 조건 설계 팁
- 시작/끝 값을 먼저 정의
- 탈출 조건을 먼저 생각
- 작은 예제로 검증

---

## 실습 1: 합계 계산
요구사항:
- 1부터 N까지 합을 출력

---

## 실습 2: 구구단 일부
요구사항:
- 2단부터 5단까지 출력

---

## 실습 3: 소수 판별 기초
요구사항:
- 입력된 정수가 소수인지 판별
- 2부터 n-1까지 나눠보기

---

## 체크포인트
- for/while/do-while 차이를 설명할 수 있나요?
- break/continue 사용 시점을 이해했나요?
- 무한 루프를 피할 수 있나요?

---

## 정리
- 반복문은 작업 자동화의 핵심
- for는 횟수, while은 조건 중심
- do-while은 최소 1회 실행

---

## 다음 시간 예고
- 함수 기본과 분해
