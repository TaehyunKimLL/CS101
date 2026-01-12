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

---

## 2-추가. VS Code **Command Palette(명령 팔렛트)** 사용법 (신입생 필수)

VS Code는 많은 기능이 메뉴에 숨어 있어서, 기능을 찾을 때는 **Command Palette**가 가장 빠릅니다.

### 열기
- **Windows:** `Ctrl + Shift + P`
- 또는 `F1`

### 검색/실행 방법
1) `Ctrl + Shift + P`로 팔렛트를 연다  
2) 명령어 이름 일부를 입력한다 (예: `cmake` / `terminal` / `format`)  
3) 방향키로 선택 → `Enter`

### 실습: 자주 쓰는 명령 8개
- [ ] `CMake: Select a Kit` : 컴파일러/툴체인 선택
- [ ] `CMake: Configure` : CMake 설정(빌드 폴더 생성 포함)
- [ ] `CMake: Build` : 빌드 실행
- [ ] `CMake: Set Debug Target` : 디버그할 실행파일 선택
- [ ] `CMake: Debug` : 디버깅 시작(CMake Tools 기준)
- [ ] `Terminal: Create New Terminal` : 새 터미널 열기
- [ ] `Developer: Reload Window` : 확장/설정 꼬일 때 VS Code 새로고침
- [ ] `Preferences: Open Settings (JSON)` : settings.json 직접 수정

> 팁: 팔렛트에서 `>`로 시작하는 “명령”을 자주 쓰게 됩니다.  
> `@`는 심볼, `:`는 라인 이동 등도 있지만 지금은 `>`만 익혀도 충분합니다.

---

## 2-추가. Visual Studio **Developer Command Prompt/PowerShell**이 뭔가요?

MSVC 컴파일러(`cl.exe`)는 보통 아무 터미널에서나 바로 잡히지 않습니다.  
이유는 **필요한 환경 변수(PATH, INCLUDE, LIB 등)** 를 설정해야 하기 때문입니다.

### 제공되는 전용 터미널 2종
시작 메뉴에서 아래 중 하나를 실행할 수 있습니다.

- **x64 Native Tools Command Prompt for VS** (cmd 기반)
- **Developer PowerShell for VS** (PowerShell 기반)

이 전용 터미널을 열면 다음이 자동 설정됩니다.
- `PATH` : cl/link/lib 등 실행 파일 경로
- `INCLUDE` : 헤더 검색 경로
- `LIB` : 라이브러리 검색 경로
- 기타 SDK/툴셋 관련 변수

### 확인 (전용 터미널에서만 성공해야 정상)
```powershell
cl
where cl
echo $env:INCLUDE
```

> 신입생 팁: “전용 터미널에서만 cl이 된다면 정상”입니다.

---

## 2-추가. 환경 변수 설정용 **bat 파일(vcvarsall.bat)** 이해하기

Visual Studio(Build Tools 포함)는 환경 설정을 위해 **vcvarsall.bat** 같은 배치 파일을 제공합니다.
이 파일을 실행하면 MSVC 빌드에 필요한 환경 변수가 설정됩니다.

### 대표 경로(예시)
버전에 따라 경로가 다를 수 있습니다. 보통 아래 형태입니다.

- `...\VC\Auxiliary\Build\vcvarsall.bat`

실제 설치 위치는 다음으로 찾을 수 있습니다.
- 시작 메뉴의 “x64 Native Tools Command Prompt for VS” 바로가기 속성 확인
- 또는 `vswhere.exe` 사용(고급)

### 실행 예시 (cmd)
```bat
call "C:\Program Files\Microsoft Visual Studio\2022\BuildTools\VC\Auxiliary\Build\vcvarsall.bat" x64
cl
```

### 실행 예시 (PowerShell에서 cmd를 통해)
```powershell
cmd /c C:\Program Files\Microsoft Visual Studio\2022\BuildTools\VC\Auxiliary\Build\vcvarsall.bat x64 && set"
```

> 핵심: 배치 파일은 “현재 쉘 세션”의 환경을 바꾸기 때문에, 같은 창에서 이어서 빌드해야 효과가 있습니다.  
> (새 터미널을 열면 환경이 초기화됩니다.)

### VS Code에서 활용(추천 패턴)
- 가장 쉬움: **Developer PowerShell for VS**에서 `code .`로 VS Code를 열기  
  → VS Code의 터미널도 같은 환경을 이어받는 경우가 많습니다.
- 또는 VS Code 터미널 프로필을 전용 터미널로 설정

---

## 2-추가. AMD64(x64) / x86 용어 정리 + 크로스 컴파일 개념

### 1) 용어
- **x86**: 32비트 Intel/호환 아키텍처(보통 32-bit)
- **AMD64 / x64**: 64비트 아키텍처(현재 Windows PC 표준)

> “AMD64”라는 이름이지만 Intel 64비트도 같은 명령어 집합이라 Windows에서는 보통 x64로 묶어 말합니다.

### 2) 왜 x64가 기본인가?
- 메모리 주소 공간이 크고(대형 프로그램/라이브러리), 현대 개발환경/라이브러리들이 x64를 기본으로 합니다.
- 대부분의 신입생 프로젝트는 **x64만으로 충분**합니다.

### 3) 크로스 컴파일이란?
내 PC(호스트)에서 **다른 아키텍처(타깃)** 용 실행파일을 만드는 것

예:
- 호스트: x64 Windows
- 타깃: x86(32비트) 실행파일 생성

### 4) MSVC에서 “네이티브/크로스”의 의미
- **x64 Native Tools**: x64용 도구 체인 + x64 타깃 빌드
- **x86 Native Tools**: x86용 도구 체인 + x86 타깃 빌드
- **x64에서 x86 타깃 빌드** 같은 “크로스”도 가능(설치 구성요소가 갖춰져 있어야 함)

### 5) vcvarsall.bat 인자 예시(개념)
- `vcvarsall.bat x64` : x64 타깃
- `vcvarsall.bat x86` : x86 타깃
- `vcvarsall.bat x64_x86` : (호스트 x64)에서 (타깃 x86)로 빌드하는 크로스 환경

> 실제 지원 인자는 설치된 툴셋/버전에 따라 달라질 수 있습니다.  
> 시작 메뉴의 “x86/x64 Native Tools…”가 이미 있다면 그 구성이 지원된다는 뜻입니다.

---

## 5-추가. 한 프로젝트에서 **x64 / x86 둘 다 빌드** 해보기(선택 실습)

### 방법 A) 멀티-컨피그(Visual Studio Generator) 사용 시
MSVC는 종종 Visual Studio generator를 사용하면 구성/플랫폼 선택이 가능합니다.
- 플랫폼: x64, Win32(x86) 등

CMake Tools에서 **Kit / Variant / Configure**를 바꿔서 각각 빌드해볼 수 있습니다.

### 방법 B) 각각 별도 빌드 폴더로 관리(초보 추천)
- `build-x64/`
- `build-x86/`

예(개념):
1) x64용 전용 터미널(또는 vcvarsall x64)에서 Configure/Build
2) x86용 전용 터미널(또는 vcvarsall x86)에서 Configure/Build

체크:
- [ ] x64 빌드 폴더에서 생성된 exe 실행
- [ ] x86 빌드 폴더에서 생성된 exe 실행(가능하면)

> x86 실행파일은 x64 Windows에서도 실행됩니다(WoW64).  
> 반대로 x64 실행파일은 32비트 OS에서는 실행 불가입니다.

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
