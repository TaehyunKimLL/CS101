---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# 워크시트: macOS + VS Code + GCC/CMake/Ninja로 C 개발 환경 구축

과목명: 프로그래밍 입문 (C)  
대상: 대학 신입생 / C 입문자  
실습 시간: 약 90분  
환경: macOS + VS Code + Homebrew

---

## 학습 목표
- Homebrew로 GCC, CMake, Ninja를 설치한다
- VS Code에서 C 프로젝트를 열고 빌드한다
- CMake/Ninja 빌드 흐름을 이해한다

---

## 준비 사항
- 인터넷 연결
- 관리자 권한이 있는 macOS 계정
- VS Code 설치(최신 버전 권장)

---

## 1. Homebrew 설치
터미널에서 다음을 실행:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

설치 후 안내에 따라 PATH 설정을 완료하세요.

---

## 2. 개발 도구 설치
```
brew install gcc cmake ninja
```

설치 확인:
```
gcc --version
cmake --version
ninja --version
```

---

## 3. VS Code 확장 설치
VS Code에서 다음 확장 설치:
- C/C++ (Microsoft)
- CMake Tools (Microsoft)

---

## 4. 프로젝트 폴더 준비
```
CS101/
  C/
    Chap01/
      src/
        hello.c
```

---

## 5. hello.c 작성
```c
#include <stdio.h>

int main(void) {
    printf("Hello, macOS!\n");
    return 0;
}
```

---

## 6. VS Code에서 폴더 열기
- 터미널에서 `code .` 실행
- 또는 VS Code에서 폴더 열기

---

## 7. GCC로 빌드/실행
```
gcc src/hello.c -o hello
./hello
```

출력:
```
Hello, macOS!
```

---

## 8. CMake 프로젝트 구성
프로젝트 루트에 `CMakeLists.txt` 작성:

```cmake
cmake_minimum_required(VERSION 3.20)
project(Chap01 C)
add_executable(hello src/hello.c)
```

---

## 9. CMake + Ninja 빌드
```
cmake -S . -B build -G Ninja
cmake --build build
```

실행:
```
./build/hello
```

---

## 10. 빌드 문제 해결
- `gcc`/`cmake`/`ninja`가 안 보이면 PATH 확인
- `brew` 설치 후 터미널 재시작
- 컴파일 오류는 첫 에러 메시지부터 확인

---

## 체크포인트
- Homebrew 설치를 완료했나요?
- `gcc`, `cmake`, `ninja`가 실행되나요?
- Ninja 빌드로 실행 파일을 만들었나요?
- CMake/Ninja 흐름을 설명할 수 있나요?

---

## 정리
- macOS에서도 GCC와 CMake로 C 개발 가능
- Ninja는 빠른 빌드 도구
- VS Code + CMake Tools로 빌드 흐름을 관리 가능
