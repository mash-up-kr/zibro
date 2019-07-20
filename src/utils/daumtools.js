/* eslint-disable */
// https://github.com/kakao/web2app
// npm install --save git+https://github.com/kakao/web2app.git
(function (exports) {
  if (!Array.isArray) {
    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  function checkUserAgent(ua) {
    const browser = {};
    let match = /(dolfin)[ \/]([\w.]+)/.exec(ua)
      || /(edge)[ \/]([\w.]+)/.exec(ua)
      || /(chrome)[ \/]([\w.]+)/.exec(ua)
      || /(tizen)[ \/]([\w.]+)/.exec(ua)
      || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua)
      || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(ua)
      || /(msie) ([\w.]+)/.exec(ua)
      || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua)
      || ['', 'unknown'];
    if (match[1] === 'webkit') {
      match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua)
        || /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], 'safari', match[2]];
    } else if (match[1] === 'mozilla') {
      if (/trident/.test(ua)) {
        match[1] = 'msie';
      } else {
        match[1] = 'firefox';
      }
    } else if (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
      match[1] = 'polaris';
    }

    browser[match[1]] = true;
    browser.name = match[1];
    browser.version = setVersion(match[2]);

    return browser;
  }

  function setVersion(versionString) {
    const version = {};

    const versions = versionString ? versionString.split(/\.|-|_/) : ['0', '0', '0'];
    version.info = versions.join('.');
    version.major = versions[0] || '0';
    version.minor = versions[1] || '0';
    version.patch = versions[2] || '0';

    return version;
  }

  function checkPlatform(ua) {
    if (isPc(ua)) {
      return 'pc';
    } if (isTablet(ua)) {
      return 'tablet';
    } if (isMobile(ua)) {
      return 'mobile';
    }
    return '';
  }
  function isPc(ua) {
    if (ua.match(/linux|windows (nt|98)|macintosh|cros/) && !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) {
      return true;
    }
    return false;
  }
  function isTablet(ua) {
    if (ua.match(/ipad/) || (ua.match(/android/) && !ua.match(/mobi|mini|fennec/))) {
      return true;
    }
    return false;
  }
  function isMobile(ua) {
    if (ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
      return true;
    }
    return false;
  }

  function checkOs(ua) {
    const os = {};


    const match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua)
        || (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua) ? ['', 'polaris', '0.0.0'] : false)
        || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(ua)
        || /(android)[ \/]([\w._\-]+);/.exec(ua)
        || (/android/.test(ua) ? ['', 'android', '0.0.0'] : false)
        || (/(windows)/.test(ua) ? ['', 'windows', '0.0.0'] : false)
        || /(mac) os x ([\w._\-]+)/.exec(ua)
        || /(tizen)[ \/]([\w._\-]+);/.exec(ua)
        || (/(linux)/.test(ua) ? ['', 'linux', '0.0.0'] : false)
        || (/webos/.test(ua) ? ['', 'webos', '0.0.0'] : false)
        || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(ua)
        || /(bada)[ \/]([\w._\-]+)/.exec(ua)
        || (/bada/.test(ua) ? ['', 'bada', '0.0.0'] : false)
        || (/(rim|blackberry|bb10)/.test(ua) ? ['', 'blackberry', '0.0.0'] : false)
        || ['', 'unknown', '0.0.0'];

    if (match[1] === 'iphone' || match[1] === 'ipad' || match[1] === 'ipod') {
      match[1] = 'ios';
    } else if (match[1] === 'windows' && match[2] === '98') {
      match[2] = '0.98.0';
    }
    if (match[1] === 'cros') {
      match[1] = 'chrome';
    }
    os[match[1]] = true;
    os.name = match[1];
    os.version = setVersion(match[2]);
    return os;
  }

  const baseAppList = ['crios', 'fxios', 'daumapps'];
  function checkApp(ua, customAppList) {
    const app = {};


    let match = null;


    let checkAppList = baseAppList;

    if (Array.isArray(customAppList)) {
      checkAppList = baseAppList.concat(customAppList);
    } else if (typeof customAppList === 'string') {
      checkAppList = baseAppList.concat([customAppList]);
    }

    for (let i = 0, len = checkAppList.length; i < len; i += 1) {
      const appname = checkAppList[i];
      const regex = new RegExp(`(${appname})[ \\/]([\\w._\\-]+)`);
      match = regex.exec(ua);
      if (match) {
        break;
      }
    }

    if (!match) {
      match = ['', ''];
    }

    if (match[1]) {
      app.isApp = true;
      app.name = match[1];
      app.version = setVersion(match[2]);
    } else {
      app.isApp = false;
    }

    return app;
  }

  function getLowerUserAgent(ua) {
    let lowerUa = '';
    if (!ua) {
      if (typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgent === 'string') {
        lowerUa = window.navigator.userAgent.toLowerCase();
      } else {
        lowerUa = '';
      }
    } else {
      lowerUa = ua.toLowerCase();
    }

    return lowerUa;
  }

  const userAgent = exports.userAgent = function (ua, customAppList) {
    const lowerUa = getLowerUserAgent(ua);

    return {
      ua: lowerUa,
      browser: checkUserAgent(lowerUa),
      platform: checkPlatform(lowerUa),
      os: checkOs(lowerUa),
      app: checkApp(lowerUa, customAppList),
    };
  };

  if (typeof window === 'object' && window.navigator.userAgent) {
    window.ua_result = userAgent(window.navigator.userAgent) || null;
  }
}((function () {
  // Make userAgent a Node module, if possible.
  if (typeof exports === 'object') {
    exports.daumtools = exports;
    exports.util = exports;
    return exports;
  } if (typeof window === 'object') {
    window.daumtools = (typeof window.daumtools === 'undefined') ? {} : window.daumtools;
    window.util = (typeof window.util === 'undefined') ? window.daumtools : window.util;
    return window.daumtools;
  } if (typeof self === 'object') {
    // for use in web workers
    self.daumtools = (typeof self.daumtools === 'undefined') ? {} : self.daumtools;
    self.util = (typeof self.util === 'undefined') ? self.daumtools : self.util;
    return self;
  }
})()));


