---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 12: Advanced Pointers

---

## 오늘 목표
- 2중 포인터와 포인터 배열을 구분한다
- 다차원 배열과 포인터의 관계를 이해한다
- 동적 메모리(`malloc/free`)를 이해한다
- 함수 포인터 배열을 활용한다

---

## 진행 순서
1. 포인터 배열 vs 배열 포인터
2. 2중 포인터
3. 다차원 배열과 포인터
4. 동적 2D 배열
5. Stack vs Heap
6. 함수 포인터 배열
7. 실습과 체크포인트

---

## 포인터 배열 (Array of Pointers)
- 포인터들을 담는 배열

```c
char *names[3] = {
    "Alice",
    "Bob",
    "Charlie"
};
printf("%s\n", names[0]); // Alice
```

---

## 포인터 배열 메모리 구조
```
names[0] -> "Alice"
names[1] -> "Bob"
names[2] -> "Charlie"
```

각 요소가 문자열을 가리키는 포인터

---

## 배열 포인터 (Pointer to Array)
- 배열 전체를 가리키는 포인터

```c
int arr[3] = {1, 2, 3};
int (*p)[3] = &arr;  // 배열 포인터
printf("%d\n", (*p)[0]); // 1
```

---

## 포인터 배열 vs 배열 포인터
```c
int *arr1[3];    // 포인터 배열 (포인터 3개)
int (*arr2)[3];  // 배열 포인터 (int[3]를 가리킴)
```

- `arr1`: 포인터들의 배열
- `arr2`: 배열을 가리키는 포인터

---

## 2중 포인터 (Pointer to Pointer)
- 포인터의 주소를 저장하는 포인터

```c
int x = 10;
int *p = &x;
int **pp = &p;  // 2중 포인터

printf("%d\n", **pp); // 10
```

---

## 2중 포인터 메모리 구조
```
x:   [10]
     ↑
p:   [주소] ─┐
     ↑       │
pp:  [주소] ─┘
```

---

## 2중 포인터 활용: 문자열 배열
```c
char *names[] = {"Alice", "Bob", "Charlie"};
char **ptr = names;

for (int i = 0; i < 3; i++) {
    printf("%s\n", ptr[i]);
}
```

---

## 2중 포인터 활용: main 인자
```c
int main(int argc, char **argv) {
    // argv는 문자열 배열
    for (int i = 0; i < argc; i++) {
        printf("arg[%d]: %s\n", i, argv[i]);
    }
    return 0;
}
```

---

## 함수에서 포인터 변경하기
```c
void alloc_int(int **pp) {
    *pp = (int *)malloc(sizeof(int));
    **pp = 42;
}

int *p = NULL;
alloc_int(&p);  // p가 변경됨
printf("%d\n", *p);
free(p);
```

---

## 1차원 배열과 포인터 복습
```c
int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;

printf("%d\n", p[2]);    // 3
printf("%d\n", *(p+2));  // 3
```

---

## 2차원 배열 선언
```c
int arr[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

printf("%d\n", arr[1][2]); // 7
```

---

## 2차원 배열 메모리 구조
- 메모리에 연속으로 저장됨

```
[1][2][3][4][5][6][7][8][9][10][11][12]
```

- `arr[i][j]` = `*(arr[i] + j)` = `*((int*)arr + i*4 + j)`

---

## 2차원 배열을 포인터로 접근
```c
int arr[3][4];
int (*p)[4] = arr;  // 배열 포인터

printf("%d\n", p[1][2]);
printf("%d\n", (*(p+1))[2]);
```

---

## 2차원 배열 vs 포인터 배열
```c
// 2D 배열: 연속 메모리
int arr2d[3][4];

// 포인터 배열: 각 행이 다른 위치
int *rows[3];
rows[0] = (int *)malloc(4 * sizeof(int));
rows[1] = (int *)malloc(4 * sizeof(int));
rows[2] = (int *)malloc(4 * sizeof(int));
```

---

## 동적 2D 배열 할당 (방법 1: 연속)
```c
int rows = 3, cols = 4;
int *arr = (int *)malloc(rows * cols * sizeof(int));

// arr[i][j] = *(arr + i*cols + j)
*(arr + 1*cols + 2) = 7;  // arr[1][2] = 7

free(arr);
```

