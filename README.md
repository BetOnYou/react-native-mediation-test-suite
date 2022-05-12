# react-native-mediation-test-suite

<a href="https://www.npmjs.com/package/react-native-mediation-test-suite"><img src="https://img.shields.io/npm/v/react-native-mediation-test-suite" alt="NPM downloads"></a>

React Native implemention of Google Mobile Ads Mediation Test Suite

## Installation

```sh
npm install react-native-mediation-test-suite
cd ios
pod install
```

## Usage

```js
import MediationTestSuite from "react-native-mediation-test-suite";

// ...
MediationTestSuite.launch();
```

See example project in https://github.com/BetOnYou/react-native-mediation-test-suite/blob/master/example/src/App.tsx

### Ad Manager

You can launch mediation test suite for Ad Manager as well.

```js
import MediationTestSuite from "react-native-mediation-test-suite";

// ...
MediationTestSuite.launchForAdManager();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
