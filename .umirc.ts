import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'lib03',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/lib03/',
  publicPath: '/lib03/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  mode: 'site',
  // more config: https://d.umijs.org/config
  theme: {
    '@hd': '0.02rem',
  },
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // rules: [{ mode: 'vw', options: [100, 750] }],
      // // 禁用高清方案
      // rules: [],
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/1.x/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
});
