package com.reactnativemediationtestsuite

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.google.android.ads.mediationtestsuite.MediationTestSuite

class MediationTestSuiteModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MediationTestSuite"
    }

    @ReactMethod
    fun launch() {
        MediationTestSuite.launch(getCurrentActivity());
    }

    
}
