---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---
# C 언어 Chapter 2: 변수, 자료형, 입출력 (printf, scanf)

---
## 오늘 목표
- 변수와 자료형의 개념을 이해한다
- 기본 자료형과 리터럴을 구분한다
- `printf`로 출력하고 `scanf`로 입력을 받는다

---

## 진행 순서
1. 변수와 식별자 규칙
2. 기본 자료형과 리터럴
3. 문자와 문자열
4. 형 변환
5. 출력: `printf`
6. 입력: `scanf`
7. 실습과 체크포인트

---

## 변수란?
- 값을 저장하는 이름 붙은 공간
- 값은 바뀔 수 있고, 타입에 따라 저장 방식이 다름

```c
int age = 20;
double height = 172.5;
char grade = 'A';
```

---

## 식별자(이름) 규칙
- 영문자, 숫자, 밑줄 사용
- 숫자로 시작 불가
- 대/소문자 구분
- C 키워드는 사용 불가

예시:
- `totalScore`, `_count`, `x2` (OK)
- `2nd`, `int`, `my-name` (NG)

---

## 기본 자료형 개요
- 정수: `char`, `short`, `int`, `long`
- 실수: `float`, `double`
- 문자: `char`

> 실제 크기는 환경마다 다를 수 있음

---

## 자료형과 크기(참고)
- `char` 1 byte
- `short` 2 bytes
- `int` 4 bytes (대부분)
- `long` 4 or 8 bytes
- `float` 4 bytes
- `double` 8 bytes

---

## 부동 소수점이란?
- 소수를 근사값으로 저장하는 방식
- 아주 큰/작은 값 표현에 유리하지만 오차가 생길 수 있음

```c
double x = 0.1 + 0.2;
printf("%.17f\n", x); // 0.30000000000000004
```

---

## 부동 소수점 주의
- 정확한 비교보다 범위 비교가 안전

```c
double a = 0.1 + 0.2;
if (a == 0.3) { /* 기대와 다를 수 있음 */ }
```

대신:
```c
double eps = 1e-9;
if ((a - 0.3) < eps && (a - 0.3) > -eps) { /* OK */ }
```

---

## 부호 있는/없는 정수
- `signed`는 음수/양수 모두
- `unsigned`는 0 이상의 값만

```c
unsigned int count = 4000000000u;
```

---

## 리터럴(Literal)
- 코드에 직접 쓴 값

```c
int a = 10;      // 정수 리터럴
double b = 3.14; // 실수 리터럴
char c = 'A';    // 문자 리터럴
```

---

## 정수 리터럴 진법 표기
```c
int dec = 10;   // 10진수
int oct = 012;  // 8진수
int hex = 0xA;  // 16진수
```

---

## 리터럴 타입 접미사
- 정수: `u`, `l`, `ll`
- 실수: `f`(float), `l`(long double)

```c
unsigned int u = 10u;
long long big = 10000000000LL;
float f = 3.14f;
long double ld = 3.14L;
```

---

## 과학적 표기 (실수)
```c
double a = 1e3;   // 1000
double b = 2.5e-4; // 0.00025
```

---

## 문자와 문자열
- `char`는 한 글자
- 문자열은 `char` 배열

```c
char ch = 'A';
char name[20] = "Alice";
```

---

## 문자열과 NULL 종료
- C 문자열은 마지막에 `'\0'`(NULL)로 끝남
- 길이는 보이는 문자 + 1

```c
char name[6] = "Alice"; // A l i c e \0
```

---

## NULL 종료 구조 다이어그램
```
Index: | 0 | 1 | 2 | 3 | 4 | 5 |
Value: |'A'|'l'|'i'|'c'|'e'|'\0'|
```

---

## NULL 종료 주의사항
- NULL이 없으면 문자열 함수가 끝을 찾지 못함
- `strlen`, `printf("%s")` 등이 오류를 낼 수 있음

```c
char bad[3] = {'a', 'b', 'c'}; // '\0' 없음
```

