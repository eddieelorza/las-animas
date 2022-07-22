import React from 'react';
import * as msal from 'msal'

const state = {
    stopLoopingRedirect: false,
    config: {
      scopes: [],
      cacheLocation: null,
    },
    launchApp: null,
    accessToken: null,
    msalObj: null,
  }

const LOCAL_STORAGE = 'localStorage'
const SESSION_STORAGE = 'sessionStorage'
const AUTHORIZATION_KEY = 'Authorization'
  
var isIE = function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ") > -1;
    var msie11 = ua.indexOf("Trident/") > -1;
    return msie || msie11;
  };

  var B2C_SCOPES = {
    API_ACCESS: {
      scopes: ['https://b2cunicorn.onmicrosoft.com/api/user_impersonation']
    }
  };
  
  var msalAppConfig = {
    auth: {
      clientId: '68598176-a1c9-476f-a856-cbc218913b4b',
      authority:'https://animas.b2clogin.com/animas.onmicrosoft.com/B2C_1_Singup_react',
      redirectUri: 'http://localhost:3000',
      validateAuthority: false,
      postLogoutRedirectUri: 'window.location.origin'
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: isIE()
    }
  };

  function acquireToken (successCallback) {
    const account = msalApp.getAccount()
  
    if (!account) {
      msalApp.loginRedirect(B2C_SCOPES.API_ACCESS)
    } else {
      msalApp.acquireTokenSilent(B2C_SCOPES.API_ACCESS).then(accessToken => {  
        if (msalAppConfig.cache.cacheLocation === LOCAL_STORAGE) {
            window.localStorage.setItem(AUTHORIZATION_KEY, 'Bearer ' + accessToken)
          } else {
            window.sessionStorage.setItem(AUTHORIZATION_KEY, 'Bearer ' + accessToken)
          }
          
        state.accessToken = accessToken
        if (state.launchApp) {
          state.launchApp()
        }
        if (successCallback) {
          successCallback()
        }
      }, error => {
        if (error) {
          msalApp.acquireTokenRedirect(B2C_SCOPES.API_ACCESS)
        }
      })
    }
  }

  let msalApp;

  var authentication = {
    initialize: () => {
        console.log("aaa");
        msalApp = new msal.UserAgentApplication(msalAppConfig)
      },
    run: (launchApp) => {
        state.launchApp = launchApp
        msalApp.handleRedirectCallback(error => {
          if (error) {
            const errorMessage = error.errorMessage ? error.errorMessage : "Unable to acquire access token."
            console.log(errorMessage)
          }
        });
      acquireToken();
    },
    required: (WrappedComponent, renderLoading) => {
        return class extends React.Component {
          constructor (props) {
            super(props)
            this.state = {
              signedIn: false,
              error: null
            }
          }
    
          render () {
            if (this.state.signedIn) {
              return (<WrappedComponent {...this.props} />)
            }
            return typeof renderLoading === 'function' ? renderLoading() : null
          }
        }
      },

    signOut: function signOut() {
      return msalApp.logout();
    },
    getAccessToken: function getAccessToken() {
      return state.accessToken;
    }
  };

  export default authentication;