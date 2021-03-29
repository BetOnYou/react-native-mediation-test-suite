import { NativeModules } from 'react-native';

type MediationTestSuiteType = {
  launch(): void;
};

const { MediationTestSuite } = NativeModules;

export default MediationTestSuite as MediationTestSuiteType;