---

## 동적 2D 배열 할당 (방법 2: 포인터 배열)
```c
int **arr = (int **)malloc(rows * sizeof(int *));
for (int i = 0; i < rows; i++) {
    arr[i] = (int *)malloc(cols * sizeof(int));
}

arr[1][2] = 7;

// 해제
for (int i = 0; i < rows; i++) {
    free(arr[i]);
}
free(arr);
```

---

## Stack과 Heap
- Stack: 함수 호출 시 자동으로 생성/소멸
- Heap: 수동 할당/해제, 큰 데이터에 유용

---

## Stack 예시
```c
void foo(void) {
    int x = 10; // Stack에 생성
    // 함수 종료 시 자동 소멸
}
```

---

## Heap 예시
```c
int *p = (int *)malloc(sizeof(int));
*p = 10;
free(p);  // 수동 해제 필수
```

---

## malloc/calloc/realloc
```c
int *p1 = (int *)malloc(5 * sizeof(int));
int *p2 = (int *)calloc(5, sizeof(int));  // 0 초기화
int *p3 = (int *)realloc(p1, 10 * sizeof(int));  // 재할당
```

---

## 메모리 누수 (Memory Leak)
```c
void leak_example(void) {
    int *p = (int *)malloc(100 * sizeof(int));
    // free(p) 없이 함수 종료 -> 메모리 누수
}
```

---

## 댕글링 포인터 (Dangling Pointer)
```c
int *p = (int *)malloc(sizeof(int));
free(p);
*p = 10;  // 위험! 이미 해제된 메모리 접근
```

해결:
```c
free(p);
p = NULL;  // NULL로 설정
```

---

## 함수 포인터 복습
```c
int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int (*fp)(int, int);
fp = add;
printf("%d\n", fp(3, 5)); // 8
```

---

## 함수 포인터 배열
```c
int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }
int mul(int a, int b) { return a * b; }

int (*ops[3])(int, int) = {add, sub, mul};

printf("%d\n", ops[0](5, 3)); // 8
printf("%d\n", ops[1](5, 3)); // 2
printf("%d\n", ops[2](5, 3)); // 15
```

---

## 함수 포인터 배열 활용: 계산기
```c
char op;
int a = 10, b = 5;
scanf("%c", &op);

switch (op) {
    case '+': printf("%d\n", ops[0](a, b)); break;
    case '-': printf("%d\n", ops[1](a, b)); break;
    case '*': printf("%d\n", ops[2](a, b)); break;
}
```

---

## typedef로 간단히
```c
typedef int (*BinOp)(int, int);

BinOp ops[3] = {add, sub, mul};
```

---

## 구조체와 함수 포인터
```c
typedef struct {
    char name[20];
    int (*calculate)(int, int);
} Operation;

Operation op = {"Add", add};
printf("%d\n", op.calculate(3, 5));
```

---

## 실습 1: 동적 2D 배열
요구사항:
- 3x3 행렬을 동적 할당
- 값 입력 후 출력
- 메모리 해제

---

## 실습 2: 문자열 배열 정렬
요구사항:
- char *names[] 배열 선언
- strcmp로 사전순 정렬
- 출력

---

## 실습 3: 함수 포인터 배열 계산기
요구사항:
- 4칙연산 함수 작성
- 함수 포인터 배열로 구현
- 연산자 입력 받아 계산

---

## 실습 4: 2중 포인터로 배열 수정
요구사항:
- 함수에서 int* 배열을 새로 할당
- 2중 포인터로 원본 변경

---

## 체크포인트
- 포인터 배열과 배열 포인터를 구분할 수 있나요?
- 2중 포인터의 용도를 설명할 수 있나요?
- 다차원 배열의 메모리 구조를 이해했나요?
- 동적 2D 배열 할당/해제를 할 수 있나요?

---

## 정리
- 포인터 배열은 여러 포인터를 담는 배열
- 2중 포인터는 포인터의 주소를 저장
- 다차원 배열은 메모리에 연속 저장
- 동적 메모리는 반드시 해제 필요
- 함수 포인터 배열로 유연한 설계 가능
