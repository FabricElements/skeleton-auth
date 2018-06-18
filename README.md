## \<skeleton-auth\>

`skeleton-auth` is a [Polymer 3](http://polymer-project.org) and [Firebase](https://firebase.google.com/) minimal Sign-in module.

## Installation

Install skeleton-auth with npm

```shell
$ npm install FabricElements/skeleton-auth --save
```

## Usage

Import it into the `<head>` of your page

```html
<script type="module" src="node_modules/@fabricelements/skeleton-auth/skeleton-auth.js"></script>
```

### Example: basic usage

Configure your Firebase app

> See [Firebase](https://firebase.google.com/docs/storage/web/start) docs for more information.

Then add the `skeleton-auth` element with the selected providers.

```html
<skeleton-auth google
               facebook
               twitter
               github
               anonymous
               email
               phone
               on-error="handleError"
               recaptcha-container="recaptcha"></skeleton-auth>
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
