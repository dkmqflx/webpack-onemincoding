- 웹팩을 알려면 먼저 번들링(Bundling) 이라는 개념을 알아야 한다.
- 번들링은 자바스크립트 파일들 그리고 이미지, css 이런 것들을 하나 하나의 모듈로 보고 이 모듈들을 배포용 으로 병합하고 포장하는 작업을 의미한다.
- 이런 번들링 작업을 수행하는 툴들을 번들러(Bundler) 라고 하는데 번들러 들 중에 웹팩이 현재 시점에서 가장 인기가 많다.

- 웹팩을 이용해서 css 도 최적화하고 뭐 어떤 아이콘 같은이미지들은 basd64 포맷으로 변환을 해 준다던지 요런식으로 처리를 할 수가 있다
- 각각 처리하는 플러그인 들이 다 따로 있어서 각각 다 설치를 해줘야 된다.
- 하지만 이런 플러그인들이 버전업이 되면서 기존에 되던 작업이 안되거나 node.js 버전에 영향을 받기도 하기 때문에 오류가 발생할 가능성 또한 있다.

- 웹팩을 이용해서 css 도 최적화하고 뭐 어떤 아이콘 같은이미지들은 basd64 포맷으로 변환을 해 준다던지 요런식으로 처리를 할 수가 있다
- 각각 처리하는 플러그인 들이 다 따로 있어서 각각 다 설치를 해줘야 된다.
- 하지만 이런 플러그인들이 버전업이 되면서 기존에 되던 작업이 안되거나 node.js 버전에 영향을 받기도 하기 때문에 오류가 발생할 가능성 또한 있다.

---

1. 패키지 설치

   - 터미널에 아래 점선 사이의 내용을 붙여 넣고 엔터를 누르세요.
   - 웹팩은 개발환경에서 사용하니까 -D 옵션 사용해서 설치해준다

   ```bash
   npm i -D @babel/cli @babel/core @babel/preset-env babel-loader clean-webpack-plugin copy-webpack-plugin core-js cross-env html-webpack-plugin source-map-loader terser-webpack-plugin webpack webpack-cli webpack-dev-server
   ```

2. 개발용 서버 구동

- npm start

3. 빌드(배포용 파일 생성)

- npm run build
- 명령어 실행하면 dist 폴더 안에 최종 배포용 파일들이 생성된다.
- 자바스크립트 모듈만 빌드를 해주도록 설정했기 때문에 css, image 파일들은 우리가 만든 그대로 dist 폴더 안에 복제 되어 있다.

---

## Reference

- [1분코딩 - 최소 설정으로 웹팩 써보기
  ](https://www.youtube.com/watch?v=pzHMT9Jxce0&t=24s)
