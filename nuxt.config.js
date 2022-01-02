export default {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    NODE_ENV: process.env.NODE_ENV
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hgbao',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['ant-design-vue/dist/antd.css'],
  css: ['~/assets/css/reset.css', '~/assets/css/common.less'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/axios', '@/plugins/filter'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // 开启代理 (如果需要判断线上线下环境，可以通过 process.env.NODE_ENV !== 'production' 来判断)
    proxy: true,
    // 给请求 url 加个前缀 /api，如果这项不配置，则需要手动添加到请求链接前面
    // 如果是多个代理的时候，则不需要配置，走手动添加代理前缀
    prefix: '/api',
    // 跨域请求时是否需要使用凭证
    credentials: true
  },
  proxy: {
    '/api': {
      // 目标接口域
      target: process.env.BASE_URL, // package.json 中根据正式/测试环境配置的域名
      // 全局配置是否跨域
      changeOrigin: true,
      pathRewrite: {
        // 单个配置是否跨域
        // changeOrigin: true
        // 把 '/api' 替换成 '/'，具体需要替换为 '' 还是 '/' 看自己习惯
        '^/api': '/'
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // 添加插件名称作为键，参数作为值
      // 使用npm或yarn安装它们
      plugins: {
        // "postcss-px-to-viewport": {
        //   unitToConvert: "px", // 默认值`px`，需要转换的单位
        //   viewportWidth: 1200, // 视窗的宽度,对应设计稿宽度
        //   // viewportHeight: 667, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
        //   unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
        //   propList: ["*"], // 转化为vw的属性列表
        //   viewportUnit: "vw", // 指定需要转换成视窗单位
        //   fontViewportUnit: "vw", // 字体使用的视窗单位
        //   selectorBlaskList: [".ignore-"], // 指定不需要转换为视窗单位的类
        //   mediaQuery: false, // 允许在媒体查询中转换`px`
        //   minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
        //   replace: true, // 是否直接更换属性值而不添加备用属性
        //   exclude: [], // 忽略某些文件夹下的文件或特定文件
        //   landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
        //   landscapeUnit: "vw", // 横屏时使用的单位
        //   landscapeWidth: 1134 // 横屏时使用的视窗宽度
        // },
        "postcss-preset-env": {
          autoprefixer: {
            flexbox: true,
            grid: true,
            overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
          },
        }
      },
      preset: {
        // 更改postcss-preset-env 设置
        // autoprefixer: {
        //   flexbox: true,
        //   grid: true,
        //   overrideBrowserslist: ['last 3 versions', '> 1%', 'ie 8', 'ie 7'],
        // },
      }
    },
    extractCSS: true, // 提取css到单独link文件
    transpile: [/ant-design-vue/],
    // 配置 按需加载功能 需 babel-plugin-import 支持
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "ant-design-vue",
            libraryDirectory: "es",
            style: "css"
          },
          "ant-design-vue"
        ]
      ]
    },
    // 防止重复打包
    vendor: ['axios']
  },
}
