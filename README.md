# bearing &middot; [![NPM](https://img.shields.io/npm/l/bearing)](https://github.com/andrewbrodko/bearing/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/bearing)](https://www.npmjs.com/package/bearing) [![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/rosingrind/bearing/main.yml?branch=main)](https://github.com/rosingrind/bearing/actions/workflows/main.yml?query=branch:main) [![npm bundle size](https://img.shields.io/bundlephobia/min/bearing)](https://www.npmjs.com/package/bearing)

Bearing is a lightweight TypeScript carousel component for React.

- **Laconic:** The component is built with a feel of minimalism in every step: from minimizing
  component props to taking care of styling eye-candies. There are also planned options of
  customizing many style-related things by yourself.
- **Lightweight:** There are no leftover or unnecessary dependencies. You can fell confident of
  unpacked library size.
- **TypeScript:** This means that not only is there a stable code base, but the library can also be
  used in both JavaScript and TypeScript projects out of package registry. No needs in additional
  type definitions search.

## Installation

You can use Bearing as a `bearing` package on [npm](https://www.npmjs.com/package/bearing). Also
there are online playground demonstrations planned.

## Documentation

The documentation wiki is currently in development stage. It will be open for contributing so stay
in touch. For now check out
[examples](https://github.com/andrewbrodko/bearing/blob/main/README.md#examples).

## Examples

We have several examples in the
[examples section](https://github.com/andrewbrodko/bearing/wiki/Examples) of wiki.

## Contributing

The main purpose of this repository is to evolve Bearing, share experiences and master many skills.
This repo started as my next level pet project. Read below to learn how you can take part in
improving Bearing.

To help you get familiar with declared contribution process, there are some common rules of doing
so.

### Rollup

This repo uses [rollup](https://www.npmjs.com/package/rollup) as a package bundler. To perform a
local development cycle you need to complete a series of tasks:

1. Clone repo and install package dependencies
2. Create React app for package testing
   - Both TS and JS apps are supported
   - Perform `npm i ..\bearing` using cloned repo path
3. Perform linking in your app for package testing
   - run `npm link` in `app\node_modules\react\`
   - run `npm link` in `app\node_modules\react-dom\`
4. Perform linking in your cloned repo
   - run `npm link react` in `bearing\`
   - run `npm link react-dom` in `bearing\`
5. Build cloned repo
   - run `npm run build` to perform a single build
   - run `npm run start` for continuous building on code changes
6. Start your React app

### Prettier

Use [Prettier](https://www.npmjs.com/package/prettier) with ide plugin as your main code style
checker.

### Issues

If you have encountered any bugs or want to offer a feature, feel free to send a pull request or
raise an issue. There are two common rules of doing so:

- Provide as much related info as you can when raising any issue
- If you have encountered a bug, please post a link to codesandbox with your environment to
  re-create the issue
