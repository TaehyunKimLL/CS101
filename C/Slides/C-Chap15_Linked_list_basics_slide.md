---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 15: 자료구조 맛보기 - Linked List

---

## 오늘 목표
- 배열과 연결 리스트의 차이를 설명한다
- 단일 연결 리스트(Singly Linked List) 구조를 이해한다
- 이중 연결 리스트(Doubly Linked List)로 확장 이유를 이해한다
- 기본 연산(삽입/삭제/탐색/순회)을 구현한다

---

## 진행 순서
1. 왜 연결 리스트가 필요한가
2. 단일 연결 리스트 구조
3. 단일 연결 리스트 기본 연산
4. 이중 연결 리스트 확장
5. 이중 연결 리스트 기본 연산
6. 실습과 체크포인트

---

## 배열 vs 연결 리스트
- 배열: 연속 메모리, 인덱스 접근 빠름
- 연결 리스트: 노드가 포인터로 연결됨
- 중간 삽입/삭제가 많은 경우 연결 리스트가 유리

---

## 단일 연결 리스트 노드
```c
typedef struct Node {
    int data;
    struct Node *next;
} Node;
```

- `next`가 다음 노드를 가리킴

---

## 단일 리스트 기본 그림
```text
head -> [10|*] -> [20|*] -> [30|NULL]
```

- `head`는 첫 노드 주소
- 마지막 노드는 `next == NULL`

---

## 노드 생성
```c
Node *create_node(int value) {
    Node *n = (Node *)malloc(sizeof(Node));
    if (!n) return NULL;
    n->data = value;
    n->next = NULL;
    return n;
}
```

---

## 앞쪽 삽입 (push front)
```c
void push_front(Node **head, int value) {
    Node *n = create_node(value);
    if (!n) return;
    n->next = *head;
    *head = n;
}
```

- `Node **head`를 받아 실제 head를 변경

---

## 끝 삽입 (push back)
```c
void push_back(Node **head, int value) {
    Node *n = create_node(value);
    if (!n) return;
    if (*head == NULL) { *head = n; return; }
    Node *cur = *head;
    while (cur->next) cur = cur->next;
    cur->next = n;
}
```

---

## 탐색 (search)
```c
Node *find(Node *head, int target) {
    Node *cur = head;
    while (cur) {
        if (cur->data == target) return cur;
        cur = cur->next;
    }
    return NULL;
}
```

---

## 삭제 (remove first match)
```c
int remove_value(Node **head, int target) {
    Node *cur = *head, *prev = NULL;
    while (cur && cur->data != target) {
        prev = cur; cur = cur->next;
    }
    if (!cur) return 0;
    if (!prev) *head = cur->next;
    else prev->next = cur->next;
    free(cur);
    return 1;
}
```

---

## 순회 출력
```c
void print_list(Node *head) {
    for (Node *cur = head; cur; cur = cur->next) {
        printf("%d -> ", cur->data);
    }
    printf("NULL\n");
}
```

---

## 메모리 해제
```c
void free_list(Node *head) {
    Node *cur = head;
    while (cur) {
        Node *next = cur->next;
        free(cur);
        cur = next;
    }
}
```

---

## 이중 연결 리스트로 확장
```c
typedef struct DNode {
    int data;
    struct DNode *prev;
    struct DNode *next;
} DNode;
```

- 양방향 이동 가능
- 삭제 연산 구현이 더 직관적

---

## 이중 리스트 그림
```text
NULL <- [10] <-> [20] <-> [30] -> NULL
```

- `prev`와 `next`를 모두 유지해야 함

---

## 이중 리스트 삽입 핵심
```c
// cur 뒤에 n 삽입
n->prev = cur;
n->next = cur->next;
if (cur->next) cur->next->prev = n;
cur->next = n;
```

---

## 이중 리스트 삭제 핵심
```c
if (target->prev) target->prev->next = target->next;
if (target->next) target->next->prev = target->prev;
free(target);
```

- head/tail 삭제 예외 처리 필요

---

## Single -> Double 전환 시 체크
- `next`만 관리하던 코드에 `prev` 동기화 추가
- 삽입/삭제 시 링크 2개 이상 수정
- 링크 한쪽만 갱신하면 리스트가 깨짐

---

## 시간 복잡도(개념)
- 탐색: O(n)
- 앞 삽입: O(1)
- 끝 삽입: O(n) (tail 포인터 없을 때)
- 중간 삭제: 위치를 알고 있으면 O(1), 탐색 포함하면 O(n)

---

## 실습 1: 단일 리스트 구현
요구사항:
- `push_front`, `push_back`, `find`, `remove_value`, `print_list`
- `10, 20, 30` 삽입 후 `20` 삭제

---

## 실습 2: 이중 리스트 변환
요구사항:
- `DNode`로 구조 변경
- 임의 노드 뒤 삽입 함수 작성
- 삭제 후 양방향 순회 결과 확인

---

## 실습 3: 메모리 안전 점검
요구사항:
- 모든 노드 해제 함수 구현
- 빈 리스트/원소 1개 리스트 테스트
- NULL 포인터 체크 포함

---

## 체크포인트
- 단일/이중 연결 리스트 차이를 설명할 수 있나요?
- head 변경이 필요한 함수에서 이중 포인터 이유를 설명할 수 있나요?
- 삽입/삭제 시 어떤 링크를 갱신해야 하는지 설명할 수 있나요?
- 마지막 해제를 누락하면 어떤 문제가 생기나요?

---

## 정리
- 연결 리스트는 포인터 기반 동적 자료구조
- 단일 리스트는 구조가 단순하고 구현이 쉽다
- 이중 리스트는 유연하지만 링크 관리가 더 까다롭다
- 기본 연산 구현 시 예외 처리와 메모리 해제가 핵심
