# bearing &middot; [![NPM](https://img.shields.io/npm/l/bearing)](https://github.com/andrewbrodko/bearing/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/bearing)](https://www.npmjs.com/package/bearing) [![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/rosingrind/bearing/main.yml?branch=main)](https://github.com/rosingrind/bearing/actions/workflows/main.yml?query=branch:main) [![npm bundle size](https://img.shields.io/bundlephobia/min/bearing)](https://www.npmjs.com/package/bearing)

A lightweight carousel component for React, which is:

- **Pretty:** It's minimalistic yet good enough for use. You can always extend it as you wish
- **Simple:** It's not heavy, working fine and tested with Mocha

## Installation

You can add `bearing` from [npm](https://www.npmjs.com/package/bearing) with

```npm
npm install bearing
```

or

```yarn
yarn add bearing
```

## Documentation

The package contains:

1. `bearing` - main component used in app
2. `bearing/easings` - optional library of named animation easing functions

### Basics

Here is the basic usage example of carousel component:

```tsx
import Bearing from "bearing";
import { easeInOutSine } from 'bearing/easing';

const props = {
  slides: [
    'http://example.com/image0.png',
    ...
  ],
  size: {
    width: 1000,
    height: 500
  },
  animation: {
    timing: easeInOutSine,
    speed: 500,
    interval: 2000
  }
};

export default function App() {
  return <Bearing {...props} />;
};
```

Props usage pattern:

- `size`
  - `width` - sets width of slide (_not_ the width of carousel frame)
  - `height` - same here
- `animation`
  - `timing` - easing function bound to animation cycle time
  - `speed` - animation speed scaling
  - `interval` - optional parameter, omit if manual cycling preferred

### Easing

Instead of `bearing/easing` functions, you can pass custom animation easing with `timing` prop:

```tsx
const props = {
  animation: {
    timing: (x: number) => x,
  },
};
```

### Examples

You can use [codesandbox](https://codesandbox.io/s/cool-sea-zmbhw7) or
[bearing-home](https://github.com/rosingrind/bearing-home) repo as a reference point for your app

## Contributing

### Issues

In case you encounter bugs or would like to propose a feature, feel free to raise an issue or open a
pull request. Consider next rules as you do so:

- Sign commits with valid personal key, you can read more about it in
  [GitHub Docs](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)
- When raising issue about bug, please attach a link to your codesandbox sample
