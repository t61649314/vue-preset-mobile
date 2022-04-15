module.exports = (api, options) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      "vant": "^3.4.7",
    },
    devDependencies: {
      "babel-plugin-import": "^1.13.5",
      "svg-sprite-loader": "^6.0.11"
    },
  })
  if (options.adaptationScheme === 'rem') {
    api.extendPackage({
      devDependencies: {
        "postcss-pxtorem": "^6.0.0",
      },
    })
  }
  if (options.adaptationScheme === 'vw') {
    api.extendPackage({
      devDependencies: {
        "postcss-px-to-viewport": "^1.1.1",
      },
    })
  }

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template', options);

  api.render(files => {
    Object.keys(files)
      .filter(path =>
        path.endsWith('AboutView.vue')
        || (options.adaptationScheme !== 'rem' && path.endsWith('rem.js'))
        || (!options.bestPractices.includes('1') && path.endsWith('Demo1View.vue'))
        || (!options.bestPractices.includes('2') && (path.endsWith('Demo2View.vue') || path.endsWith('mixins/hairline.less')))
        || (!options.bestPractices.includes('3') && (path.endsWith('Demo3View.vue') || path.endsWith('mixins/small-font.less')))
        || (!options.bestPractices.includes('4') && (path.endsWith('Demo4View.vue') || path.endsWith('components/FixedBottom.vue'))))
      .forEach(path => delete files[path]);
  });
}
