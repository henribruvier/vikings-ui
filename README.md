# vikings-ui

Components library for react and tailwind.

<br />

# Quick Start

###### You can download and install vikings-ui as a dependency on your project.

### Using NPM

```bash
npm i vikings-ui
```

<br />

### Using Yarn

```bash
yarn add vikings-ui
```

<br />

### Using PNPM

```bash
pnpm i vikings-ui
```

<br />

## Example

First you will need to add the config in your `tailwind.config.js`

```js
const withSiber = require("vikings-ui/dist/utils/with-siber.js");

const config = {
	/* your custom tailwind config */
};

module.exports = withSiber(config);
```

Now you're good to go and use vikings-ui in your project.

```jsx
import { Button } from "vikings-ui";

export default function Example() {
	return <Button>Button</Button>;
}
```
