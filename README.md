# chainCMS
chainCMS is a content management system based on the steem blockchain. Our goal is to provide creators with a powerful, scalable, and cost effective tool for publishing content that can be installed on their own servers for free.

We are different from other CMS's because content and users are stored directly on the blockchain removing the need to maintain backend databases and making chainCMS extremely light weight and secure. The steem blockchain also contains a built in tipping system which can supplement or replace advertising revenue.

If you are a developer interested in joining the project, please email contact@chaincms.com.

## Setup

First install [yarn](https://yarnpkg.com/en/docs/install) - npm works fine too - (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
git clone git@github.com:chainCMS/chaincms.git && cd chaincms
yarn install
```

## Development Guide

This project is being developed with [PolymerJS](https://www.polymer-project.org) and [Redux](http://redux.js.org). Please be sure to visit their respective pages to learn how they work.
Furthermore, you can watch the following video as a primer to how they work together:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=PahsgJn0sgU
" target="_blank"><img src="http://img.youtube.com/vi/PahsgJn0sgU/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

### Development Commands

To run Tests:
```bash
npm test
```

To serve locally:
```bash
npm start
```

To build project for deployment:
```bash
npm build
```

To install a new web component:
```bash
npm run polymer-install -- NAME_OF_WEB_COMPONENT
```

To bootstrap a new element:
```bash
npm run new-el -- ELEMENT_NAME
```