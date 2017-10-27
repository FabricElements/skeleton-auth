## \<skeleton-auth\>

`skeleton-auth` is a [Polymer 2](http://polymer-project.org) and [Firebase](https://firebase.google.com/) minimal Sign-in module.

## Installation

Install skeleton-auth with Bower

```shell
$ bower install --save FabricElements/skeleton-auth
```

## Usage

Import it into the `<head>` of your page

```html
<link rel="import" href="bower_components/skeleton-auth/skeleton-auth.html">
```

### Example: basic usage

Configure your Firebase app

```html
<firebase-app
  apiKey="AIzaSyCJRNdR0eodnswyi8MHCtF1YOjY235mhM8"
  authDomain="fabricelements.firebaseapp.com"
  databaseURL="https://fabricelements.firebaseio.com"
  storageBucket="fabricelements.appspot.com"
  messagingSenderId="908593247251"
></firebase-app>

<firebase-auth
  signed-in="{{signedIn}}"
  user="{{user}}"
  on-error="handleError">
</firebase-auth>
```
* `signedIn` (boolean) - True if the client is authenticated, and false if the client is not authenticated.
* `user` (object) - The currently-authenticated user with user-related metadata.

> See [Polymerfire](https://www.webcomponents.org/element/firebase/polymerfire/) docs for more information.

Then add the `skeleton-auth` element with the selected providers.

```html
<skeleton-auth google facebook twitter github anonymous email phone on-error="handleError" recaptcha-container="recaptcha"></skeleton-auth>
```

* Available providers:
  * Google Sign-In
  * Facebook Login
  * Twitter
  * GitHub
  * Anonymous
  * Password Authentication
  * Phone Number

## Contributing

Please check [CONTRIBUTING](./CONTRIBUTING.md).

## License

Released under the [BSD 3-Clause License](./LICENSE.md).
