---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# 파이썬 워크시트 - 변수와 타입

## 학습 목표
- [ ] 변수 선언 및 할당 연습
- [ ] 데이터 타입 확인 및 형 변환
- [ ] 입력/출력 구문 작성

---

## 실습 1: 변수와 타입
1. 다음 코드를 작성하고 실행 결과를 예측해 보세요:
   ```py
   x = 5
   y = "10"
   print(type(x))
   print(type(y))
   print(x + int(y))
   ```

2. 예상 결과:  
   - 첫 번째 print: `<class 'int'>`  
   - 두 번째 print: `<class 'str'>`  
   - 세 번째 print: `15`

---

## 실습 2: 입력/출력
1. 사용자로부터 두 수를 입력받아 합을 출력하는 프로그램을 작성하세요:
   ```py
   num1 = float(input("첫 번째 수: "))
   num2 = float(input("두 번째 수: "))
   print(f"합: {num1 + num2}")
   ```

2. 실행 예시:
   ```
   첫 번째 수: 3.5
   두 번째 수: 2
   합: 5.5
   ```

---

## 실습 3: 문자열 포맷팅
1. f-string을 사용해 다음 문장을 완성하세요:
   ```py
   name = "Alice"
   age = 25
   print(f"{name}는 {age}살입니다.")
   ```

2. 출력 결과: `Alice는 25살입니다.`

---

## 확인 사항
- [ ] 모든 실습 코드가 정상 실행되는지 확인
- [ ] 형 변환 시 발생할 수 있는 에러 상황 고려 (예: `int("abc")`)