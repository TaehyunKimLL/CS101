---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# 워크시트: VS Code + CMake로 빌드/디버그/툴체인 선택

과목명: 프로그래밍 입문 (C)  
대상: 대학 신입생 / C 입문자  
실습 시간: 약 90분  
환경: VS Code + CMake Tools

---

## 학습 목표
- VS Code에서 CMake 프로젝트를 구성한다
- 빌드/실행/디버그 흐름을 익힌다
- 툴체인(compiler)을 선택하고 전환한다

---

## 준비 사항
- VS Code 설치
- CMake 설치
- CMake Tools 확장 설치
- C/C++ 확장 설치

---

## 1. 프로젝트 폴더 구성
```
Chap01/
  src/
    hello.c
  CMakeLists.txt
```

---

## 2. hello.c 작성
```c
#include <stdio.h>

int main(void) {
    printf("Hello, CMake!\n");
    return 0;
}
```

---

## 3. CMakeLists.txt 작성
```cmake
cmake_minimum_required(VERSION 3.20)
project(Chap01 C)
add_executable(hello src/hello.c)
```

---

## 3-1. 두 개의 실행 파일 추가
`world.c`를 하나 더 만들고 두 개의 타겟을 정의합니다.

`src/world.c`
```c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");
    return 0;
}
```

---

`CMakeLists.txt`
```cmake
cmake_minimum_required(VERSION 3.20)
project(Chap01 C)
add_executable(hello src/hello.c)
add_executable(hello src/world.c)

```

---

## 4. VS Code에서 폴더 열기
- `File > Open Folder...`
- `Chap01` 폴더 선택
- 상태바에 "CMake: [No Kit Selected]" 표시 확인

---

## 5. Kit(툴체인) 선택
- 상태바의 "No Kit Selected" 클릭
- 또는 `Ctrl+Shift+P` → `CMake: Select a Kit`
- 설치된 컴파일러 중 하나 선택
  - MSVC / GCC / Clang
- 선택 결과가 상태바에 표시됨

---

## 6. Configure 실행
- 상태바의 "CMake: Configure" 클릭
- 또는 `Ctrl+Shift+P` → `CMake: Configure`

---

## 7. 빌드 타입 선택
- `CMake: Select Build Type`
- `Debug` 또는 `Release` 선택

---

## 8. 빌드 실행
- 상태바의 "Build" 클릭
- 또는 `Ctrl+Shift+P` → `CMake: Build`

---

## 8-1. 타겟 선택
- 상태바의 "CMake: [target]" 클릭
- 또는 `Ctrl+Shift+P` → `CMake: Set Build Target`
- `hello`와 `world` 중 원하는 타겟 선택

---

## 9. 실행(Launch)
- 상태바의 "Run" 클릭
- 또는 `CMake: Run Without Debugging`

---

## 10. 디버그 실행
- 상태바의 "Debug" 클릭
- 또는 `CMake: Debug`

---

## 11. 디버그 기본 조작
- 중단점(Breakpoint) 추가
- Step Over(F10), Step Into(F11)
- 변수/Watch 확인

---

## 12. 빌드 디렉터리 확인
- 기본 빌드 폴더: `build/` 또는 `.vscode/` 하위
- `CMake: Open Build Directory`로 확인

---

## 13. Kit 전환
- 다른 컴파일러로 변경 시:
  1) `CMake: Select a Kit`
  2) 다시 Configure/Build

---

## 14. 문제 해결
- Configure 실패: CMake 경로/Kit 확인
- Build 실패: 컴파일러 설치 여부 확인
- Debug 안 됨: `Debug` 빌드 타입인지 확인

---

## 체크포인트
- Kit을 선택하고 변경할 수 있나요?
- Configure/Build/Run 흐름을 설명할 수 있나요?
- Debug에서 중단점을 사용할 수 있나요?

---

## 정리
- CMake Tools는 빌드/디버그 과정을 단순화
- Kit은 컴파일러 선택을 의미
- Debug 모드에서 실행해야 디버깅이 가능
