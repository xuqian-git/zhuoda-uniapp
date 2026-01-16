const { WeappTailwindcssDisabled } = require('weapp-tailwindcss/utils');

/** @type {import('postcss').PostcssConfig} */
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // 只有在非 H5 平台，才需要 postcss-rem-to-responsive-pixel
    // @ts-ignore
    !process.env.UNI_PLATFORM || process.env.UNI_PLATFORM !== 'h5'
      ? require('postcss-rem-to-responsive-pixel')({
          rootValue: 32,
          propList: ['*'],
          transformUnit: 'rpx'
        })
      : undefined,
    require('weapp-tailwindcss/postcss')({
      // uni-app h5平台，uniapp-cli-vite 本身会对 h5 的 class 进行转义，所以开启 disabled H5 平台
      disabled: WeappTailwindcssDisabled,
    }),
  ]
}
