# 프로젝트 개요
- 프로젝트명: 
- 내부문서:
  - 기본 문서관리: [Notion](https://www.naver.com)
  - 이슈 관리: [Gitlab](https://www.naver.com)

## 참여 인원
- PM: 
- 기획:
- 디자인:
- 프론트:
- 백엔드

## 개발 스택
- Node/NPM: 18.13.0/8.19.3
- Vue 3
  - Composition API using Vue3 + script setup
  - 'src/' directory and app router
  - import alias: '@'
  - Vue Router
  - Pinia
  - tailwindcss
  - Code formatting
    - eslint + custom rules
    - prettier
    - stylelint
  - husky(+ commit lint)
- 추가 Node 플러그인
  - none
- Bundler
  -  Vite
- Other set
  - Dev port: 8009

## 개발 환경
- Target Device
  - OS
    - Window 8, 10, 11
    - macOS Catalina
  - Browser (IE 브라우저로 연결될 경우 MS Edge 브라우저로 재연결)
    - Edge 88.0.705.50(Anaheim) 이상 (~2019 Spartan 제외)
    - Google Chrome 88.0.4324 이상
    - Mozilla Firefox 85.0.2 이상
    - Apple Safari 14.12 (611.3.10.1.5) 이상
  - Edit Tool
    - JetBrains IntelliJ 2023.1.3 UE
      - Prettier
        - Run for files: `{**/*,*}.{js,ts,jsx,tsx,vue,css,scss,json}`
        - Run on save: true
      - Eslint
        - Run eslint --fix on save: true

## 디렉터리 구조
```
src/
|-- assets/                # 이미지, 전역 스타일 등의 정적 리소스
|-- components/            # 범용 컴포넌트
|-- composable/            # 재사용 가능한 Composition 함수
|-- containers/            # 해당 view 페이지에서만 사용하는 컴포넌트
|-- layouts/               # 범용 레이아웃 컴포넌트
|-- plugins                # 플러그인 생성 또는 연결   
|-- router/                # Vue Router 라우팅 관련 설정
|-- store/                 # Pinia 상태 관리 디렉터리
|-- untils/                # 유틸리티 함수    
|-- views/                 # 라우트별 레이아웃 컴포넌트              
|-- App.vue                # 메인 앱 컴포넌트
|-- main.js                # 앱의 엔트리 포인트
```

## 아키텍처

- assets: 이미지, 전역 스타일, 폰트 및 기타 정적 파일을 포함한 정적 리소스.
- components: 범용적으로 사용되는 Vue 컴포넌트. ex) button, input, card
- composable: Vue 3의 Composition API를 사용하여, 컴포넌트의 반복적이거나 공통적인 로직(데이터(**Stateful**), 메서드 등)을 재사용 가능한 함수로 분리한 것
- containers: 해당하는 view 페이지에서만 사용하는 컴포넌트(추후에 공통으로 사용하게 될 때는 components 폴더로 이동) 
- layouts: 전체 어플리케이션 또는 특정 부분의 레이아웃을 정의하는 컴포넌트. ex) header, sidebar, footer
- plugins: 전역에 추가할 플러그인 기능들을 모아놓은 폴더.
- router: Vue Router를 사용하여 어플리케이션의 페이지 라우팅을 정의.
- store: Pinia 사용한 전역 상태 관리 로직.
- utils: 반복되는 작업을 위한 함수나 특정 기능을 수항해는 함수들이 위치.
- views: 각 라우트별로 연결된 메인 컴포넌트나 페이지를 정의.
- App.vue: 어플리케이션의 최상위 컴포넌트. 모든 컴포넌트와 레이아웃은 이 이 컴포넌트 안에 렌더링 됨.
- main.js: Vue 인스턴스를 생성, 전역으로 처리해야 될 부분은 이곳에서 처리.

## 스택
- Node/NPM: 18.13.0/8.19.3
- Vue 3
  - Composition API using Vue3 + script setup
  - import alias: '@'
  - Vue Router
  - Pinia
  - Code formatting
    - eslint + airbnb + custom rules
    - prettier
    - stylelint
  - husky(+ commit lint)
- Bundler
  -  Vite 4

## Code Rule
- 라우팅 페이지 디렉토리 네이밍은 **케밥 케이스(kebab-case)** 로 한다.
- 컴포넌트 디렉토리 네이밍은 **파스칼 케이스(PascalCase)** 로 한다.
- 그 외에 디렉토리 네이밍은 **스네이크식 케이스(snake_case)** 로 한다.
- css 네이밍은 **BEM** 규칙을 사용한다.
  - [BEM 설명 1](https://tech.elysia.land/%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-bem-b291ba7bff01)
  - [BEM 설명 2](https://getbem.com/)

## 브런치 전략
- Gitlab-Flow
  - [Gitlab-Flow 간략한 설명](https://brownbears.tistory.com/605)
  - [Git-Flow, Github-Flow, Gitlab-Flow 비교 ](https://youngtoad.tistory.com/46)


## Conventional Commits 규칙

### 기본 구조
```javascript
<type>(<scope>): <subject>
```

- type (필수): 커밋의 유형을 설명합니다.
  - feat: 새로운 기능 추가 
  - fix: 버그 수정 
  - docs: 문서 변경 
  - style: 코드 스타일 변경 (코드 수정 없음)
  - refactor: 코드 리팩토링 
  - perf: 성능 개선 
  - test: 테스트 추가 또는 수정 (버그나 기능 추가 없음)
  - chore: 빌드 프로세스 또는 보조 도구 및 라이브러리 변경 (버그나 기능 추가 없음)
- scope (선택): 커밋의 영향 범위를 나타냅니다. 예를 들어, 특정 컴포넌트 또는 파일명 등이 될 수 있습니다.
- subject (필수): 커밋의 간략한 설명입니다.

## Layout Style
- pc
  - max: px
  - min: px

## Project Setup_

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 라이센스
- MIT License
