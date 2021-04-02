#import "MediationTestSuite.h"
#import <GoogleMobileAdsMediationTestSuite/GoogleMobileAdsMediationTestSuite.h>

@implementation MediationTestSuite

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(launch)
{
  UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
  [GoogleMobileAdsMediationTestSuite presentOnViewController:rootViewController delegate:nil];
}

@end
