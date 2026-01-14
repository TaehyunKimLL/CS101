---
marp: true
---

# 프로그래밍 입문 (C)
## WSL2 + VS Code로 C 개발 환경 구축 (Windows)

---

## 1. 오늘 목표

- WSL2 설치 및 Ubuntu 준비
- VS Code에서 WSL 개발 환경 연결
- C 컴파일러/도구 설치
- CMake 프로젝트 빌드/실행
- (선택) 디버깅(F5)

---

## 2. 왜 WSL2인가?

- Linux 표준 도구체인 사용(gcc, gdb, cmake)
- Windows에서 Linux 개발 환경을 그대로 사용
- 서버/클라우드 환경과 유사

---

## 3. 구성 요소 한 장 요약

- Windows 10/11
- WSL2 + Ubuntu
- VS Code (Windows)
- Extensions: Remote - WSL, C/C++, CMake Tools
- Toolchain: gcc, gdb, cmake

---

## 4. WSL2 설치 (Windows)

PowerShell(관리자):
```
wsl --install
```

재부팅 후 확인:
```
wsl -l -v
```
- VERSION 2 확인

---

## 5. Ubuntu 초기 설정

WSL Ubuntu 실행 후:
```
sudo apt update
sudo apt upgrade -y
```

개발 도구:
```
sudo apt install -y build-essential cmake gdb
```

---

## 6. VS Code 확장 설치

필수:
- Remote - WSL
- C/C++ (Microsoft)
- CMake Tools
- CMake

---

## 7. WSL 폴더 열기

WSL 터미널에서:
```
mkdir -p ~/dev/hello_c
cd ~/dev/hello_c
code .
```

VS Code 오른쪽 아래: `WSL: Ubuntu`

---

## 8. Hello C + CMake

**main.c**
```c
#include <stdio.h>
int main(void){
    printf("Hello, WSL!\n");
    return 0;
}
```

**CMakeLists.txt**
```cmake
cmake_minimum_required(VERSION 3.16)
project(hello_wsl C)
add_executable(hello main.c)
```

---

## 9. 빌드 & 실행

```
mkdir build
cd build
cmake ..
cmake --build .
./hello
```

---

## 10. (선택) 디버깅

- CMake Tools: Build Target 선택
- F5 실행
- gdb 기반 디버거 사용

---

## 11. 자주 생기는 문제

- WSL 버전이 1임 → `wsl --set-version <distro> 2`
- `code` 명령이 안 됨 → VS Code 재설치/Remote - WSL 확인
- 느린 빌드 → `/mnt/c` 대신 `~/`에서 작업

---

## 12. 마무리

오늘의 핵심 3가지
1) WSL2는 Linux 개발 환경
2) VS Code는 WSL에 연결해서 사용
3) 빌드는 gcc/cmake로 진행

Next: C 문법과 디버깅 실습
