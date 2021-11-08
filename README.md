# A Simple Music App

I made this simple music app about the band Amon Amarth in order to learn how to use React.

The website is deployed [here](https://calum-music-react-app.netlify.app/) on netlify.

## Technologies

- [Webpack](https://webpack.js.org/) is used to bundle/build the site along with [Babel](https://babeljs.io/).
- The site is composed of [React](https://reactjs.org/) components and uses [React Router](https://reactrouter.com/) for routing.
- [Storybook](https://storybook.js.org/) is also used to help build/document components.
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) are used for the testing suite.

## Installation & Usage

### Installation

- Clone or download this repo
- cd into this folder and run `npm install` to install dependencies

### Usage

- `npm run dev` starts the dev environment.
  - Builds a dev version of the site and hosts it on `localhost:8080` with live reload.
- `npm run build` makes a production build.
  - Uses webpack to build, outputting to `/build`.
- `npm test` runs the testing suite.
  - run `npm run coverage` to view test coverage.
- `npm run storybook` starts Storybook in development mode.
  - Opens and hosts Storybook on localhost:6006.
- `npm run build-storybook` builds the storybook.
  - Outputs to `/storybook-static`.


## Planned features / to-do

See the [to-do](todo.md) for a detailed list of what i'd like to update/implement if I find time.

## Known bugs

- [] Album images are incorrectly sized / pop out of the cards on some screens (I noticed this on my phone, for example)