# bearing &middot; [![NPM](https://img.shields.io/npm/l/bearing?color=blue)](https://github.com/andrewbrodko/bearing/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/bearing)](https://www.npmjs.com/package/bearing) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/andrewbrodko/bearing/master?label=master)](https://github.com/andrewbrodko/bearing/tree/master) [![npm bundle size](https://img.shields.io/bundlephobia/min/bearing?label=unpacked%20size)](https://www.npmjs.com/package/bearing)

Bearing is a lightweight TypeScript carousel component for React.

* **Laconic:** The component is built with a feel of minimalism in every step: from minimizing component props to taking care of styling eye-candies. There are also planned options of customizing many style-related things by yourself.
* **Lightweight:** There are no leftover or unneccessary dependencies. You can fell confident of unpacked library size.
* **TypeScript:** This means that not only is there a stable code base, but the library can also be used in both JavaScript and TypeScript projects out of package registry. No needs in additional type definitions search.

## Installation

You can use Bearing as a `bearing` package on [npm](https://www.npmjs.com/package/bearing). Also there are online playground demonstrations planned.

## Documentation

The documentation wiki is currently in development stage. It will be open for contributing so stay in touch. For now check out [examples](https://github.com/andrewbrodko/bearing/blob/master/README.md#examples).

## Examples

We have several examples in the upcoming wiki. Here is the first one to get you started:

```jsx
	import React from "react";
	import Carousel from "bearing";
	
	const props = {
		// array of carousel image links
		slides: [
			'http://example.com/image0.png',
			'http://example.com/image1.png',
			'http://example.com/image2.png',
		],
		// progress timing function
		timing: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
		// slideshow interval (optional)
		interval: 5000
	};
	
	const App = () => {
		// your code here
		
		return <Carousel {...props} />;
	};
	
	export default App;
```

This example will render carousel element with slides animated by easing function by declared interval on the page.

## Contributing

The main purpose of this repository is to evolve Bearing, share experiences and master many skills. This repo started as my next level pet project. Read below to learn how you can take part in improving Bearing.

To help you get familiar with declared contribution process, there are some common rules of doing so.

### Prettier

Use [Prettier](https://www.npmjs.com/package/prettier) with ide plugin as your main code style checker.

### Issues

If you have encountered any bugs or want to offer a feature, feel free to send a pull request or raise an issue. There are two common rules of doing so

- Provide as much related info as you can when raising any issue
- If you have encountered a bug, please post a link to codesandbox with your environment to re-create the issue
