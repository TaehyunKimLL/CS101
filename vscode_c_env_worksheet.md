---
marp: true
---

# 학습자용 실습 워크시트  
## VS Code 설치 & C 개발 환경 구성 (Windows)

과목명: 프로그래밍 입문  
대상: 대학 신입생 / 프로그래밍 초심자  
실습 시간: 약 60~80분  
환경: Windows 10/11

---

## 실습 목표

이 워크시트를 완료하면 다음을 할 수 있습니다.

- Visual Studio Code를 직접 설치할 수 있다
- VS Code에 C/C++ 관련 확장을 설치할 수 있다
- C 컴파일러가 무엇인지 이해하고 설치할 수 있다
- CMake를 사용해 프로젝트를 구성할 수 있다
- C 언어로 Hello World 프로그램을 빌드하고 실행할 수 있다

---

## 실습 전 준비 사항

- 인터넷 연결
- 관리자 권한이 있는 Windows 계정
- Windows Terminal 사용 가능 상태

⚠️ 설치 과정에서는 화면을 잘 읽고 체크박스를 확인하세요.

---

## 실습 1. Visual Studio Code 다운로드 및 설치

### 목표
- VS Code를 설치한다

### 실습
1. 웹 브라우저 실행
2. 아래 사이트 접속  
   - https://code.visualstudio.com
3. **Download for Windows** 클릭
4. 설치 파일 실행

### 설치 중 체크 사항 (중요)
아래 항목이 있으면 반드시 체크하세요.

- [ ] Add to PATH  
- [ ] Add “Open with Code” action  
- [ ] Register Code as an editor  

✍️ 설치 완료 후 실행 확인:
```
VS Code가 정상적으로 실행되었나요? (예 / 아니오)
```

---

## 실습 2. 터미널에서 VS Code 실행 확인

### 목표
- CLI에서 에디터를 실행할 수 있는지 확인한다

### 실습
1. Windows Terminal 실행
2. 아래 명령어 입력

```
code --version
```
✍️ 출력 결과:
```
```

❓ 만약 에러가 난다면:
- VS Code 설치가 제대로 되었는지 확인
- 설치 중 PATH 옵션을 체크했는지 확인
---

## 실습 3. C/C++ 확장(Plug-in) 설치

### 목표
- C 언어 개발을 위한 필수 확장을 설치한다

### 실습
1. VS Code 실행
2. 왼쪽 **Extensions (확장)** 아이콘 클릭
3. 아래 확장 검색 후 설치

- `C/C++` (Microsoft)
- `CMake Tools` (Microsoft)
- `CMake` (Microsoft)

✍️ 설치한 확장 목록:
```
1.
2.
3.
```

---

## 실습 4. C 컴파일러 설치 (MSYS2 사용)

### 목표
- C 코드를 컴파일할 수 있는 환경을 만든다

### 실습
1. 웹 브라우저에서 MSYS2 검색
2. 공식 사이트 접속 후 설치  
   - https://www.msys2.org
3. 기본 설정으로 설치 진행

설치 후 **MSYS2 UCRT64** 또는 **MSYS2 MinGW64** 터미널 실행

---

### 컴파일러 설치

아래 명령어를 입력하세요.

```
pacman -S mingw-w64-x86_64-gcc
```

설치 중 `Proceed? [Y/n]` 이 나오면 **Y 입력**

✍️ 설치된 gcc 버전 확인:
```
gcc --version
```

✍️ 출력 결과:
```
```

---

## 실습 5. CMake 설치 확인

### 목표
- 빌드 도구 CMake가 있는지 확인한다

### 실습
```
cmake --version
```

✍️ 결과:
```
```

❓ 만약 명령어가 없다면(설치):
```
pacman -S mingw-w64-x86_64-cmake
```

---

## 실습 6. C 프로젝트 폴더 생성

### 목표
- C 프로젝트의 기본 구조를 만든다

### 실습
1. Windows Terminal 실행
2. 개발용 폴더로 이동 (예: `C:\dev`)
3. 프로젝트 폴더 생성

```
mkdir hello_c
cd hello_c
```

✍️ 현재 위치:
```
```

---

## 실습 7. VS Code로 프로젝트 열기

### 목표
- 프로젝트 폴더를 VS Code로 연다

### 실습
```
code .
```

✍️ VS Code에 열린 폴더 이름:
```
```

---

## 실습 8. Hello World 소스 코드 작성

### 목표
- 첫 번째 C 프로그램을 작성한다

### 실습
1. `main.c` 파일 생성
2. 아래 코드 입력 후 저장

```c
#include <stdio.h>

int main(void)
{
    printf("Hello, World!\n");
    return 0;
}
```

✍️ 파일 이름:
```
```

---

## 실습 9. CMakeLists.txt 작성

### 목표
- 빌드 설정 파일을 작성한다

### 실습
1. `CMakeLists.txt` 파일 생성
2. 아래 내용 입력

```cmake
cmake_minimum_required(VERSION 3.10)

project(hello_c)

add_executable(hello main.c)
```

✍️ 생성한 파일:
```
```

---

## 실습 10. 빌드 디렉토리 생성

### 목표
- 소스와 빌드 결과를 분리한다

### 실습
```
mkdir build
cd build
```

✍️ 현재 위치:
```
```

---

## 실습 11. CMake 실행 (빌드 설정)

### 목표
- 빌드 파일을 생성한다

### 실습
```
cmake ..
```

✍️ 실행 결과 중 확인한 메시지:
```
```

---

## 실습 12. 프로그램 빌드

### 목표
- 실행 파일을 생성한다

### 실습
```
cmake --build .
```

✍️ 생성된 파일 이름:
```
```

---

## 실습 13. Hello World 실행

### 목표
- 직접 만든 프로그램을 실행한다

### 실습 (Windows 기준)
```
hello.exe
```

✍️ 실행 결과:
```
```

🎉 축하합니다! 첫 C 프로그램을 빌드하고 실행했습니다.

---

## 실습 14. 파일 구조 확인

### 목표
- 프로젝트 구조를 이해한다

### 실습
```
dir
```

✍️ 확인한 폴더 / 파일:
```
```

---

## 정리 질문 (반드시 생각해보기)

1. VS Code는 컴파일러인가요? 에디터인가요?
2. CMake는 어떤 역할을 하나요?
3. `main.c`와 `hello.exe`의 차이는 무엇인가요?
4. 빌드 디렉토리를 따로 만드는 이유는 무엇일까요?

✍️ 내 생각:
```
```

---

## 실습 마무리 체크리스트

- [ ] VS Code를 설치했다
- [ ] C/C++ 확장을 설치했다
- [ ] C 컴파일러를 설치했다
- [ ] CMakeLists.txt를 작성했다
- [ ] Hello World를 빌드했다
- [ ] 실행 파일을 직접 실행했다

---

> 기억하세요: 코드는 자동으로 실행되지 않습니다. 컴파일과 빌드는 개발자의 책임입니다.
