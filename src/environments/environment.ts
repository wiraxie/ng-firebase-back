// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  
  //dari website firebase
  firebaseConfiguration : 
  {
    apiKey: "AIzaSyBgRNSve-U4Q9XTodQgLfIsyfNZABi9xxM",
    authDomain: "ng-product.firebaseapp.com",
    databaseURL: "https://ng-product.firebaseio.com",
    projectId: "ng-product",
    storageBucket: "ng-product.appspot.com",
    messagingSenderId: "817999455690"
  }
};
