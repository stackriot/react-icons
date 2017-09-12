# Contributing

_Warning: Don't touch the `/fa`, `/stackriot`, or `/lib` directories as they are created automatically_

- Add SVGs to `icons/stackriot` like `icons/stackriot/svg-kebab-case-name.svg`.
- Clean up the `*.svg` files to remove comments and meta data. Would be good to automate this in the future.
- Run `yarn build`.
- Use yarn link to add the changed icons to the `stackriot-ui` `Icon` component `types` array; you can import your new icons with the pascal cased version of the SVG, prefixed with `Stackriot*` (for example, `arrow-right.svg` becomes `StackriotArrowRight`); ensure they all render correctly in the stackriot-ui **app**.
- Check the console for errors; you may need to remove comments and update attributes to work with react (like converting `stroke-width` to be `strokeWidth` etc.). Would be good to automate this in the future.
- Once everything looks good to publish, push your updates to GitHub.
- Run `yarn bump`.
- Bump the `stackriot-icons#{version}` in the `stackriot-ui` package.json, then `yarn` to get the updates you pushed from this repo.
