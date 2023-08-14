# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Add packages

- use icons

  ```js
  npm i react-icons
  npm i @heroicons/react
  ```
  usage:
  ```js
    import { HiAcademicCap } from "react-icons/hi";
    function Demo() {
      return (
        <>
          <HiAcademicCap/>
        </>
      )
    }
  ```

- For custom "@"

  ```js
    npm i -D @types/node // path module
  ```
  Then:<br/>
   &emsp;use 'path' to config costume path for "@" in vite.config.ts<br/>

- Tailwind

   Good VS Tools:<br/>
      1. TailWind Document, cmd+crl+t
      2. Tailwind CSS IntelliSense: automatic show me available props

   - “Install Tailwind CSS with vite": [ Official Doc for install and config Tailwind ](https://tailwindcss.com/docs/guides/vite)
   按照link 里面操作【具体步骤文档内并未书写】 ( 期间需要清空 index.css, 删除 App.css, 并调整 App.jsx 的内容  )

   ```js
      npm i -D prettier prettier-plugin-tailwindcss // 可以让自己更自由的书写 tailwind，不必必须按照 tailwind 要求的顺序书写
   ```
  创建一个 prettier.config.cjs
  并更改：
  ```js
  <!-- export default {
    plugins: [require("prettier-plugin-tailwindcss")]
  }; -->
  module.exports = {
     plugins: [require("prettier-plugin-tailwindcss")]
   }
  ```
  在 tailwind.config.cjs 添加配置,具体可参考[这个链接](https://tailwindcss.com/docs/theme)

- Farmer Motion

   ```js
      npm i framer-motion
   ```

- React Router
  - npm i react-router-dom
  - ...//According to my private project, [link](https://github.com/AlanCumberbatch/How-to-use/tree/master/use_react_router)

- Three
  - npm install three

- OGL（Minimal WebGL library.）----have lots of great demos
  - npm i ogl

- lil-gui : for create control html box easier for ThreeJS
  - npm i lil-gui

- AntDesign
  - npm install antd @ant-design/icons --save
  - About using custom svg as Ant icon ---- 还没生效呢
    - npm install @ant-design/icons-svg --save
    - transfer command: npx @ant-design/icons-svg@2 create-from-iconfont --script-url=<icon-font-js-url> custom-icon.svg > CustomIcon.js


# Three Demos

- Official Demo sort:

   - 基础几何体和材质：这类示例展示了如何创建和渲染基本的几何体（例如立方体、球体、平面）以及不同类型的材质（例如颜色、纹理）。
   - 光照和阴影：这类示例演示了如何添加光照效果以及生成阴影，从而使场景更加逼真。
   - 相机和视角：这些示例涵盖了如何调整相机的位置、方向和视角，以及如何实现相机的运动和缩放。
   - 动画和变换：这类示例展示了如何创建动画效果，包括物体的旋转、平移、缩放等变换。
   - 粒子系统：这些示例演示了如何创建粒子效果，例如雨滴、雪花、火焰等。
   - 交互和控制：这类示例展示了如何在 Three.js 场景中添加交互元素，例如点击、拖动、控制物体等。
   - 加载外部模型和纹理：这些示例演示了如何从外部文件加载 3D 模型和纹理，以及如何应用它们到场景中。
   - 后期处理和特效：这类示例涵盖了如何应用后期处理和特效，例如模糊、色彩调整、阴影等。
   - 虚拟现实和增强现实：这些示例展示了如何在 Three.js 中创建虚拟现实（VR）和增强现实（AR）体验。
   - 高级示例和项目：这些示例涵盖了一些更复杂的场景和项目，例如模拟自然现象、建筑可视化、游戏等。