/* global exports, jshint devel: true */
(function (exports) {
  exports.web2app = (function () {
    const TIMEOUT_IOS = 2 * 1000;


    const TIMEOUT_ANDROID = 3 * 100;


    const INTERVAL = 100;


    const ua = exports.userAgent();


    const { os } = ua;


    const intentNotSupportedBrowserList = [
      'firefox',
      'opr/',
    ];

    function moveToStore(storeURL) {
      top.window.location.href = storeURL;
    }

    function web2app(context) {
      const willInvokeApp = (typeof context.willInvokeApp === 'function') ? context.willInvokeApp : function () { };


      const onAppMissing = (typeof context.onAppMissing === 'function') ? context.onAppMissing : moveToStore;


      const onUnsupportedEnvironment = (typeof context.onUnsupportedEnvironment === 'function') ? context.onUnsupportedEnvironment : function () { };

      willInvokeApp();

      if (os.android) {
        if (isIntentSupportedBrowser() && context.intentURI && !context.useUrlScheme) {
          web2appViaIntentURI(context.intentURI);
        } else if (context.storeURL) {
          web2appViaCustomUrlSchemeForAndroid(context.urlScheme, context.storeURL, onAppMissing);
        }
      } else if (os.ios && context.storeURL) {
        web2appViaCustomUrlSchemeForIOS(context.urlScheme, context.storeURL, onAppMissing, context.universalLink);
      } else {
        setTimeout(() => {
          onUnsupportedEnvironment();
        }, 100);
      }
    }

    // chrome 25 and later supports intent. https://developer.chrome.com/multidevice/android/intents
    function isIntentSupportedBrowser() {
      const supportsIntent = ua.browser.chrome && +(ua.browser.version.major) >= 25;
      const blackListRegexp = new RegExp(intentNotSupportedBrowserList.join('|'), 'i');
      return supportsIntent && !blackListRegexp.test(ua.ua);
    }

    function web2appViaCustomUrlSchemeForAndroid(urlScheme, storeURL, fallback) {
      deferFallback(TIMEOUT_ANDROID, storeURL, fallback);
      launchAppViaHiddenIframe(urlScheme);
    }

    function deferFallback(timeout, storeURL, fallback) {
      const clickedAt = new Date().getTime();
      return setTimeout(() => {
        const now = new Date().getTime();
        if (isPageVisible() && now - clickedAt < timeout + INTERVAL) {
          fallback(storeURL);
        }
      }, timeout);
    }

    function web2appViaIntentURI(launchURI) {
      if (ua.browser.chrome) {
        move();
      } else {
        setTimeout(move, 100);
      }

      function move() {
        top.window.location.href = launchURI;
      }
    }

    function web2appViaCustomUrlSchemeForIOS(urlScheme, storeURL, fallback, universalLink) {
      const tid = deferFallback(TIMEOUT_IOS, storeURL, fallback);
      if (parseInt(ua.os.version.major, 10) < 8) {
        bindPagehideEvent(tid);
      } else {
        bindVisibilityChangeEvent(tid);
      }

      // https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12
      if (isSupportUniversalLinks()) {
        if (universalLink === undefined) {
          universalLink = urlScheme;
        } else {
          clearTimeout(tid);
        }
        launchAppViaChangingLocation(universalLink);
      } else {
        launchAppViaHiddenIframe(urlScheme);
      }
    }

    function bindPagehideEvent(tid) {
      window.addEventListener('pagehide', function clear() {
        if (isPageVisible()) {
          clearTimeout(tid);
          window.removeEventListener('pagehide', clear);
        }
      });
    }

    function bindVisibilityChangeEvent(tid) {
      document.addEventListener('visibilitychange', function clear() {
        if (isPageVisible()) {
          clearTimeout(tid);
          document.removeEventListener('visibilitychange', clear);
        }
      });
    }

    function isPageVisible() {
      const attrNames = ['hidden', 'webkitHidden'];
      for (let i = 0, len = attrNames.length; i < len; i++) {
        if (typeof document[attrNames[i]] !== 'undefined') {
          return !document[attrNames[i]];
        }
      }
      return true;
    }

    function launchAppViaChangingLocation(urlScheme) {
      top.window.location.href = urlScheme;
    }

    function launchAppViaHiddenIframe(urlScheme) {
      setTimeout(() => {
        const iframe = createHiddenIframe('appLauncher');
        iframe.src = urlScheme;
      }, 100);
    }

    function createHiddenIframe(id) {
      const iframe = document.createElement('iframe');
      iframe.id = id;
      iframe.style.border = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.display = 'none';
      iframe.style.overflow = 'hidden';
      document.body.appendChild(iframe);
      return iframe;
    }

    function isSupportUniversalLinks() {
      return (parseInt(ua.os.version.major, 10) > 8 && ua.os.ios);
    }

    /**
     * app.을 실행하거나 / store 페이지에 연결하여 준다.
     * @function
     * @param context {object} urlScheme, intentURI, storeURL, appName, onAppMissing, onUnsupportedEnvironment, willInvokeApp
     * @example daumtools.web2app({ urlScheme : 'daumapps://open', intentURI : '', storeURL: 'itms-app://...', appName: '다음앱' });
     */
    return web2app;
  }());
}((function () {
  if (typeof exports === 'object') {
    exports.daumtools = exports;
    return exports;
  } if (typeof window === 'object') {
    window.daumtools = (typeof window.daumtools === 'undefined') ? {} : window.daumtools;
    return window.daumtools;
  }
})()));

(function (exports) {
  /* package version info */
  exports.daumtools = (typeof exports.daumtools === 'undefined') ? {} : exports.daumtools;
  if (typeof exports.daumtools.web2app !== 'undefined') {
    exports.daumtools.web2app.version = '1.1.0';
  }
}(window));
/* eslint-enable */
