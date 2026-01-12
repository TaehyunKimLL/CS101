# Worksheet — Windows + MSVC Build Tools + VS Code(CMake Tools)로 C/C++ 빌드 & 디버깅(F5)

대상: Windows에서 **Visual Studio Community 전체 설치 없이** `VC Build Tools(MSVC)`만 설치하고,  
VS Code에서 **CMake Tools**로 빌드/디버깅까지 완료하는 실습

---

## 0. 학습 목표
- Visual Studio **Build Tools**로 MSVC 컴파일러 환경 설치
- VS Code에 **CMake Tools / C/C++ 확장** 설치 및 설정
- CMake 프로젝트 **Configure / Build**
- 하나의 프로젝트에서 **여러 실행파일(Target)** 생성
- **Build Target / Debug Target** 선택
- **F5 디버깅** 및 중단점 확인

---

## 1. VC Build Tools(MSVC) 설치

### 1-1. Visual Studio Installer
- Build Tools for Visual Studio 설치 실행
- 워크로드에서 **C++ build tools** 선택

### 1-2. 필수 구성요소
- MSVC v14x x64/x86 build tools
- Windows 10/11 SDK
- CMake tools for Windows (권장)
- Ninja (권장)

### 1-3. 설치 확인
```powershell
cl
cmake --version
ninja --version
```

---

## 2. VS Code 확장 설치
- C/C++ (Microsoft)
- CMake Tools (Microsoft)

---

## 3. 첫 CMake 프로젝트

### 3-1. 파일 구조
```
cmake_msvc_ws/
  CMakeLists.txt
  src/
    hello.c
```

### 3-2. 코드

**hello.c**
```c
#include <stdio.h>
int main(void) {
    printf("Hello MSVC + CMake!\n");
    return 0;
}
```

**CMakeLists.txt**
```cmake
cmake_minimum_required(VERSION 3.20)
project(cmake_msvc_ws C)
add_executable(hello src/hello.c)
```

---

## 4. Configure / Build
- CMake: Select a Kit → MSVC 선택
- CMake: Configure
- CMake: Build
- CMake: Run Without Debugging

---

## 5. 여러 실행파일(Target)

### 5-1. 파일 추가
```c
// src/calc.c
#include <stdio.h>
int add(int a, int b){ return a+b; }
int main(){
    int r = add(3,4);
    printf("result=%d\n", r);
    return 0;
}
```

### 5-2. CMakeLists.txt 수정
```cmake
add_executable(calc src/calc.c)
```

---

## 6. Target 선택
- CMake: Set Build Target
- CMake: Set Debug Target

---

## 7. F5 디버깅 설정

### 7-1. Debug 구성 생성
- CMake: Add Debug Configuration

### 7-2. launch.json 핵심
```json
{
  "type": "cppvsdbg",
  "program": "${command:cmake.launchTargetPath}"
}
```

### 7-3. 디버깅
- 중단점 설정
- F5 실행

---

## 8. 문제 해결
- 중단점 안 걸림 → Debug 빌드 확인
- cmake script debug 오류 → type: cppvsdbg 사용

---

## 9. 완료 체크
- 2개 이상의 실행파일 빌드 성공
- Debug Target 변경 후 F5 정상 동작
