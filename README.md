# XkcdComicsApp
Xkcd Comics App using React Native and Redux

## How to run
* Clone this project.
* At root directory run `npm install` to install the dependencies.
* If you get any errors run `npm install --peer-deps` to install dependencies
##### Android
* Run `react-native run-android` to run on Android devices
##### iOS
* Run `cd ios/ && pod install`.
* Then run `react-native run-ios` to run the project on iOS devices or run through Xcode.

## Features
* List of Comics on Home Screen
* LazyLoad of Comics on reaching end of ScrollView
* Detailed View Page for each Comic
* History of the Comics viewed using Redux
* Navigation between each screen using Stack Navigation
* Static typing of components and objects using TypeScript
* Components built using React Native Paper