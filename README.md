# Twemoji Loader (replaces emojis to twemojis)

A **webpack loader** that replaces standard Unicode emojis with Twemoji on `img` elements.

## Basic Usage

Add the loader and plugin to your webpack config:

```js
const webpackConfig = {
  loaders: [{
    test: /\.jsx$/,
    loader: 'twemoji-loader'
  }],
}
```

## Options

The loader accepts all [Twemoji options](https://github.com/twitter/twemoji#object-as-parameter)

Example:
```js
const webpackConfig = {
  loaders: [{
    test: /\.jsx$/,
    loader: 'twemoji-loader',
    options: {
      folder: 'svg',
      ext: '.svg'
    }
  }],
}
```