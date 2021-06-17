# Kirby + Rollup template

Kirby CMS template adapted to use with modern Frontend tools.

## Overview

```
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
│   ├── config
│   │   ├── config.kirby-rollup.test.php
│   │   └── config.php
│   └── plugins
│       ├── kirby3-robots-txt
│       └── kirby3-xmlsitemap
├── src
│   ├── css
│   │   └── main.css
│   └── js
│       └── main.js
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

npm install
npm run watch/build

valet link # for valet users, otherwise an alternative
```
