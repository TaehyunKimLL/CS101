---
marp: true
---

# 학습자용 실습 워크시트
## WSL2 + VS Code로 C 개발 환경 구성 (Windows)

과목명: 프로그래밍 입문
대상: 대학 신입생 / 프로그래밍 초심자
실습 시간: 약 70~90분
환경: Windows 10/11 + WSL2(Ubuntu)

---

## 실습 목표

이 워크시트를 완료하면 다음을 할 수 있습니다.

- WSL2와 Ubuntu를 설치할 수 있다
- VS Code에서 WSL 환경으로 개발할 수 있다
- C 컴파일러 및 빌드 도구를 설치할 수 있다
- CMake 프로젝트를 구성하고 빌드할 수 있다
- Hello World 프로그램을 실행할 수 있다

---

## 실습 전 준비 사항

- 인터넷 연결
- 관리자 권한이 있는 Windows 계정
- Windows Terminal 사용 가능 상태

TIP: 설치 과정에서는 화면 안내를 천천히 확인하세요.

---

## 실습 1. WSL2 설치

### 목표
- WSL2를 설치한다

### 실습 (PowerShell 관리자)
```
wsl --install
```

TIP: 설치 후 재부팅이 필요합니다.

---

## 실습 2. WSL2 버전 확인

### 목표
- 설치된 배포판이 WSL2인지 확인한다

### 실습 (PowerShell)
```
wsl -l -v
```

확인한 출력:
```
```

---

## 실습 3. Ubuntu 초기 업데이트

### 목표
- 패키지 목록을 최신 상태로 만든다

### 실습 (WSL Ubuntu)
```
sudo apt update
sudo apt upgrade -y
```

확인한 출력:
```
```

---

## 실습 4. C 개발 도구 설치

### 목표
- gcc, gdb, cmake를 설치한다

### 실습 (WSL Ubuntu)
```
sudo apt install -y build-essential cmake gdb
```

설치 확인:
```
gcc --version
cmake --version
gdb --version
```

확인한 버전:
```
```

---

## 실습 5. VS Code 확장 설치

### 목표
- WSL과 C 개발을 위한 확장을 설치한다

### 실습
1. VS Code 실행
2. 왼쪽 **Extensions (확장)** 아이콘 클릭
3. 아래 확장 검색 후 설치

- `Remote - WSL` (Microsoft)
- `C/C++` (Microsoft)
- `CMake Tools` (Microsoft)
- `CMake` (Microsoft)

설치한 확장 목록:
```
1.
2.
3.
4.
```

---

## 실습 6. WSL에서 프로젝트 폴더 생성

### 목표
- Linux 홈 디렉토리에 프로젝트 폴더를 만든다

### 실습 (WSL Ubuntu)
```
mkdir -p ~/dev/hello_c
cd ~/dev/hello_c
```

현재 위치:
```
```

---

## 실습 7. VS Code로 프로젝트 열기

### 목표
- WSL 폴더를 VS Code로 연다

### 실습 (WSL Ubuntu)
```
code .
```

확인:
- VS Code 오른쪽 아래에 `WSL: Ubuntu` 표시가 있는가?

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
    printf("Hello, WSL!\n");
    return 0;
}
```

파일 이름:
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
cmake_minimum_required(VERSION 3.16)

project(hello_wsl C)

add_executable(hello main.c)
```

생성한 파일:
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

현재 위치:
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

확인한 메시지:
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

생성된 파일 이름:
```
```

---

## 실습 13. Hello World 실행

### 목표
- 직접 만든 프로그램을 실행한다

### 실습 (WSL Ubuntu)
```
./hello
```

실행 결과:
```
```

---

## 실습 14. 파일 구조 확인

### 목표
- 프로젝트 구조를 확인한다

### 실습
```
ls -la
```

확인한 폴더 / 파일:
```
```

---

## 정리 질문 (반드시 생각해보기)

1. WSL2를 쓰는 이유는 무엇인가요?
2. `code .` 명령은 어디에서 실행해야 하나요?
3. 왜 `/mnt/c` 대신 `~/`에서 작업하는 것이 좋을까요?
4. `main.c`와 `hello` 실행 파일의 차이는 무엇인가요?

내 생각:
```
```

---

## 실습 마무리 체크리스트

- [ ] WSL2와 Ubuntu를 설치했다
- [ ] VS Code 확장을 설치했다
- [ ] gcc/cmake/gdb를 설치했다
- [ ] CMakeLists.txt를 작성했다
- [ ] Hello World를 빌드했다
- [ ] 실행 파일을 직접 실행했다

---

> 기억하세요: 개발 환경은 코드 실력만큼 중요합니다. WSL2는 Windows에서 Linux 개발을 가능하게 해줍니다.
