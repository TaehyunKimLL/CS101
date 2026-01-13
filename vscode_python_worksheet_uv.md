---
marp: true
---

# 학습자용 실습 워크시트
## VS Code로 Python 개발 환경 구축 (Windows 10/11)

과목명: 프로그래밍 입문 (Python)  
대상: 대학 신입생 / 프로그래밍 초심자  
실습 시간: 약 60~80분  
환경: Windows 10/11 + Windows Terminal + VS Code

> 이 워크시트는 이전 시간의 “Windows 개발환경 & Command Line 기초” 내용을 알고 있다는 전제에서 진행합니다. (터미널 실행, `cd`, `dir`, `code .` 등)

---

## 실습 목표

이 워크시트를 완료하면 다음을 할 수 있습니다.

- Windows에 Python을 설치하고 버전을 확인할 수 있다
- VS Code에서 Python 확장(Extension)을 설치하고 인터프리터를 선택할 수 있다
- 프로젝트별 가상환경(venv)을 만들고 활성화할 수 있다
- `pip`로 패키지를 설치하고 실행/디버깅할 수 있다
- 포매터/린터를 설정해 “깔끔한 코드 습관”을 만들 수 있다
- VS Code에서 Jupyter Notebook을 실행할 수 있다(선택)

---

## 실습 전 준비 사항

- Windows Terminal 설치 확인
- Visual Studio Code 설치 확인
- 관리자 권한이 필요할 수 있음(설치 단계)

---

# Part 1. Python 설치 & 확인

## 실습 1. Python 설치하기 (권장 2가지 중 1)

### 옵션 A) Microsoft Store (초심자에게 쉬움)
1. 시작 메뉴에서 **Microsoft Store** 실행
2. “Python” 검색 → **Python 3.x** 설치

### 옵션 B) python.org (표준 설치)
1. python.org에서 최신 Python 3.x 다운로드
2. 설치 시 **Add python.exe to PATH** 체크 권장

✍️ 내가 선택한 설치 방법:
```
(예: Store / python.org)
```

---

## 실습 2. 터미널에서 Python 버전 확인

Windows Terminal(또는 VS Code 터미널)에서 아래 명령을 실행하세요.

```
python --version
```

또는 환경에 따라:

```
py --version
```

✍️ 출력된 버전:
```
```

---

## 실습 3. pip 버전 확인

```
python -m pip --version
```

✍️ 출력:
```
```

---

# Part 2. 프로젝트 만들기 & VS Code 설정

## 실습 4. 프로젝트 폴더 생성

1) 터미널에서 아래 순서대로 진행:

- 개발 폴더로 이동 (예: `C:\dev`)
- 새 프로젝트 폴더 생성: `py-hello`
- 폴더로 이동

✍️ 사용한 명령어:
```
```

2) VS Code에서 폴더 열기

```
code .
```

✍️ VS Code가 열렸나요? (Y/N)
```
```

---

## 실습 5. VS Code Python 확장 설치

1. VS Code 왼쪽 **Extensions(확장)** 아이콘 클릭  
2. 아래 확장을 설치하세요.

- **Python** (Microsoft)
- **Pylance** (Microsoft)

(선택) 노트북까지 쓸 예정이면:
- **Jupyter** (Microsoft)

✍️ 설치 완료 체크:
- [ ] Python
- [ ] Pylance
- [ ] (선택) Jupyter

---

## 실습 6. 가상환경(venv) 만들기

VS Code 터미널(권장: PowerShell)에서 프로젝트 루트에서 실행:

```
python -m venv .venv
```

생성이 되었는지 확인(폴더 목록 확인):

- Windows:
```
dir
```

✍️ `.venv` 폴더가 보이나요? (Y/N)
```
```

---

## 실습 7. 가상환경 활성화

### PowerShell
```
.\.venv\Scripts\Activate.ps1
```

### Command Prompt
```
.\.venv\Scripts\activate.bat
```

