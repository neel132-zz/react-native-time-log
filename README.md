# react-native-time-log [![NPM version](https://img.shields.io/npm/v/update-copyright.svg?style=flat)](https://www.npmjs.com/package/update-copyright) [![NPM monthly downloads](https://img.shields.io/npm/dm/update-copyright.svg?style=flat)](https://npmjs.org/package/update-copyright) [![NPM total downloads](https://img.shields.io/npm/dt/update-copyright.svg?style=flat)](https://npmjs.org/package/update-copyright) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/update-copyright.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/update-copyright)
Pure Stateless React Native Time Log Component

## Install

 ```bash
npm i -S react-native-time-log
```
## Screenshot
![Alt text](/screenshot/screenshot.png?raw=true "Screenshot")

##Example

```bash
import React from 'react';
import TimeLog from 'react-native-time-log'

const data = [
  {
    time: 'Jan 01',
    title: 'Entered User',
    description: 'Neel',
  },
  {
    time: 'Jan 02',
    title: 'Visited Screens',
    description: ['Home', 'Settings', 'Profile'], // Can pass an array
  },
  {
    time: 'Jan 03',
    title: 'Shared with friends',
    image: require('./share.png'), // For Remote Image use: { uri: 'YOUR_IMAGE_LINK' }
  },
]

const flatListProps = {
  //FlatList Props
}

const customStyleProps = {
  //Custom Style to replace default Style
}

export default class App extends React.Component {
  render() {
    return (
        <TimeLog data={data} flatList={flatListProps} style={customStyleProps}/>
    );
  }
}

```

## Usage

```bash
| Props           | Required        | Type            |
| --------------- | --------------- | --------------- |
| data            | Yes             | Array of Object |
| style           | No              | Object          |
| flatList        | No              | FlatList props  |
```

## License
 Copyright © 2019, [Neel Gala](https://github.com/neel132).
 [MIT](http://vjpr.mit-license.org)