---

## 문자 코드는 무엇인가?
- 문자를 숫자로 대응시키는 규칙
- 컴퓨터는 숫자를 저장하므로, 문자도 코드로 저장

---

## ASCII 코드
- 0~127 범위의 7비트 문자 집합
- 영문자, 숫자, 기호가 포함됨

예시:
- 'A' = 65, 'a' = 97, '0' = 48

---

## 유니코드(Unicode)
- 전 세계 문자를 위한 표준 문자 집합
- 각 문자에 고유한 코드 포인트 부여 (예: U+AC00)

---

## UTF-8 인코딩
- 유니코드 코드를 바이트로 변환하는 방식
- 가변 길이(1~4바이트)
- ASCII와 호환 (ASCII 범위는 1바이트 그대로)

---

## UTF-8 예시
- 'A' = 0x41 (1바이트)
- '가' = 0xEA 0xB0 0x80 (3바이트)

---

## 문자열 길이 주의
- `strlen`은 "문자 수"가 아니라 "바이트 수"
- UTF-8에서는 한 글자가 여러 바이트일 수 있음

---

## 형 변환 (Type Conversion)
- 같은 식에서 타입이 섞이면 자동 변환 발생

```c
int a = 5;
double b = 2.0;
double c = a / b;   // 2.5
```

---

## 정수 나눗셈 주의
```c
int a = 5;
int b = 2;
double c = a / b;   // 2.0 (정수 나눗셈)
```

해결:
```c
double c = (double)a / b; // 2.5
```

---

## 출력 함수: printf
- 형식 지정자를 사용해 출력

```c
int age = 20;
double height = 172.5;
printf("Age: %d\n", age);
printf("Height: %.1f\n", height);
```

---

## 주요 형식 지정자
- `%d` : 정수 (`int`)
- `%ld` : long
- `%u` : unsigned
- `%f` : 실수 (`float`, `double`)
- `%c` : 문자
- `%s` : 문자열

---

## 출력 정밀도/폭
```c
double pi = 3.141592;
printf("%.2f\n", pi);  // 3.14
printf("%8.2f\n", pi); // 공백 포함 폭 8
```

---

## 이스케이프 문자
- `\n` 줄바꿈
- `\t` 탭
- `\\` 역슬래시
- `\"` 큰따옴표

---

## 입력 함수: scanf
- 입력값을 변수에 저장
- 주소 연산자 `&` 필요

```c
int age;
scanf("%d", &age);
```

---

## scanf 예시
```c
int a;
double b;
char c;
scanf("%d %lf %c", &a, &b, &c);
```

- `double`은 `%lf`

---

## 문자열 입력
```c
char name[20];
scanf("%19s", name);
```

- 공백 전까지만 읽음
- 길이 제한을 꼭 지정

---

## 입력 버퍼 주의
```c
int age;
char grade;
scanf("%d", &age);
scanf(" %c", &grade); // 앞에 공백 넣기
```

`%c`는 공백 문자도 읽기 때문에 공백을 넣어 스킵

---

## 실습 1: 자기소개 출력
요구사항:
- 이름, 나이, 키를 변수에 저장
- `printf`로 한 줄 출력

---

## 실습 2: 사칙연산
요구사항:
- 정수 두 개 입력
- 합/차/곱/몫 출력
- 몫은 실수로 출력

---

## 실습 3: 원의 넓이
요구사항:
- 반지름 입력
- 원의 넓이 출력
- `pi = 3.141592` 사용

---

## 체크포인트
- 변수가 무엇인지 설명할 수 있나요?
- 자료형에 맞는 형식 지정자를 선택할 수 있나요?
- `scanf`에서 `&`의 의미를 이해했나요?

---

## 정리
- 변수는 타입과 함께 선언한다
- 출력은 `printf`, 입력은 `scanf`
- 정수/실수 연산과 형 변환을 조심한다

---

## 다음 시간 예고
- 비트 연산과 자료형 심화
