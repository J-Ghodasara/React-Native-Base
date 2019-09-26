package com.befit;

import com.facebook.react.ReactActivity;
 import com.facebook.react.ReactActivityDelegate;
 import android.content.Intent;
import android.os.Bundle;
 import com.facebook.react.ReactRootView;
import com.befit.R;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        // MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
    }

    @Override
    protected String getMainComponentName() {
        return "BeFit";
    }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
           return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
                     return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
    };
          }
}