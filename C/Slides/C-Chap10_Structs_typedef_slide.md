---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 10: 구조체와 사용자 정의 자료형

---

## 오늘 목표
- 구조체의 개념을 이해한다
- 구조체 선언/사용을 할 수 있다
- `typedef`로 타입을 간단히 정의한다
- 구조체 배열과 포인터를 다룬다

---

## 진행 순서
1. 구조체 개념
2. 구조체 선언/사용
3. 초기화와 배열
4. 구조체 포인터
5. typedef
6. 실습과 체크포인트

---

## 구조체란?
- 서로 다른 타입을 묶는 사용자 정의 자료형

---

## 구조체 선언
```c
typedef struct {
    int id;
    char name[20];
    double gpa;
} Student;
```

---

## 구조체 변수 사용
```c
Student s1;
s1.id = 1001;
```

---

## 구조체 초기화
```c
Student s2 = {1002, "Kim", 3.8};
```

---

## 구조체 배열
```c
Student cls[3];
cls[0].id = 1001;
```

---

## 구조체 포인터
```c
Student s = {1003, "Lee", 3.5};
Student *p = &s;
```

---

## 구조체 포인터 접근
```c
printf("%d\n", p->id); // -> 연산자
```

---

## typedef의 의미
- 긴 타입 이름을 짧게
- 가독성 향상

```c
typedef unsigned int uint;
```

---

## 구조체를 함수에 전달
```c
void print(Student s) {
    printf("%d %s\n", s.id, s.name);
}
```

---

## 포인터로 전달하기
```c
void update_gpa(Student *s, double gpa) {
    s->gpa = gpa;
}
```

---

## 자주 하는 실수
- 구조체 멤버 접근 시 `.`/`->` 혼동
- 문자열 멤버 입력 시 길이 초과

---

## 실습 1: 학생 정보
요구사항:
- Student 구조체 정의
- 이름/학번/평점 입력 후 출력

---

## 실습 2: 성적 평균
요구사항:
- 학생 배열 입력
- 평균 GPA 출력

---

## 실습 3: 최고 성적 찾기
요구사항:
- 최대 GPA 학생 찾기

---

## 체크포인트
- 구조체가 무엇인지 설명할 수 있나요?
- `.`과 `->` 차이를 이해했나요?
- `typedef`의 의미를 설명할 수 있나요?

---

## 정리
- 구조체로 서로 다른 데이터를 묶는다
- typedef로 타입 이름을 단순화한다
- 포인터로 전달하면 원본 수정 가능

---

## 다음 시간 예고
- 파일 입출력 기초
