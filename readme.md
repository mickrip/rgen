# React front-end generators

A node based code generation tool using [plop](https://plopjs.com/) underneath.

## Installation

- Clone this repo
- `npm install`
- `npm link`

## Usage

- cd into the directory you want to add files. ie `./src/components`
- type `rgen`

## Making your own Generators

All generators live in the `generators` dir. They are automagically acknowledged when you type `rgen`.

A generator file is an object which looks like this:

```
{


}
```
