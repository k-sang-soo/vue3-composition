# vue3-composition

Vue3 Composition API Sample File


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
- composable: Vue 3의 Composition API를 활용한 재사용 가능한 함수.
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
  -  Vite

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
