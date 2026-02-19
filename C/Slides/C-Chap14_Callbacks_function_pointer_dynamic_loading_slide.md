---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 14: 함수 포인터 실전, Callback, Dynamic Loading

---

## 오늘 목표
- 함수 포인터 시그니처를 정확히 읽고 선언한다
- Callback 패턴의 목적과 구조를 설명한다
- 함수 포인터를 이용한 유연한 설계를 구현한다
- 동적 로딩의 필요성과 기본 흐름을 이해한다

---

## 진행 순서
1. 함수 포인터 핵심 정리
2. Callback 패턴
3. 실전 예시(`qsort`, 이벤트 처리)
4. Dynamic Loading 개념
5. 실습과 체크포인트

---

## 함수 포인터 선언 복습
```c
int add(int a, int b) { return a + b; }

int (*op)(int, int) = add;
printf("%d\n", op(3, 4));  // 7
```

- 포인터 타입과 함수 시그니처가 일치해야 함

---

## typedef로 가독성 개선
```c
typedef int (*BinOp)(int, int);

int sub(int a, int b) { return a - b; }
BinOp op = sub;
```

- 함수 포인터는 `typedef`로 단순화하는 것이 실무에서 유리

---

## Callback이란?
- "나중에 호출할 함수"를 인자로 전달하는 방식
- 라이브러리 코드와 사용자 로직을 분리
- 확장성 있는 구조를 만들 때 핵심

---

## Callback 기본 예제
```c
typedef void (*Handler)(int);

void run(Handler h, int value) {
    h(value);
}
```

- `run`은 동작을 고정하지 않고 외부 함수에 위임

---

## 표준 라이브러리 예: qsort comparator
```c
int cmp_int(const void *a, const void *b) {
    int x = *(const int *)a;
    int y = *(const int *)b;
    return (x > y) - (x < y);
}
```

- `qsort`는 비교 규칙을 콜백으로 받음

---

## qsort 사용
```c
int arr[] = {5, 1, 4, 2, 3};
size_t n = sizeof(arr) / sizeof(arr[0]);

qsort(arr, n, sizeof(int), cmp_int);
```

- 정렬 로직은 라이브러리
- 정렬 기준은 사용자 콜백

---

## 이벤트 처리 스타일 콜백
```c
typedef void (*OnMessage)(const char *);

void emit(OnMessage cb) {
    cb("hello");
}
```

- GUI, 네트워크, 게임 루프 등에서 자주 사용

---

## 함수 테이블 기반 디스패치
```c
typedef int (*BinOp)(int, int);

typedef struct {
    char op;
    BinOp fn;
} OpEntry;
```

- `switch`를 줄이고 연산을 데이터로 관리

---

## Dynamic Linking vs Dynamic Loading
- Dynamic Linking: 링크 시 공유 라이브러리 의존성 기록
- Dynamic Loading: 실행 중 필요한 시점에 직접 로딩
- 플러그인 아키텍처의 핵심 기반

---

## Windows 동적 로딩 기본 흐름
```c
HMODULE lib = LoadLibraryA("plugin.dll");
FARPROC p = GetProcAddress(lib, "plugin_run");
// 사용 후 FreeLibrary(lib)
```

- 로딩 실패/심볼 실패 검사 필수

---

## Linux/macOS 동적 로딩 기본 흐름
```c
void *h = dlopen("./libplugin.so", RTLD_NOW);
void (*run)(void) = dlsym(h, "plugin_run");
// 사용 후 dlclose(h)
```

- `dlsym` 반환값 검증과 에러 처리 필요

---

## 동적 로딩 사용 시 주의점
- 함수 시그니처 불일치 위험
- ABI/호출 규약 차이 주의
- 라이브러리 경로/버전 관리 필요
- 실패 시 대체 경로(fallback) 준비

---

## 플러그인 구조 예시
```text
앱 실행
 -> plugin 목록 로딩
 -> 심볼 조회(plugin_init, plugin_run)
 -> 함수 포인터 호출
 -> 종료 시 언로드
```

---

## 실습 1: qsort 비교 함수 2종
요구사항:
- 오름차순/내림차순 비교 함수 작성
- 같은 배열에 각각 적용
- 결과 출력

---

## 실습 2: 간단 콜백 이벤트 시스템
요구사항:
- `register_callback`, `emit_event` 구현
- 메시지 콜백 함수를 등록 후 호출
- NULL 콜백 처리 포함

---

## 실습 3: 함수 테이블 계산기
요구사항:
- 연산자와 함수 포인터를 구조체 배열로 관리
- 입력 연산자에 맞는 함수 찾아 실행
- 없는 연산자 처리

---

## 체크포인트
- 함수 포인터 선언을 읽고 쓸 수 있나요?
- Callback이 왜 유연한 구조를 만드는지 설명할 수 있나요?
- `qsort` 비교 함수 시그니처를 이해했나요?
- Dynamic Loading의 장점/주의점을 말할 수 있나요?

---

## 정리
- 함수 포인터는 행동을 데이터처럼 전달하게 해준다
- Callback은 라이브러리와 사용자 로직을 분리한다
- Dynamic Loading은 플러그인/확장 구조에 유용하다
- 실무에서는 타입 안정성과 에러 처리가 핵심이다
