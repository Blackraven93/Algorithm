# 프로그래밍 대회에서 배우는 알고리즘 문제해결 전략
## 1 문제 해결 시작하기
### 문제 해결과 프로그래밍 대회
  1.1 도입
  1.2 프로그래밍 대회
  1.3 이 책을 읽는 방법
  1.4 국내에서 참가할 수 있는 프로그래밍 대회
  1.5 대회 준비를 위한 조언
  1.6 더 읽을 거리

### 문제 해결 개관
  2.1 도입
  2.2 문제 해결 과정
    2.2.1 문제를 이해한다.
      - 문제를 완벽하게 이해하기
      - 제약 조건 꼼꼼히 살펴보기
    2.2.2 어떻게 풀지 계획을 세운다.
      - 문제의 추상화
    2.2.3 계획을 수행해서 문제를 해결한다.
      - 알고리즘 & 자료구조 사용
    2.2.4 어떻게 풀었는지 돌아보고, 개선할 방법이 있는지 찾아본다.
  2.3 문제 해결 전략
    - 직관과 체계적인 접근
    - 체계적인 접근을 위한 질문들
      - 비슷한 문제를 풀어본 적이 있던가?
      - 단순한 방법에서 시작할 수 있을까?
      - 내가 문제를 푸는 과정을 수식화할 수 있을까?
      - 문제를 단순화할 수 없을까?
      - 그림으로 그려볼 수 있을까?
      - 수식으로 표현할 수 있을까?
      - 문제를 분해할 수 있을까?
      - 뒤에서부터 생각해서 문제를 풀 수 있을까?
      - 순서를 강제할 수 있을까?
      - 특정 형태의 답만을 고려할 수 있을까? (정규화)
  3.4 더 읽을 거리
  
### 코딩과 디버깅에 관하여
  3.1 도입: 코딩의 중요성을 간과하지 말라
  3.2 좋은 코드를 짜기 위한 원칙
    - 간결한 코드를 작성하기
    - 적극적으로 코드 재사용하기
    - 표준 라이브러리 공부하기
    - 항상 같은 형태로 프로그램을 작성하기(코드의 일관성)
    - 일관적이고 명료한 명명법 사용하기
    - 모든 자료를 정규화해서 저장하기
    - 코드와 데이터를 분리하기
  3.3 자주 하는 실수
    - 산술 오버플로우
    - 배열 범위 밖 원소에 접근
    - 일관되지 않은 범위 표현 방식 사용하기
    - Off by one 오류(하나가 모자르거나, 하나가 많거나)
    - 컴파일러가 잡아주지 못하는 상수 오타
    - 스택 오버플로
    - 다차원 배열 인덱스 순서 바꿔 쓰기
    - 잘못된 비교 함수 작성
    - 최소, 최대 예외 잘못 다루기
    - 연산자 우선순위 잘못 쓰기
    - 너무 느린 입출력 방식 선택
    - 변수 초기화 문제
  3.4 디버깅과 테스팅
    3.4.1 디버깅
      - 작은 입력에 대해 제대로 실행되나 확인하기
      - 단정문 사용
      - 프로그램의 계산 중간 결과를 출력한다.
    3.4.2 테스트
      - 최저, 최대, 경계값, 끝값
  3.5 변수 범위의 이해
    - 산술 오버플로
      - 너무 큰 결과
      - 너무 큰 중간 값
      - 너무 큰 무한대 값
    - ~~오버플로 피해가기(더 큰 수 사용하기)~~
    - 자료형의 프로모션
  3.6 실수 자료형의 이해
    - 실수 연산의 어려움
    - 실수와 근사 값
    - 실수 비교하기
      - 비교할 실수의 크기들에 비례한 오차 한도를 정한다.
      - 상대 오차를 이용한다.
      - 대소 비교
        - 두 값이 아주 가까운 경우를 먼저 처리할 것
      - 정확한 사칙연산
      - 코드의 수치적 안정성 파악하기(오차 범위가 작음)
      - 실수 연산 아예 하지 않기
  3.7 더 읽을거리

## 2 알고리즘 분석
### 알고리즘의 시간 복잡도 분석
  4.1 도입
    - 반복문이 지배한다.
      - 알고리즘의 수행 시간을 반복문이 수행되는 횟수로 측정
  4.2 선형 알고리즘
  4.3 선형 이하 시간 알고리즘
    - 로그(나눈다)
    - 이진탐색
  4.4 지수 시간 알고리즘
    - 다항 시간 알고리즘(N^2)
    - 지수 시간 알고리즘(2^n)
    - 소인수 분해의 수행 시간
  4.5 시간 복잡도
    - 입력 종류에 따른 수행 시간의 변화
    - 점근적 시간 표기 : O 표기
    - 시간 복잡도 분석 연습
    - 시간 복잡도의 분할 상환 분석
  4.6 수행 시간 어림짐작하기
    - 주먹구구 법칙
    - 주먹구구 법칙은 주먹구구일 뿐이다.
      - 시간 복잡도가 프로그램의 실제 수행 속도를 반영하지 못하는 경우
      - 반복문의 내부가 복잡한 경우
      - 메모리 사용 패턴이 복잡한 경우
      - 언어와 컴파일러의 차이
      - 구형 컴퓨터를 사용하는 경우
    - 실제 적용해 보기
  4.7 계산 복잡도 클래스: P, NP, NP-완비
    - 문제의 특성 공부하기

### 알고리즘 정당성 증명
  5.1 도입
    - 알고리즘의 정당성 증명(수학적 기법을 이용한)
  5.2 수학적 귀납법과 반복문 불변식(시작이 참이고 과정이 참이면 결과도 참이다)
    - 귀납법
      - 단계 나누기
      - 첫 단계 증명
      - 귀납 증명
    - 반복문 불변식
      - 반복문 진입시 불변식 성립을 보임
      - 반복분 내용이 불변식을 깨뜨리지 않음을 보임
      - 반복문 종료 시에 불변식이 성립하면 항상 정답
      - 단정문을 이용해 반복문 불변식 강제하기(탈출 미리 생각)
  5.3 귀류법(우리가 원하는 바와 반대되는 상황을 가정하고 논리를 전개 결론에 대한 오류를 확인)
  5.4 다른 기술들
    - 비둘기집의 원리
    - 동전 뒤집기
    - 순환 소수 찾기
    - 구성적 증명(구체적 답을 제시)
      - 안정적 결혼 문제