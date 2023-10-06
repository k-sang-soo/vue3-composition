# vue3-sample

Vue3 Composition API Sample File


## 디렉터리 구조
```
src/
|-- assets/                # 이미지, 전역 스타일 등의 정적 리소스
|-- components/            # 범용 컴포넌트
|-- composable/            # 재사용 가능한 Composition 함수
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
- layouts: 전체 어플리케이션 또는 특정 부분의 레이아웃을 정의하는 컴포넌트. ex) header, sidebar, footer
- plugins: 전역에 추가할 플러그인 기능들을 모아놓은 폴더.
- router: Vue Router를 사용하여 어플리케이션의 페이지 라우팅을 정의.
- store: Pinia 사용한 전역 상태 관리 로직.
- utils: 반복되는 작업을 위한 함수나 특정 기능을 수항해는 함수들이 위치.
- views: 각 라우트별로 연결된 메인 컴포넌트나 페이지를 정의.
- App.vue: 어플리케이션의 최상위 컴포넌트. 모든 컴포넌트와 레이아웃은 이 이 컴포넌트 안에 렌더링 됨.
- main.js: Vue 인스턴스를 생성, 전역으로 처리해야 될 부분은 이곳에서 처리.

Prettier, ESLint 는 협의 후 세팅(현재는 기본 세팅 값)

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
# vue3-composition
