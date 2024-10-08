// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  WEB_API: 'http://'+window.location.hostname+':8000/web',
  UPLOAD_API: 'http://'+window.location.hostname+':3015',
  MOBILE_API: '/api/mobile',
  SSO_API: 'http://'+window.location.hostname+':8003',
  production: false,
  REC_API: 'http://localhost:8016/get/standardization',
  REC_API_NEW: 'http://localhost:8016/get/cereconcilation'
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
