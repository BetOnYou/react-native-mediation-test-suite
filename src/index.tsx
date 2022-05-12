import { NativeModules } from 'react-native';

type MediationTestSuiteType = {
  launch(): void;
  launchForAdManager(): void;
};

const { MediationTestSuite } = NativeModules;

export default MediationTestSuite as MediationTestSuiteType;
