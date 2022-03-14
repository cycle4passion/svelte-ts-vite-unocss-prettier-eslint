# New Project Svelte-TS-Vite-UnoCSS w/Prettier and ESint

## [Vite Create App](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
```javascript
pnpm create vite
```

Projectname > Svelte > Svelte-ts

```javascript
cd Projectname
pnpm install
```

## Install [Svelte Typescript Plugin](https://www.npmjs.com/package/typescript-svelte-plugin)

```javascript
pnpm i typescript-svelte-plugin
```

Changes to Svelte files are only recognized after they are saved to disk.

You don't need to add to tsconfig.json as long as using [Svelte for VSCode extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Git Init

```javascript
git init
```

### Add .gitignore, prettierrc, and eslintrc.cjs

```javascript
// .gitignore
echo '# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# dotenv environment variables file
.env
.env.test' > .gitignore
echo '{
  "useSpaces": true,
  "tabSize": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "semi": true,
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "avoid",
  "svelteStrictMode": false,
  "svelteSortOrder": "options-scripts-markup-styles",
  "svelteBracketNewLine": false,
  "svelteAllowShorthand": false,
  "svelteIndentScriptAndStyle": true
}' > .prettierrc
echo 'module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	plugins: ["svelte3", "@typescript-eslint"],
	ignorePatterns: ["*.cjs"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	settings: {
		"svelte3/typescript": () => require("typescript")
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};' > .eslintrc.cjs
```

## Install [Prettier](https://prettier.io/docs/en/install.html) Locally

```javascript
pnpm install --save-dev --save-exact prettier
```

### Install [Prettier for Svelte Components](https://github.com/sveltejs/prettier-plugin-svelte) ???? NOT DONE

```javascript
npm i --save-dev prettier-plugin-svelte prettier
```


## Add [ESLint](https://eslint.org/docs/user-guide/getting-started) Locally

```javascript
pnpm install eslint --save-dev
```


## [Install UnoCSS](https://github.com/unocss/unocss#installation) and [Uno Resets](https://github.com/unocss/unocss#style-resetting)

```javascript
pnpm i -D unocss
pnpm i @unocss/reset
```

### UnoCSS Add [Preset Uno](https://github.com/unocss/unocss#presets), [Preset-Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) for MDI

```javascript
pnpm i -D @unocss/preset-uno 
pnpm i -D @unocss/preset-icons @iconify-json/mdi
```

### UnoCSS: Update vite.config.ts and main.ts including fix TS2306 Error

```javascript
echo 'import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Unocss from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Unocss({
      presets: [
        presetUno({
          /* options */
        }),
        presetIcons({
          /* options */
        }),
      ],
    }),
  ],
});' > vite.config.ts
echo 'import "uno.css";
// choose one of the following
//import "@unocss/reset/normalize.css";
//import "@unocss/reset/eric-meyer.css";
import "@unocss/reset/tailwind.css";

// @ts-ignore - Added SJR preventing Error TS2306
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;' > ./src/main.ts
```

## Add [Output Directory](https://indepth.dev/posts/1164/configuring-typescript-compiler#output-location) to tsconfig.json

prevent *.js trying to overwrite themselves

```javascript
echo '{
  "extends": "@tsconfig/svelte/tsconfig.json",
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "types": ["vite/client", "svelte"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.svelte", "src/main.js"],
  "outDir": "dist" /* SJR prevent js overwriting themselves */
}' > tsconfig.json
```
