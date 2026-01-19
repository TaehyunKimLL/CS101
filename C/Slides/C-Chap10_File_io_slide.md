---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 10: 파일 입출력 기초

---

## 오늘 목표
- 파일 입출력의 기본 흐름을 이해한다
- `fopen/fclose`를 사용할 수 있다
- `fprintf/fscanf`, `fgets/fputs`를 구분한다
- 파일 오류 처리 방법을 익힌다

---

## 진행 순서
1. 파일과 스트림
2. 파일 열기/닫기
3. 텍스트 파일 읽기/쓰기
4. 줄 단위 처리
5. 오류 처리
6. 실습과 체크포인트

---

## 파일과 스트림
- 파일은 스트림으로 접근
- 표준 스트림: `stdin`, `stdout`, `stderr`

---

## fopen 기본
```c
FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    printf("open failed\n");
}
```

---

## 파일 모드
- `r` 읽기
- `w` 쓰기(덮어쓰기)
- `a` 추가
- `r+`, `w+`, `a+` 읽기/쓰기

---

## fclose
```c
fclose(fp);
```

---

## fprintf로 쓰기
```c
FILE *fp = fopen("out.txt", "w");
fprintf(fp, "%d %s\n", 10, "hello");
fclose(fp);
```

---

## fscanf로 읽기
```c
FILE *fp = fopen("out.txt", "r");
int n; char s[20];
fscanf(fp, "%d %19s", &n, s);
fclose(fp);
```

---

## fgets로 한 줄 읽기
```c
char buf[100];
FILE *fp = fopen("out.txt", "r");
if (fgets(buf, sizeof(buf), fp)) {
    printf("%s", buf);
}
fclose(fp);
```

---

## fputs로 한 줄 쓰기
```c
FILE *fp = fopen("out.txt", "w");
fputs("first line\n", fp);
fclose(fp);
```

---

## EOF 처리
```c
int ch;
FILE *fp = fopen("out.txt", "r");
while ((ch = fgetc(fp)) != EOF) {
    putchar(ch);
}
fclose(fp);
```

---

## 오류 처리 기본
- fopen 실패 시 NULL
- `perror`로 메시지 출력

```c
if (!fp) { perror("fopen"); }
```

---

## 경로 주의
- 상대 경로는 "현재 작업 폴더" 기준
- 절대 경로는 OS별 표기 다름

---

## 실습 1: 파일 쓰기
요구사항:
- 이름/나이를 입력
- `out.txt`에 한 줄로 저장

---

## 실습 2: 파일 읽기
요구사항:
- `out.txt`에서 데이터 읽기
- 콘솔에 출력

---

## 실습 3: 줄 세기
요구사항:
- 파일을 한 줄씩 읽기
- 줄 개수 출력

---

## 체크포인트
- `fopen/fclose` 흐름을 설명할 수 있나요?
- `fprintf`와 `fputs` 차이를 아나요?
- EOF 처리 방법을 이해했나요?

---

## 정리
- 파일은 열고, 읽고/쓰고, 닫는다
- 파일 모드를 상황에 맞게 선택한다
- 오류 처리를 습관화한다

---

## 다음 시간 예고
- Advanced Pointers
