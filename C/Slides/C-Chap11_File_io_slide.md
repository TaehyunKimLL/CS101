---
marp: true
theme: gaia
size: 16:9
paginate: true
lang: ko-KR
footer: Taehyun Kim ( thkim@legacylab.pro )
---

# C 언어 Chapter 11: 파일 입출력 및 표준 입출력

---

## 오늘 목표
- 표준 입출력 함수를 이해한다
- 파일 입출력의 기본 흐름을 이해한다
- 문자/줄/형식 단위 입출력을 구분한다
- 버퍼링 개념을 이해한다

---

## 진행 순서
1. 표준 스트림과 입출력 함수
2. 파일 열기/닫기
3. 문자 단위 입출력
4. 줄 단위 입출력
5. 형식 지정 입출력
6. 버퍼링
7. 실습과 체크포인트

---

## 표준 스트림
- `stdin`: 표준 입력 (키보드)
- `stdout`: 표준 출력 (화면)
- `stderr`: 표준 에러 (화면)

```c
fprintf(stdout, "Hello\n");  // printf와 동일
fprintf(stderr, "Error!\n");  // 에러 출력
```

---

## 스트림이란?
- 데이터 흐름의 추상화
- 파일, 키보드, 화면 등을 통일된 방식으로 접근
- 모두 `FILE *` 타입으로 다룸

---

## 문자 입출력 함수 개요
- `getchar()` / `putchar()`: 표준 입출력
- `getc()` / `putc()`: 파일/스트림 (매크로)
- `fgetc()` / `fputc()`: 파일/스트림 (함수)

---

## getchar / putchar
```c
int ch;
printf("문자 입력: ");
ch = getchar();
printf("입력한 문자: ");
putchar(ch);
putchar('\n');
```

---

## getchar 활용: 줄바꿈까지 읽기
```c
int ch;
while ((ch = getchar()) != '\n' && ch != EOF) {
    putchar(ch);
}
```

---

## getc vs fgetc
- `getc()`: 매크로, 빠름
- `fgetc()`: 함수, 안전

```c
FILE *fp = fopen("data.txt", "r");
int ch1 = getc(fp);     // 매크로
int ch2 = fgetc(fp);    // 함수
```

실무에서는 대부분 `fgetc` 사용

---

## putc vs fputc
```c
FILE *fp = fopen("out.txt", "w");
putc('A', fp);     // 매크로
fputc('B', fp);    // 함수
fclose(fp);
```

---

## ungetc: 문자 되돌리기
- 읽은 문자를 스트림에 다시 넣기

```c
int ch = fgetc(fp);
if (ch == '#') {
    ungetc(ch, fp);  // 다시 넣기
    // 나중에 다시 읽을 수 있음
}
```

---

## 줄 단위 입출력 함수
- `fgets()`: 파일/스트림에서 한 줄 읽기
- `fputs()`: 파일/스트림에 한 줄 쓰기
- `gets()`: **사용 금지** (보안 취약)

---

## gets vs fgets
- `gets()`: 버퍼 오버플로우 위험
- `fgets()`: 크기 제한, 안전

```c
char buf[100];
// gets(buf);        // 위험!
fgets(buf, sizeof(buf), stdin);  // 안전
```

---

## fgets 사용법
```c
char buf[100];
FILE *fp = fopen("data.txt", "r");
if (fgets(buf, sizeof(buf), fp) != NULL) {
    printf("%s", buf);
}
fclose(fp);
```

- 최대 `sizeof(buf)-1` 글자 읽음
- 줄바꿈 문자 `\n` 포함
- NULL 종료 문자 자동 추가

---

## fputs 사용법
```c
FILE *fp = fopen("out.txt", "w");
fputs("Hello\n", fp);
fputs("World\n", fp);
fclose(fp);
```

- 줄바꿈을 자동으로 추가하지 않음

---

## 표준 입력에서 한 줄 읽기
```c
char buf[100];
printf("이름 입력: ");
fgets(buf, sizeof(buf), stdin);

// 줄바꿈 제거
size_t len = strlen(buf);
if (len > 0 && buf[len-1] == '\n') {
    buf[len-1] = '\0';
}
```

---

## 파일 열기/닫기
```c
FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    perror("fopen");
    return 1;
}

// 파일 처리

fclose(fp);
```

---

## 파일 모드
- `"r"` 읽기
- `"w"` 쓰기(덮어쓰기)
- `"a"` 추가
- `"r+"` 읽기/쓰기
- `"w+"` 읽기/쓰기(생성)
- `"a+"` 읽기/추가

---

## 바이너리 모드
- 텍스트 모드: 줄바꿈 변환
- 바이너리 모드: 변환 없음

```c
FILE *fp = fopen("data.bin", "rb");  // 바이너리 읽기
```

