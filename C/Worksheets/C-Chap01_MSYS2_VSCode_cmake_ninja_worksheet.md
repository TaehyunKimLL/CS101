---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# 워크시트: Windows(MSYS2) + VS Code + CMake/Ninja로 C 개발 환경 구축

과목명: 프로그래밍 입문 (C)  
대상: 대학 신입생 / C 입문자  
실습 시간: 약 90분  
환경: Windows 10/11 + MSYS2(UCRT64) + VS Code

---

## 학습 목표
- MSYS2로 GCC, CMake, Ninja를 설치한다
- VS Code에서 C 프로젝트를 열고 빌드한다
- CMake/Ninja 빌드 흐름을 이해한다

---

## 준비 사항
- 인터넷 연결
- 관리자 권한이 있는 Windows 계정
- VS Code 설치(최신 버전 권장)

---

## 1. MSYS2 설치
1) https://www.msys2.org 접속  
2) 설치 파일 다운로드 및 실행  
3) 설치 경로 예시: `C:\msys64`  

---

## 2. MSYS2 업데이트
MSYS2 UCRT64 터미널을 실행하고 다음을 입력:

```
pacman -Syu
```

업데이트 후 터미널을 재실행하라는 안내가 나오면 따르세요.

---

## 3. 개발 도구 설치
UCRT64 터미널에서:

```
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
pacman -S --needed mingw-w64-ucrt-x86_64-cmake \
  mingw-w64-ucrt-x86_64-ninja
```

---

## 4. VS Code 확장 설치
VS Code에서 다음 확장 설치:
- C/C++ (Microsoft)
- CMake Tools (Microsoft)

---

## 5. 프로젝트 폴더 준비
```
CS101/
  C/
    Chap01/
      src/
        hello.c
```

---

## 6. hello.c 작성
```c
#include <stdio.h>

int main(void) {
    printf("Hello, MSYS2!\n");
    return 0;
}
```

---

## 7. VS Code에서 폴더 열기
- UCRT64 터미널에서 `code .` 실행
- 또는 VS Code에서 폴더 열기

---

## 8. GCC로 빌드/실행
UCRT64에서:

```
gcc src/hello.c -o hello
./hello
```

출력:
```
Hello, MSYS2!
```

---

## 9. CMake 프로젝트 구성
프로젝트 루트에 `CMakeLists.txt` 작성:

```cmake
cmake_minimum_required(VERSION 3.20)
project(Chap01 C)
add_executable(hello src/hello.c)
```

---

## 10. CMake + Ninja 빌드
```
cmake -S . -B build -G Ninja
cmake --build build
```

실행:
```
./build/hello
```

---

## 11. 빌드 문제 해결
- `gcc`/`cmake`/`ninja`가 안 보이면 PATH 확인
- UCRT64 터미널인지 확인
- `CMakeLists.txt` 위치 확인

---

## 체크포인트
- MSYS2 업데이트를 완료했나요?
- `gcc`와 `cmake`가 실행되나요?
- Ninja 빌드로 실행 파일을 만들었나요?
- CMake/Ninja 흐름을 설명할 수 있나요?

---

## 정리
- MSYS2는 Windows에서 유닉스 스타일 개발 환경을 제공
- Ninja는 빠른 빌드 도구
- VS Code + CMake Tools로 빌드 흐름을 관리 가능
