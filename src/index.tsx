import { NativeModules } from 'react-native';

type MediationTestSuiteType = {
  multiply(a: number, b: number): Promise<number>;
};

const { MediationTestSuite } = NativeModules;

export default MediationTestSuite as MediationTestSuiteType;
