---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 워크시트 Chapter 15: Linked List (Single -> Double)

---

## 학습 목표
- 단일 연결 리스트 기본 연산을 직접 구현한다
- 이중 연결 리스트로 확장하며 링크 갱신 규칙을 익힌다
- 메모리 해제와 예외 처리를 포함한 안전한 코드를 작성한다

---

## 준비 코드
```c
#include <stdio.h>
#include <stdlib.h>
```

단일 노드 선언:
```c
typedef struct Node {
    int data;
    struct Node *next;
} Node;
```

---

## 실습 1: 단일 리스트 생성/출력
요구사항:
- `create_node(int value)`
- `print_list(Node *head)`
- `push_front(Node **head, int value)`

테스트:
1. 빈 리스트 출력
2. `push_front`로 30, 20, 10 삽입
3. 출력 결과가 `10 -> 20 -> 30 -> NULL`인지 확인

---

## 실습 2: 단일 리스트 끝 삽입/탐색
요구사항:
- `push_back(Node **head, int value)`
- `find(Node *head, int target)`

테스트:
- `40`, `50`을 뒤에 추가
- `find(..., 30)` 성공 여부 출력
- `find(..., 999)` 실패 처리 확인

---

## 실습 3: 단일 리스트 삭제
요구사항:
- `remove_value(Node **head, int target)` 구현
- 반환값: 삭제 성공 1, 실패 0

테스트 시나리오:
1. head 삭제
2. 중간 노드 삭제
3. 없는 값 삭제
4. 마지막 노드 삭제

---

## 실습 4: 단일 -> 이중 전환
이중 노드 선언:
```c
typedef struct DNode {
    int data;
    struct DNode *prev;
    struct DNode *next;
} DNode;
```

요구사항:
- `d_push_back`, `d_insert_after`, `d_remove`
- `print_forward`, `print_backward`

---

## 실습 5: 링크 일관성 점검
아래 조건을 코드로 검증하세요.
1. `node->next != NULL`이면 `node->next->prev == node`
2. `node->prev != NULL`이면 `node->prev->next == node`
3. head의 `prev`는 NULL

힌트:
- 순회 중 assert 스타일 출력으로 확인

---

## 실습 6: 전체 해제 함수
요구사항:
- 단일 리스트: `free_list(Node *head)`
- 이중 리스트: `d_free_list(DNode *head)`
- 해제 후 head를 NULL로 초기화

체크:
- [ ] 누수 없이 종료되는지 확인

---

## 도전 과제 (선택)
- tail 포인터를 추가해 `push_back`을 O(1)로 개선
- 리스트 길이(size) 필드를 두어 연산 후 값 갱신
- 중복 값 삭제(`remove_all`) 구현

---

## 제출 체크리스트
- [ ] 단일 리스트 연산 5종 구현 완료
- [ ] 이중 리스트 연산 3종 구현 완료
- [ ] forward/backward 출력으로 연결 상태 검증
- [ ] 해제 함수로 누수 방지 처리 완료