Windows에서 중요

---

## 형식 지정 입출력
- `printf()` / `scanf()`: 표준 입출력
- `fprintf()` / `fscanf()`: 파일/스트림
- `sprintf()` / `sscanf()`: 문자열

---

## fprintf 사용법
```c
FILE *fp = fopen("out.txt", "w");
fprintf(fp, "이름: %s, 나이: %d\n", "Alice", 20);
fclose(fp);
```

---

## fscanf 사용법
```c
FILE *fp = fopen("data.txt", "r");
char name[20];
int age;
fscanf(fp, "%19s %d", name, &age);
printf("%s: %d\n", name, age);
fclose(fp);
```

---

## sprintf / sscanf
- 문자열에 형식화된 입출력

```c
char buf[100];
sprintf(buf, "나이: %d", 20);
printf("%s\n", buf);  // "나이: 20"

int age;
sscanf(buf, "나이: %d", &age);
printf("%d\n", age);  // 20
```

---

## EOF 처리
```c
int ch;
FILE *fp = fopen("data.txt", "r");
while ((ch = fgetc(fp)) != EOF) {
    putchar(ch);
}
fclose(fp);
```

- `EOF`는 파일 끝을 나타내는 상수 (-1)

---

## feof와 ferror
```c
while (fgets(buf, sizeof(buf), fp)) {
    printf("%s", buf);
}

if (feof(fp)) {
    printf("파일 끝 도달\n");
}
if (ferror(fp)) {
    printf("읽기 오류\n");
}
```

---

## 버퍼링이란?
- 데이터를 임시 저장했다가 한꺼번에 처리
- 효율성 향상
- 3가지 모드:
  - Fully buffered (블록 단위)
  - Line buffered (줄 단위)
  - Unbuffered (즉시)

---

## 표준 스트림 버퍼링
- `stdin`: Line buffered
- `stdout`: Line buffered (터미널), Fully buffered (파일)
- `stderr`: Unbuffered

---

## fflush: 버퍼 비우기
```c
printf("이름 입력: ");
fflush(stdout);  // 즉시 출력
scanf("%19s", name);
```

- 줄바꿈 없이 출력하고 싶을 때 유용

---

## 입력 버퍼 비우기
```c
int age;
char grade;
scanf("%d", &age);
// 버퍼에 남은 줄바꿈 제거
while (getchar() != '\n');
scanf("%c", &grade);
```

또는:
```c
scanf("%d", &age);
scanf(" %c", &grade);  // 공백으로 스킵
```

---

## setvbuf: 버퍼 설정
```c
char buf[BUFSIZ];
FILE *fp = fopen("data.txt", "r");
setvbuf(fp, buf, _IOFBF, BUFSIZ);  // Fully buffered
```

- `_IOFBF`: Fully buffered
- `_IOLBF`: Line buffered
- `_IONBF`: Unbuffered

---

## 파일 위치 이동
```c
FILE *fp = fopen("data.txt", "r");
fseek(fp, 10, SEEK_SET);  // 처음부터 10바이트
fseek(fp, -5, SEEK_END);  // 끝에서 5바이트 앞
long pos = ftell(fp);     // 현재 위치
rewind(fp);               // 처음으로
```

---

## fread / fwrite (바이너리)
```c
int arr[5] = {1, 2, 3, 4, 5};
FILE *fp = fopen("data.bin", "wb");
fwrite(arr, sizeof(int), 5, fp);
fclose(fp);

fp = fopen("data.bin", "rb");
int buf[5];
fread(buf, sizeof(int), 5, fp);
fclose(fp);
```

---

## 실습 1: 문자 카운트
요구사항:
- 파일에서 특정 문자 개수 세기
- fgetc 사용

---

## 실습 2: 줄 번호 출력
요구사항:
- 파일을 한 줄씩 읽기
- 줄 번호와 함께 출력

---

## 실습 3: 파일 복사
요구사항:
- 소스 파일을 대상 파일로 복사
- fgetc/fputc 사용

---

## 실습 4: CSV 읽기
요구사항:
- 쉼표로 구분된 파일 읽기
- fscanf 또는 fgets + strtok

---

## 체크포인트
- getchar/putchar와 fgetc/fputc 차이를 아나요?
- gets를 사용하면 안 되는 이유를 설명할 수 있나요?
- fprintf와 printf의 관계를 이해했나요?
- 버퍼링의 개념을 설명할 수 있나요?

---

## 정리
- 표준 스트림은 stdin/stdout/stderr
- gets는 사용 금지, fgets 사용
- getc/putc는 매크로, fgetc/fputc는 함수
- 버퍼링은 효율성을 위한 임시 저장
- 파일은 열고, 읽고/쓰고, 닫는다

---

## 다음 시간 예고
- Advanced Pointers
