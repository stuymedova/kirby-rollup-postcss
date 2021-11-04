# Kirby + Rollup + PostCSS template

Kirby CMS template adapted to use with modern frontend tools.

## How it works?

JavaScript files located in `src/js` directory and imported to `main.js`, and CSS files located in `src/css` directory and imported to `main.css` get processed and outputted to `public/assets/js/main.js` and `public/assets/css/main.css` respectively. JavaScript is processed by Rollup, CSS – by PostCSS. Refer `rollup.config.js` and `postcss.config.js`, as well as the "scripts" property of `package.json` for more information or to customize how the files get processed.

Additionally, the setup employs a "Custom folder setup" and a "Multi-environment setup". To learn more, refer the Kirby guide on [Configuration](https://getkirby.com/docs/guide/configuration).

## Overview

```shell
.
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── fonts
│   │   ├── icons
│   │   ├── images
│   │   └── js
│   │       └── main.js
│   ├── media
│   └── index.php
├── site
│   ├── blueprints
│   ├── config
│   │   │   # config.{url}.php
│   │   ├── config.kirby-rollup.test.php
│   │   └── config.php
│   ├── plugins
│   │   ├── kirby3-robots-txt
│   │   └── kirby3-xmlsitemap
│   ├── snippets
│   └── templates
├── src
│   ├── css
│   │   ├── main.css
│   │   └── reset.css
│   └── js
│       └── main.js
├── storage
│   ├── accounts
│   ├── cache
│   └── sessions
├── .eslintrc.js
├── .prettierrc.js
├── babel.config.js
├── package.json
├── postcss.config.js
└── rollup.config.js
```

## Prerequisites

- [PHP](https://www.php.net) and [Composer](https://getcomposer.org)  
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

## Setup

Run in terminal:
```shell
composer install
valet link # for Laravel Valet users, otherwise an alternative

npm install
npm run watch # or npm run build
```