활성화되면 프롬프트 앞에 `(.venv)` 비슷한 표시가 뜹니다.

✍️ 활성화 표시가 보이나요? (Y/N)
```
```

> 만약 PowerShell에서 스크립트 실행이 막히면(보안 정책), 아래 중 하나를 시도:
> - VS Code 터미널을 Command Prompt로 바꿔서 `activate.bat` 실행
> - (관리자 PowerShell) `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

---

## 실습 8. VS Code에서 Python 인터프리터 선택

1. `Ctrl + Shift + P` (Command Palette)
2. `Python: Select Interpreter`
3. 목록에서 **.venv**로 표시된 인터프리터 선택

✍️ 선택한 인터프리터 경로(보이는 대로):
```
```

---

# Part 3. 첫 번째 Python 실행 & 디버깅

## 실습 9. hello.py 만들기

프로젝트 루트에 `hello.py` 파일 생성 후 아래 입력:

```python
print("Hello, Python in VS Code!")
```

---

## 실습 10. 실행하기 (터미널)

```
python hello.py
```

✍️ 출력:
```
```

---

## 실습 11. Run 버튼으로 실행하기

1. `hello.py` 열기
2. 오른쪽 상단 ▶ (Run Python File) 클릭

✍️ 실행이 되었나요? (Y/N)
```
```

---

## 실습 12. 디버깅하기 (F5)

1. `hello.py`의 `print(...)` 줄 왼쪽을 클릭해서 **중단점(Breakpoint)** 찍기
2. `F5` 누르기
3. 디버거가 멈추면 **Variables / Call Stack** 확인

✍️ 디버깅 중에 확인한 것(간단히):
```
```

---

# Part 4. 패키지 설치 & requirements.txt

## 실습 13. 패키지 설치 (예: requests)

가상환경이 활성화된 상태에서:

```
python -m pip install requests
```

설치 확인:

```
python -m pip show requests
```

✍️ 설치된 버전:
```
```

---

## 실습 14. requirements.txt 만들기

```
python -m pip freeze > requirements.txt
```

확인:

```
type requirements.txt
```

✍️ 파일에 들어있는 내용(일부):
```
```

---

# Part 4-추가. pip 대신 **uv**로 더 빠르게 환경 구성하기 (권장 옵션)

> uv(Astral)는 `pip/venv/pip-tools/poetry` 등의 워크플로우를 한 CLI로 묶고, 매우 빠른 설치/동기화를 제공하는 도구입니다.  
> 이 파트는 **기존 pip+venv 방식과 “택1”** 입니다. (둘 다 알아두면 좋습니다) 

---

## uv 설치 (Windows)

아래 중 편한 방법 1가지를 선택하세요.

### 방법 A) Scoop (이미 Scoop이 있다면 가장 간단)
```powershell
scoop install main/uv
```
---

### 방법 B) Winget (환경에 따라 가능)
```powershell
winget install astral-sh.uv
```
(winget 패키지 존재 여부는 PC 환경에 따라 달라질 수 있습니다.) citeturn0search5

---

### 방법 C) 공식 문서의 Standalone installer / GitHub Releases
- 공식 문서 설치 안내를 따르세요. 

설치 확인:
```powershell
uv --version
```

✍️ 출력:
```
```

---

## uv 프로젝트 시작 루틴 (가장 쉬운 흐름)

### 실습 U1. 새 프로젝트 초기화 (pyproject.toml 생성)
프로젝트 폴더 루트에서:
```powershell
uv init
```

✍️ 생성된 파일 체크:
- [ ] `pyproject.toml`

---

### 실습 U2. 의존성 추가 + 동기화 (설치까지 자동)
예: requests 설치
```powershell
uv add requests
```

이 명령은 **의존성 선언 + 잠금(lock) + 설치(sync)** 까지 포함합니다. citeturn0search11

✍️ 생성/변경된 파일 체크:
- [ ] `pyproject.toml` 업데이트됨
- [ ] `uv.lock` 생성됨
- [ ] `.venv` 생성됨(없었다면)

---

### 실습 U3. 실행하기 (venv 활성화 없이도 가능)
```powershell
uv run python hello.py
```
또는 스크립트를 바로:
```powershell
uv run hello.py
```
(프로젝트 설정에 따라 달라질 수 있습니다.)

✍️ 출력:
```
```

---

### 실습 U4. 다른 PC/새 환경에서 “그대로 재현”
프로젝트 루트에서:
```powershell
uv sync
```
`uv.lock` 기준으로 의존성이 **정확히 동기화** 됩니다. 

---

## uv를 쓰면 좋은 포인트 (요약)

- `uv add`로 **pyproject.toml + uv.lock + 설치**가 한 번에 끝남 
- `uv sync`로 팀/다른 PC에서 **재현 가능한 환경** 만들기 쉬움 
- `uv run`으로 venv 활성화 없이도 “항상 같은 환경”에서 실행 가능 

---

## (호환) 기존 requirements.txt 프로젝트를 uv로 가져오기

기존 `requirements.txt`가 있다면:
```powershell
uv add -r requirements.txt
```
그 후:
```powershell
uv sync
```

---

## uv 업데이트 (선택)

- Standalone installer로 설치한 경우:
```powershell
uv self update
```

---

# Part 5. 코드 품질: 포매터/린터 설정 (권장)

> 목표: “실행은 되는데 코드가 지저분한 상태”를 줄이는 습관 만들기

## 실습 15. Black(포매터) + Ruff(린터) 설치

```
python -m pip install black ruff
```

---

## 실습 16. VS Code 설정 파일 만들기

프로젝트 루트에 `.vscode` 폴더를 만들고, `settings.json` 생성 후 아래 내용을 넣으세요.

> (이미 `.vscode`가 있으면 그대로 사용)

```json
{
  "python.defaultInterpreterPath": "${workspaceFolder}\\.venv\\Scripts\\python.exe",
  "editor.formatOnSave": true,
  "python.formatting.provider": "black",
  "python.linting.enabled": true,
  "python.linting.ruffEnabled": true
}
```

✍️ 저장 후, `hello.py`를 저장할 때 자동 정렬이 되나요? (Y/N)
```
```

> 참고: VS Code/확장 버전에 따라 설정 키가 바뀔 수 있습니다.  
> 동작하지 않으면 “Command Palette → Format Document”로 확인하고, Extensions 설정에서 Black/Ruff를 지정하세요.

---

# Part 6. (선택) Jupyter Notebook 사용

## 실습 17. 노트북 파일 만들기

1. VS Code에서 `hello.ipynb` 생성
2. 우측 상단에서 **Kernel** 선택 → `.venv` 선택
3. 아래 셀 실행:

```python
import sys
sys.version
```

✍️ 출력 일부:
```
```

---

# Part 7. 마무리 체크리스트

- [ ] `python --version` 확인 완료
- [ ] VS Code에 Python/Pylance 설치 완료
- [ ] 프로젝트에 `.venv` 생성 및 활성화 완료
- [ ] 인터프리터를 `.venv`로 선택 완료
- [ ] `hello.py` 실행 및 F5 디버깅 완료
- [ ] `pip install` 및 `requirements.txt` 생성 완료
- [ ] (권장) Black/Ruff 설정 완료
- [ ] (선택) Jupyter Notebook 실행 완료

---

# 정리 질문 (복습)

1. 가상환경(venv)을 쓰는 이유는 무엇인가요?
2. “VS Code 인터프리터 선택”과 “터미널에서 활성화”는 어떤 관계인가요?
3. 디버깅(F5)이 단순 실행과 다른 점은 무엇인가요?
4. `requirements.txt`는 언제/왜 필요할까요?

---

> 기억하세요: **환경을 제대로 잡아두면, 이후 학습 속도가 크게 빨라집니다.**
