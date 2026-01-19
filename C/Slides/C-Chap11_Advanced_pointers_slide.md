---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 11: Advanced Pointers

---

## 오늘 목표
- 배열과 포인터의 관계를 설명한다
- 동적 메모리(`malloc/free`)를 이해한다
- Stack/Heap 차이를 구분한다
- 함수 포인터의 기본을 익힌다

---

## 진행 순서
1. 배열과 포인터 관계
2. 포인터 산술
3. Stack vs Heap
4. 동적 메모리 할당
5. 함수 포인터
6. 실습과 체크포인트

---

## 배열과 포인터의 관계
- 배열 이름은 첫 요소의 주소
- `arr[i]`는 `*(arr + i)`와 동일

```c
int arr[3] = {1, 2, 3};
printf("%d\n", arr[0]);
printf("%d\n", *(arr + 0));
```

---

## 배열 vs 포인터 차이
- 배열: 고정 크기, 주소 자체는 변경 불가
- 포인터: 주소를 저장하는 변수

```c
int arr[3];
int *p = arr;
// p = p + 1; 가능
// arr = arr + 1; 불가능
```

---

## 포인터 산술
- 타입 크기만큼 이동

```c
int arr[3] = {10, 20, 30};
int *p = arr;
printf("%d\n", *(p + 1)); // 20
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
}
```

---

## Heap 예시
```c
int *p = (int *)malloc(sizeof(int));
*p = 10;
free(p);
```

---

## malloc 기본
- 필요한 바이트 수를 요청
- 성공 시 주소 반환, 실패 시 NULL

```c
int *arr = (int *)malloc(5 * sizeof(int));
if (arr == NULL) { /* 실패 처리 */ }
```

---

## free 기본
- 할당한 메모리를 반드시 해제
- 해제 후 포인터는 더 이상 사용하지 않기

```c
free(arr);
arr = NULL;
```

---

## 흔한 실수
- `free` 누락 -> 메모리 누수
- 이미 `free`한 포인터 사용
- NULL 체크 없이 역참조

---

## 동적 배열 예시
```c
int n = 5;
int *arr = (int *)malloc(n * sizeof(int));
for (int i = 0; i < n; i++) arr[i] = i * 2;
free(arr);
```

---

## 함수 포인터 개념
- 함수를 가리키는 포인터
- 콜백 등에 사용

---

## 함수 포인터 선언
```c
int add(int a, int b) { return a + b; }
int (*fp)(int, int) = add;
```

---

## 함수 포인터 typedef
```c
typedef int (*Op)(int, int);

int add(int a, int b) { return a + b; }
Op op = add;
```

---

## 함수 포인터 호출
```c
int result = fp(3, 5);
```

---

## 함수 포인터 배열 (예고)
```c
int (*ops[2])(int,int) = {add, sub};
```

---

## 함수 포인터 예시: 콜백
```c
void repeat(int n, void (*cb)(int)) {
    for (int i = 0; i < n; i++) cb(i);
}

void print_index(int i) { printf("%d\n", i); }
```

---

## 함수 포인터 예시: DLL 스타일(개념)
- 함수 주소를 받아 호출하는 구조
- 실제 로딩은 OS API로 수행

```c
typedef int (*Op)(int, int);
Op op = /* 동적으로 로드한 함수 주소 */;
int r = op(3, 5);
```

---

## 함수 포인터 예시: Linux dlopen/dlsym
```c
#include <dlfcn.h>

typedef int (*Op)(int, int);
void *handle = dlopen("libm.so.6", RTLD_LAZY);
Op op = (Op)dlsym(handle, "some_func");
if (op) { op(3, 5); }
dlclose(handle);
```

---

## Linux 컴파일 예시
```bash
gcc main.c -ldl
```

---

## 실습 1: 동적 배열 합계
요구사항:
- n 입력 후 동적 배열 할당
- 합계 출력 후 free

---

## 실습 2: swap (포인터)
요구사항:
- 포인터로 두 값 교환

---

## 실습 3: 함수 포인터 선택
요구사항:
- 연산자 입력에 따라 함수 포인터로 계산

---

## 체크포인트
- 배열/포인터 차이를 설명할 수 있나요?
- malloc/free 흐름을 이해했나요?
- 함수 포인터 선언을 쓸 수 있나요?

---

## 정리
- 포인터는 주소와 메모리 관리의 핵심
- Heap은 수동 관리, Stack은 자동 관리
- 함수 포인터는 고급 설계에 활용 가능
