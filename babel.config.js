module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '58',
          ie: '11',
        },
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
        },
      },
    ],
  ],
};

// 바벨은 최신 문법으로 개발한 자바스크립트를 예전 브라우저에서도 잘 돌아갈 수 있는 코드로 변환해준다
