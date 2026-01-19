---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# 프로그래밍 입문  
## Windows 개발환경 & Command Line 기초

---

## 1. 강의 개요

- 대상: 프로그래밍을 처음 배우는 대학 신입생
- 운영체제: Windows 10 / 11
- 방식: 개념 설명 + 실습 병행

### 강의 목표
- 개발환경의 개념 이해
- Command Line에 익숙해지기
- 이후 C / Python 수업을 위한 기초 체력 확보

---

## 2. 오늘 배우는 것 / 배우지 않는 것

### 오늘 배우는 것
- 개발환경의 구성 요소
- Windows 개발환경 구조
- Command Line 기본 사용법
- 파일 / 폴더 다루기

### 오늘 배우지 않는 것
- 복잡한 문법
- 고급 IDE 설정
- 운영체제 내부 구조

---

## 3. 개발환경이란 무엇인가?

### 프로그래밍은 코드만 작성하는 것이 아니다
- 코드 (Source Code)
- 도구 (Editor, Compiler)
- 실행 환경 (OS)

👉 개발환경 = 프로그래머의 작업 공간

---

## 4. 개발환경의 기본 구성 요소

- **Editor**: 코드 작성 (VS Code)
- **Compiler / Interpreter**: 코드 → 실행
- **Terminal**: 명령어 입력
- **File System**: 프로젝트 관리

👉 모든 언어에서 공통

---

## 5. GUI vs CLI

### GUI (Graphical User Interface)
- 마우스 중심
- 직관적
- 반복 작업에 불리

### CLI (Command Line Interface)
- 키보드 중심
- 자동화에 강함
- 개발자의 표준 도구

---

## 6. 왜 Command Line을 배워야 할까?

- 서버 환경에는 GUI가 없음
- 자동화와 스크립트의 기본
- 모든 개발 도구의 기반

👉 처음엔 어렵지만 반드시 필요

---

## 7. Windows 개발환경의 특징

- GUI 중심 운영체제
- 개발자는 CLI 사용
- 여러 개발 방식 공존

### 앞으로 접하게 될 환경
- Windows Native
- Linux (WSL)
- 서버 / 클라우드

---

## 8. 오늘 사용할 도구

- Visual Studio Code
- Windows Terminal
- Command Prompt
- PowerShell

👉 무료 + 표준 도구

---

## 9. Visual Studio Code 소개

- 가볍고 빠른 코드 에디터
- 다양한 언어 지원
- 터미널 내장

👉 수업의 기본 에디터

---

## 10. Windows Terminal 소개

- 여러 터미널을 하나의 창에서 관리
- Command Prompt / PowerShell / WSL 지원
- 개발자용 공식 터미널

---

## 11. Shell이란?

- 사용자의 명령을 OS에 전달
- 터미널 안에서 동작

### 대표적인 Shell
- Command Prompt
- PowerShell

---

## 12. Command Prompt vs PowerShell

### Command Prompt
- 오래된 기본 쉘
- 단순한 명령어 학습용

### PowerShell
- 최신 Windows 표준
- 자동화에 강함

👉 이 수업에서는 둘 다 사용 가능

---

## 13. 터미널 화면 읽는 법

```
C:\Users\student>
```

- 현재 위치 (Working Directory)
- 입력 대기 상태

👉 항상 위치를 확인

---

## 14. 현재 위치 확인하기

- 현재 내가 있는 폴더 = 작업 기준점

### 명령어
```
cd
```

---

## 15. 디렉토리 이동하기

### 명령어
```
cd dev
cd ..
```

- `.` : 현재 폴더
- `..` : 상위 폴더

---

## 16. 파일 목록 확인

### 명령어
```
dir
```

- 파일 존재 여부 확인
- 이름 정확히 입력하기

---

## 17. 폴더 만들기 / 삭제하기

### 명령어
```
mkdir hello
rmdir hello
```

⚠️ 삭제는 되돌릴 수 없음

---

## 18. 파일 만들기

- 파일 = 코드가 저장되는 공간
- 확장자는 언어를 의미

### 예시
```
hello.txt
```

---

## 19. Tab 자동 완성

### Tab 키의 역할
- 파일 이름 자동 완성
- 경로 자동 완성
- 오타 방지

👉 개발자의 필수 습관

---

## 20. Copy & Paste

### Windows Terminal 기준
- 복사: Ctrl + C
- 붙여넣기: Ctrl + V
- 우클릭: 붙여넣기

👉 예전 CMD와 다름

---

## 21. VS Code와 터미널 연동

- VS Code에서 터미널 실행 가능
- 같은 폴더 기준으로 작업

### 명령어
```
code .
```

---

## 22. 프로그램 실행의 개념

### 실행이란?
- 소스 코드 작성
- 실행 파일 생성
- OS가 실행

👉 Run 버튼 뒤의 과정

---

## 23. 소스 파일 vs 실행 파일

- 소스 파일: 사람이 읽는 코드
- 실행 파일: 컴퓨터가 실행

### 예
- hello.c → hello.exe

---

## 24. PATH 환경 변수 (개념)

- 명령어를 찾는 경로 목록
- 어떤 명령은 바로 실행 가능

👉 나중에 자세히 학습

---

## 25. 에러 메시지란?

- 프로그램의 실패 원인 설명
- 문제 해결의 힌트

👉 에러는 실패가 아니라 정보

---

## 26. 자주 발생하는 실수

- 경로 착각
- 파일 이름 오타
- Enter를 너무 빨리 누름
- Tab 사용 안 함

---

## 27. 문제 해결 전략

1. 에러 메시지 읽기
2. 현재 위치 확인
3. 파일 목록 확인
4. 다시 천천히 시도

---

## 28. 오늘 배운 것 정리

- 개발환경의 의미
- Windows 개발 구조
- Command Line 기본 사용
- 파일 / 폴더 관리
- 에러 메시지 읽기

---

## 29. 다음 단계 예고

- C 언어 또는 Python 시작
- 컴파일 과정 이해
- 빌드 도구 소개
- WSL 환경

---

## 30. 마무리

### 기억하세요
> 프로그래밍은 도구를 다루는 기술입니다.

다음 시간부터 본격적인 코딩을 시작합니다.
