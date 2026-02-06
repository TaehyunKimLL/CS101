---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# 파이썬 기초 - 변수와 타입

## 핵심 목표
- [ ] 변수 선언과 할당 이해
- [ ] 기본 데이터 타입 (int, float, str, bool)
- [ ] 유저 입력 처리 (input())
- [ ] 출력 포맷팅 (print())

---

## 변수란?
```py
message = "Hello, World!"
print(message)
```

- 메모리에 저장된 데이터의 이름
- 동적 타이핑: 값에 따라 자동으로 타입 결정

---

## 데이터 타입

| 타입 | 예시 | 설명 |
|------|------|------|
| int | 42 | 정수 |
| float | 3.14 | 실수 |
| str | "문자열" | 문자열 |
| bool | True/False | 부울 |

---

## 타입 확인
```py
type(10)      # <class 'int'>
type(3.14)    # <class 'float'>
type("문자")  # <class 'str'>
```

---

## 형 변환
```py
int("123")    # 123
float(3)      # 3.0
str(123)      # "123"
```

---

## 입력/출력

```py
name = input("이름을 입력하세요: ")
print(f"안녕, {name}!")
```

---

## 실습 과제

1. 다음 코드를 작성하고 실행하세요:
   ```py
   age = int(input("나이를 입력하세요: "))
   print(f"{age}살이군요!")
   ```

2. 문자열 연결 연습:
   ```py
   first = "파이썬"
   last = "재미있어요"
   print(first + "은 " + last)