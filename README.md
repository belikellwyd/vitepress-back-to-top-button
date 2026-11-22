# vitepress-back-to-top-button

A lightweight Back-to-Top button Vue 3 component for VitePress. Features smooth scroll, progress ring indicating scroll percentage, dark/light theme support.

![npm](https://img.shields.io/npm/v/@belikellwyd/vitepress-back-to-top-button) ![npm](https://img.shields.io/npm/dw/@belikellwyd/vitepress-back-to-top-button) ![license](https://img.shields.io/npm/l/@belikellwyd/vitepress-back-to-top-button)

> [!IMPORTANT]
>
> **Package migration**
>
> This package has moved from `@miletorix/vitepress-back-to-top-button` to `@belikellwyd/vitepress-back-to-top-button`.
>
> Please update your dependencies accordingly.

## Live Demo and more information

✨ See it in action:  
👉 [https://belikellwyd.github.io/vitepress-back-to-top-button/](https://belikellwyd.github.io/vitepress-back-to-top-button/)

📦 NPM Package:  
👉 [https://www.npmjs.com/package/@belikellwyd/vitepress-back-to-top-button](https://www.npmjs.com/package/@belikellwyd/vitepress-back-to-top-button)

## Installation

```sh
npm i @belikellwyd/vitepress-back-to-top-button
```

## Usage

### Configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTopButton from '@belikellwyd/vitepress-back-to-top-button' //[!code ++]
import '@belikellwyd/vitepress-back-to-top-button/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app) //[!code ++]
  }
}
```

### Advanced configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTopButton from '@belikellwyd/vitepress-back-to-top-button' //[!code ++]
import '@belikellwyd/vitepress-back-to-top-button/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app, { // [!code ++]
      progressColor: 'string', // default is #42b983 [!code ++]
      arrowSvg: `string` // only svg code [!code ++]
    })
  }
}
```

## Preview

### Preview - Desktop

![demo-1](./assets/demo.gif)
