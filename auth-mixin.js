// import * as firebase from 'firebase';
// import 'firebase/dist/index.esm.js';
// import * as firebase from 'firebase/firebase.js';
window.Fabric = window.Fabric || {};
const firebase = window.firebase;

/**
 * `Fabric.AuthMixin`
 *
 * @summary Custom element base class that provides the core API for auth
 * @polymer
 * @mixinFunction
 * @memberOf Fabric
 * @param {Function} superClass
 * @return {Function}
 * @type {function(Function): {}}
 * @constructor
 */
Fabric.AuthMixin = (superClass) => class extends superClass {
  /**
   * Constructor
   */
  constructor() {
    super();
  }

  /**
   * @return {object}
   */
  static get properties() {
    return {
      /**
       * ign-in provider with pop-up.
       */
      popup: {
        type: Boolean,
        value: false,
      },
      /**
       * Allow Google Sign-in.
       */
      google: {
        type: Boolean,
        notify: true,
        value: false,
      },
      /**
       * Allow Facebook Sign-in.
       */
      facebook: {
        type: Boolean,
        notify: true,
        value: false,
      },
      /**
       * Allow Twitter Sign-in.
       */
      twitter: {
        type: Boolean,
        notify: true,
        value: false,
      },
      /**
       * Allow GitHub Sign-in.
       */
      github: {
        type: Boolean,
        notify: true,
        value: false,
      },
      /**
       * Allow Email Sign-in.
       */
      email: {
        type: Boolean,
        notify: true,
        value: false,
      },
      /**
       * Allow anonymous Sign-in.
       */
      anonymous: {
        type: Boolean,
        notify: true,
        value: false,
      },
      /**
       * Allow phone number Sign-in.
       */
      phone: {
        type: Boolean,
        notify: true,
        value: false,
      },
      /**
       * Error
       */
      error: {
        type: Object,
        notify: true,
        reflectToAttribute: true,
        value: null,
      },
      /*
       * Currently open view.
       */
      selected: {
        type: String,
        value: 'options',
      },
      /*
       * Available providers for the given email.
       */
      availableProviders: {
        type: Object,
        notify: true,
      },
      /*
       * The minimum length of the input value.
       */
      minLength: {
        type: Number,
        value: 6,
      },
      /*
       * Disable email input on sign-up form
       */
      disabled: {
        type: Boolean,
        value: true,
      },
      /*
       * User email
       */
      userEmail: {
        type: String,
        value: null,
      },
      /*
       * User password
       */
      userPassword: {
        type: String,
        value: null,
      },
      /*
       * Phone number
       */
      phoneNumber: {
        type: String,
        value: null,
      },
      /*
       * Phone code
       */
      phoneCode: {
        type: String,
        value: '+1',
      },
      /*
       * Confirmation code
       */
      confirmationCode: {
        type: String,
        value: null,
      },
      /*
       * User object
       */
      user: {
        type: Object,
        value: null,
        notify: true,
        reflectToAttribute: true,
      },
      /*
       * User is signedIn
       */
      signedIn: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
      },
      /*
       * Country dial codes.
       */
      dialingCodes: {
        type: Array,
        value: [
          {
            countryCode: 'AF',
            countryName: 'Afghanistan',
            phoneCode: '+93',
          },
          {
            countryCode: 'AL',
            countryName: 'Albania',
            phoneCode: '+355',
          },
          {
            countryCode: 'DZ',
            countryName: 'Algeria',
            phoneCode: '+213',
          },
          {
            countryCode: 'AS',
            countryName: 'American Samoa',
            phoneCode: '+1',
          },
          {
            countryCode: 'AD',
            countryName: 'Andorra',
            phoneCode: '+376',
          },
          {
            countryCode: 'AO',
            countryName: 'Angola',
            phoneCode: '+244',
          },
          {
            countryCode: 'AG',
            countryName: 'Antigua and Barbuda',
            phoneCode: '+1',
          },
          {
            countryCode: 'AR',
            countryName: 'Argentina',
            phoneCode: '+54',
          },
          {
            countryCode: 'AM',
            countryName: 'Armenia',
            phoneCode: '+374',
          },
          {
            countryCode: 'AW',
            countryName: 'Aruba',
            phoneCode: '+297',
          },
          {
            countryCode: 'AU',
            countryName: 'Australia',
            phoneCode: '+61',
          },
          {
            countryCode: 'AT',
            countryName: 'Austria',
            phoneCode: '+43',
          },
          {
            countryCode: 'BS',
            countryName: 'Bahamas',
            phoneCode: '+1',
          },
          {
            countryCode: 'BD',
            countryName: 'Bangladesh',
            phoneCode: '+880',
          },
          {
            countryCode: 'BB',
            countryName: 'Barbados',
            phoneCode: '+1',
          },
          {
            countryCode: 'BY',
            countryName: 'Belarus',
            phoneCode: '+375',
          },
          {
            countryCode: 'BE',
            countryName: 'Belgium',
            phoneCode: '+32',
          },
          {
            countryCode: 'BZ',
            countryName: 'Belize',
            phoneCode: '+501',
          },
          {
            countryCode: 'BJ',
            countryName: 'Benin',
            phoneCode: '+229',
          },
          {
            countryCode: 'BM',
            countryName: 'Bermuda',
            phoneCode: '+1',
          },
          {
            countryCode: 'BT',
            countryName: 'Bhutan',
            phoneCode: '+975',
          },
          {
            countryCode: 'BO',
            countryName: 'Bolivia',
            phoneCode: '+591',
          },
          {
            countryCode: 'BA',
            countryName: 'Bosnia and Herzegovina',
            phoneCode: '+387',
          },
          {
            countryCode: 'BW',
            countryName: 'Botswana',
            phoneCode: '+267',
          },
          {
            countryCode: 'BR',
            countryName: 'Brazil',
            phoneCode: '+55',
          },
          {
            countryCode: 'VG',
            countryName: 'British Virgin Islands',
            phoneCode: '+1',
          },
          {
            countryCode: 'BN',
            countryName: 'Brunei',
            phoneCode: '+673',
          },
          {
            countryCode: 'BG',
            countryName: 'Bulgaria',
            phoneCode: '+359',
          },
          {
            countryCode: 'BF',
            countryName: 'Burkina Faso',
            phoneCode: '+226',
          },
          {
            countryCode: 'KH',
            countryName: 'Cambodia',
            phoneCode: '+855',
          },
          {
            countryCode: 'CM',
            countryName: 'Cameroon',
            phoneCode: '+237',
          },
          {
            countryCode: 'CA',
            countryName: 'Canada',
            phoneCode: '+1',
          },
          {
            countryCode: 'CV',
            countryName: 'Cape Verde',
            phoneCode: '+238',
          },
          {
            countryCode: 'KY',
            countryName: 'Cayman Islands',
            phoneCode: '+1',
          },
          {
            countryCode: 'CF',
            countryName: 'Central African Republic',
            phoneCode: '+236',
          },
          {
            countryCode: 'CL',
            countryName: 'Chile',
            phoneCode: '+56',
          },
          {
            countryCode: 'CO',
            countryName: 'Colombia',
            phoneCode: '+57',
          },
          {
            countryCode: 'KM',
            countryName: 'Comoros',
            phoneCode: '+269',
          },
          {
            countryCode: 'CK',
            countryName: 'Cook Islands',
            phoneCode: '+682',
          },
          {
            countryCode: 'CR',
            countryName: 'Costa Rica',
            phoneCode: '+506',
          },
          {
            countryCode: 'HR',
            countryName: 'Croatia',
            phoneCode: '+385',
          },
          {
            countryCode: 'CW',
            countryName: 'Curacao',
            phoneCode: '+599',
          },
          {
            countryCode: 'CY',
            countryName: 'Cyprus',
            phoneCode: '+357',
          },
          {
            countryCode: 'CZ',
            countryName: 'Czech Republic',
            phoneCode: '+420',
          },
          {
            countryCode: 'CD',
            countryName: 'Democratic Republic of the Congo',
            phoneCode: '+243',
          },
          {
            countryCode: 'DK',
            countryName: 'Denmark',
            phoneCode: '+45',
          },
          {
            countryCode: 'DJ',
            countryName: 'Djibouti',
            phoneCode: '+253',
          },
          {
            countryCode: 'DM',
            countryName: 'Dominica',
            phoneCode: '+1',
          },
          {
            countryCode: 'DO',
            countryName: 'Dominican Republic',
            phoneCode: '+1',
          },
          {
            countryCode: 'TL',
            countryName: 'East Timor',
            phoneCode: '+670',
          },
          {
            countryCode: 'EC',
            countryName: 'Ecuador',
            phoneCode: '+593',
          },
          {
            countryCode: 'EG',
            countryName: 'Egypt',
            phoneCode: '+20',
          },
          {
            countryCode: 'SV',
            countryName: 'El Salvador',
            phoneCode: '+503',
          },
          {
            countryCode: 'GQ',
            countryName: 'Equatorial Guinea',
            phoneCode: '+240',
          },
          {
            countryCode: 'ET',
            countryName: 'Ethiopia',
            phoneCode: '+251',
          },
          {
            countryCode: 'FK',
            countryName: 'Falkland Islands',
            phoneCode: '+500',
          },
          {
            countryCode: 'FO',
            countryName: 'Faroe Islands',
            phoneCode: '+298',
          },
          {
            countryCode: 'FJ',
            countryName: 'Fiji',
            phoneCode: '+679',
          },
          {
            countryCode: 'FI',
            countryName: 'Finland',
            phoneCode: '+358',
          },
          {
            countryCode: 'FR',
            countryName: 'France',
            phoneCode: '+33',
          },
          {
            countryCode: 'GF',
            countryName: 'French Guiana',
            phoneCode: '+594',
          },
          {
            countryCode: 'GA',
            countryName: 'Gabon',
            phoneCode: '+241',
          },
          {
            countryCode: 'GM',
            countryName: 'Gambia',
            phoneCode: '+220',
          },
          {
            countryCode: 'GE',
            countryName: 'Georgia',
            phoneCode: '+995',
          },
          {
            countryCode: 'DE',
            countryName: 'Germany',
            phoneCode: '+49',
          },
          {
            countryCode: 'GH',
            countryName: 'Ghana',
            phoneCode: '+233',
          },
          {
            countryCode: 'GI',
            countryName: 'Gibraltar',
            phoneCode: '+350',
          },
          {
            countryCode: 'GR',
            countryName: 'Greece',
            phoneCode: '+30',
          },
          {
            countryCode: 'GL',
            countryName: 'Greenland',
            phoneCode: '+299',
          },
          {
            countryCode: 'GD',
            countryName: 'Grenada',
            phoneCode: '+1',
          },
          {
            countryCode: 'GP',
            countryName: 'Guadeloupe',
            phoneCode: '+590',
          },
          {
            countryCode: 'GT',
            countryName: 'Guatemala',
            phoneCode: '+502',
          },
          {
            countryCode: 'GG',
            countryName: 'Guernsey',
            phoneCode: '+44',
          },
          {
            countryCode: 'GY',
            countryName: 'Guyana',
            phoneCode: '+592',
          },
          {
            countryCode: 'HT',
            countryName: 'Haiti',
            phoneCode: '+509',
          },
          {
            countryCode: 'HN',
            countryName: 'Honduras',
            phoneCode: '+504',
          },
          {
            countryCode: 'HK',
            countryName: 'Hong Kong',
            phoneCode: '+852',
          },
          {
            countryCode: 'HU',
            countryName: 'Hungary',
            phoneCode: '+36',
          },
          {
            countryCode: 'IN',
            countryName: 'India',
            phoneCode: '+91',
          },
          {
            countryCode: 'ID',
            countryName: 'Indonesia',
            phoneCode: '+62',
          },
          {
            countryCode: 'IQ',
            countryName: 'Iraq',
            phoneCode: '+964',
          },
          {
            countryCode: 'IE',
            countryName: 'Ireland',
            phoneCode: '+353',
          },
          {
            countryCode: 'IM',
            countryName: 'Isle of Man',
            phoneCode: '+44',
          },
          {
            countryCode: 'IL',
            countryName: 'Israel',
            phoneCode: '+972',
          },
          {
            countryCode: 'IT',
            countryName: 'Italy',
            phoneCode: '+39',
          },
          {
            countryCode: 'CI',
            countryName: 'Ivory Coast',
            phoneCode: '+225',
          },
          {
            countryCode: 'JM',
            countryName: 'Jamaica',
            phoneCode: '+1',
          },
          {
            countryCode: 'JP',
            countryName: 'Japan',
            phoneCode: '+81',
          },
          {
            countryCode: 'JE',
            countryName: 'Jersey',
            phoneCode: '+44',
          },
          {
            countryCode: 'JO',
            countryName: 'Jordan',
            phoneCode: '+962',
          },
          {
            countryCode: 'KZ',
            countryName: 'Kazakhstan',
            phoneCode: '+7',
          },
          {
            countryCode: 'KE',
            countryName: 'Kenya',
            phoneCode: '+254',
          },
          {
            countryCode: 'KW',
            countryName: 'Kuwait',
            phoneCode: '+965',
          },
          {
            countryCode: 'KG',
            countryName: 'Kyrgyzstan',
            phoneCode: '+996',
          },
          {
            countryCode: 'LA',
            countryName: 'Laos',
            phoneCode: '+856',
          },
          {
            countryCode: 'LV',
            countryName: 'Latvia',
            phoneCode: '+371',
          },
          {
            countryCode: 'LB',
            countryName: 'Lebanon',
            phoneCode: '+961',
          },
          {
            countryCode: 'LS',
            countryName: 'Lesotho',
            phoneCode: '+266',
          },
          {
            countryCode: 'LY',
            countryName: 'Libya',
            phoneCode: '+218',
          },
          {
            countryCode: 'LI',
            countryName: 'Liechtenstein',
            phoneCode: '+423',
          },
          {
            countryCode: 'LT',
            countryName: 'Lithuania',
            phoneCode: '+370',
          },
          {
            countryCode: 'LU',
            countryName: 'Luxembourg',
            phoneCode: '+352',
          },
          {
            countryCode: 'MO',
            countryName: 'Macao',
            phoneCode: '+853',
          },
          {
            countryCode: 'MK',
            countryName: 'Macedonia',
            phoneCode: '+389',
          },
          {
            countryCode: 'MG',
            countryName: 'Madagascar',
            phoneCode: '+261',
          },
          {
            countryCode: 'MW',
            countryName: 'Malawi',
            phoneCode: '+265',
          },
          {
            countryCode: 'MY',
            countryName: 'Malaysia',
            phoneCode: '+60',
          },
          {
            countryCode: 'MT',
            countryName: 'Malta',
            phoneCode: '+356',
          },
          {
            countryCode: 'MU',
            countryName: 'Mauritius',
            phoneCode: '+230',
          },
          {
            countryCode: 'YT',
            countryName: 'Mayotte',
            phoneCode: '+262',
          },
          {
            countryCode: 'MX',
            countryName: 'Mexico',
            phoneCode: '+52',
          },
          {
            countryCode: 'FM',
            countryName: 'Micronesia',
            phoneCode: '+691',
          },
          {
            countryCode: 'MD',
            countryName: 'Moldova',
            phoneCode: '+373',
          },
          {
            countryCode: 'MN',
            countryName: 'Mongolia',
            phoneCode: '+976',
          },
          {
            countryCode: 'ME',
            countryName: 'Montenegro',
            phoneCode: '+382',
          },
          {
            countryCode: 'MS',
            countryName: 'Montserrat',
            phoneCode: '+1',
          },
          {
            countryCode: 'MA',
            countryName: 'Morocco',
            phoneCode: '+212',
          },
          {
            countryCode: 'MZ',
            countryName: 'Mozambique',
            phoneCode: '+258',
          },
          {
            countryCode: 'MM',
            countryName: 'Myanmar',
            phoneCode: '+95',
          },
          {
            countryCode: 'NA',
            countryName: 'Namibia',
            phoneCode: '+264',
          },
          {
            countryCode: 'NP',
            countryName: 'Nepal',
            phoneCode: '+977',
          },
          {
            countryCode: 'NL',
            countryName: 'Netherlands',
            phoneCode: '+31',
          },
          {
            countryCode: 'NC',
            countryName: 'New Caledonia',
            phoneCode: '+687',
          },
          {
            countryCode: 'NZ',
            countryName: 'New Zealand',
            phoneCode: '+64',
          },
          {
            countryCode: 'NI',
            countryName: 'Nicaragua',
            phoneCode: '+505',
          },
          {
            countryCode: 'NE',
            countryName: 'Niger',
            phoneCode: '+227',
          },
          {
            countryCode: 'NG',
            countryName: 'Nigeria',
            phoneCode: '+234',
          },
          {
            countryCode: 'NF',
            countryName: 'Norfolk Island',
            phoneCode: '+672',
          },
          {
            countryCode: 'NO',
            countryName: 'Norway',
            phoneCode: '+47',
          },
          {
            countryCode: 'OM',
            countryName: 'Oman',
            phoneCode: '+968',
          },
          {
            countryCode: 'PK',
            countryName: 'Pakistan',
            phoneCode: '+92',
          },
          {
            countryCode: 'PS',
            countryName: 'Palestinian Territory',
            phoneCode: '+970',
          },
          {
            countryCode: 'PA',
            countryName: 'Panama',
            phoneCode: '+507',
          },
          {
            countryCode: 'PG',
            countryName: 'Papua New Guinea',
            phoneCode: '+675',
          },
          {
            countryCode: 'PY',
            countryName: 'Paraguay',
            phoneCode: '+595',
          },
          {
            countryCode: 'PE',
            countryName: 'Peru',
            phoneCode: '+51',
          },
          {
            countryCode: 'PH',
            countryName: 'Philippines',
            phoneCode: '+63',
          },
          {
            countryCode: 'PL',
            countryName: 'Poland',
            phoneCode: '+48',
          },
          {
            countryCode: 'PT',
            countryName: 'Portugal',
            phoneCode: '+351',
          },
          {
            countryCode: 'PR',
            countryName: 'Puerto Rico',
            phoneCode: '+1',
          },
          {
            countryCode: 'QA',
            countryName: 'Qatar',
            phoneCode: '+974',
          },
          {
            countryCode: 'CG',
            countryName: 'Republic of the Congo',
            phoneCode: '+242',
          },
          {
            countryCode: 'RE',
            countryName: 'Reunion',
            phoneCode: '+262',
          },
          {
            countryCode: 'RO',
            countryName: 'Romania',
            phoneCode: '+40',
          },
          {
            countryCode: 'RU',
            countryName: 'Russia',
            phoneCode: '+7',
          },
          {
            countryCode: 'RW',
            countryName: 'Rwanda',
            phoneCode: '+250',
          },
          {
            countryCode: 'SH',
            countryName: 'Saint Helena',
            phoneCode: '+290',
          },
          {
            countryCode: 'KN',
            countryName: 'Saint Kitts and Nevis',
            phoneCode: '+1',
          },
          {
            countryCode: 'LC',
            countryName: 'Saint Lucia',
            phoneCode: '+1',
          },
          {
            countryCode: 'MF',
            countryName: 'Saint Martin',
            phoneCode: '+590',
          },
          {
            countryCode: 'PM',
            countryName: 'Saint Pierre and Miquelon',
            phoneCode: '+508',
          },
          {
            countryCode: 'VC',
            countryName: 'Saint Vincent and the Grenadines',
            phoneCode: '+1',
          },
          {
            countryCode: 'WS',
            countryName: 'Samoa',
            phoneCode: '+685',
          },
          {
            countryCode: 'ST',
            countryName: 'Sao Tome and Principe',
            phoneCode: '+239',
          },
          {
            countryCode: 'SA',
            countryName: 'Saudi Arabia',
            phoneCode: '+966',
          },
          {
            countryCode: 'SN',
            countryName: 'Senegal',
            phoneCode: '+221',
          },
          {
            countryCode: 'RS',
            countryName: 'Serbia',
            phoneCode: '+381',
          },
          {
            countryCode: 'SC',
            countryName: 'Seychelles',
            phoneCode: '+248',
          },
          {
            countryCode: 'SL',
            countryName: 'Sierra Leone',
            phoneCode: '+232',
          },
          {
            countryCode: 'SG',
            countryName: 'Singapore',
            phoneCode: '+65',
          },
          {
            countryCode: 'SK',
            countryName: 'Slovakia',
            phoneCode: '+421',
          },
          {
            countryCode: 'SI',
            countryName: 'Slovenia',
            phoneCode: '+386',
          },
          {
            countryCode: 'ZA',
            countryName: 'South Africa',
            phoneCode: '+27',
          },
          {
            countryCode: 'KR',
            countryName: 'South Korea',
            phoneCode: '+82',
          },
          {
            countryCode: 'ES',
            countryName: 'Spain',
            phoneCode: '+34',
          },
          {
            countryCode: 'LK',
            countryName: 'Sri Lanka',
            phoneCode: '+94',
          },
          {
            countryCode: 'SD',
            countryName: 'Sudan',
            phoneCode: '+249',
          },
          {
            countryCode: 'SR',
            countryName: 'Suriname',
            phoneCode: '+597',
          },
          {
            countryCode: 'SZ',
            countryName: 'Swaziland',
            phoneCode: '+268',
          },
          {
            countryCode: 'SE',
            countryName: 'Sweden',
            phoneCode: '+46',
          },
          {
            countryCode: 'CH',
            countryName: 'Switzerland',
            phoneCode: '+41',
          },
          {
            countryCode: 'SY',
            countryName: 'Syria',
            phoneCode: '+963',
          },
          {
            countryCode: 'TW',
            countryName: 'Taiwan',
            phoneCode: '+886',
          },
          {
            countryCode: 'TZ',
            countryName: 'Tanzania',
            phoneCode: '+255',
          },
          {
            countryCode: 'TH',
            countryName: 'Thailand',
            phoneCode: '+66',
          },
          {
            countryCode: 'TG',
            countryName: 'Togo',
            phoneCode: '+228',
          },
          {
            countryCode: 'TO',
            countryName: 'Tonga',
            phoneCode: '+676',
          },
          {
            countryCode: 'TT',
            countryName: 'Trinidad and Tobago',
            phoneCode: '+1',
          },
          {
            countryCode: 'TR',
            countryName: 'Turkey',
            phoneCode: '+90',
          },
          {
            countryCode: 'TM',
            countryName: 'Turkmenistan',
            phoneCode: '+993',
          },
          {
            countryCode: 'TC',
            countryName: 'Turks and Caicos Islands',
            phoneCode: '+1',
          },
          {
            countryCode: 'VI',
            countryName: 'U.S. Virgin Islands',
            phoneCode: '+1',
          },
          {
            countryCode: 'UG',
            countryName: 'Uganda',
            phoneCode: '+256',
          },
          {
            countryCode: 'UA',
            countryName: 'Ukraine',
            phoneCode: '+380',
          },
          {
            countryCode: 'AE',
            countryName: 'United Arab Emirates',
            phoneCode: '+971',
          },
          {
            countryCode: 'GB',
            countryName: 'United Kingdom',
            phoneCode: '+44',
          },
          {
            countryCode: 'US',
            countryName: 'United States',
            phoneCode: '+1',
          },
          {
            countryCode: 'UY',
            countryName: 'Uruguay',
            phoneCode: '+598',
          },
          {
            countryCode: 'UZ',
            countryName: 'Uzbekistan',
            phoneCode: '+998',
          },
          {
            countryCode: 'VE',
            countryName: 'Venezuela',
            phoneCode: '+58',
          },
          {
            countryCode: 'VN',
            countryName: 'Vietnam',
            phoneCode: '+84',
          },
          {
            countryCode: 'YE',
            countryName: 'Yemen',
            phoneCode: '+967',
          },
          {
            countryCode: 'ZM',
            countryName: 'Zambia',
            phoneCode: '+260',
          },
          {
            countryCode: 'ZW',
            countryName: 'Zimbabwe',
            phoneCode: '+263',
          },
        ],
      },
    };
  }

  /**
   * connectedCallback
   */
  connectedCallback() {
    super.connectedCallback();
    firebase.auth().onAuthStateChanged((user) => {
      this.clear(); // Clear on state change
      this.user = user ? user : null;
      this.signedIn = !(!user);
    });
    firebase.auth().getRedirectResult().catch((error) => {
      if (error.code === 'auth/account-exists-with-different-credential') {
        this.userEmail = error.email ? error.email : null;
        this.fetchEmailProviders();
      }
    });
  }

  /**
   * Google Sign-in function.
   */
  signInGoogle() {
    this._signIn(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Facebook Sign-in function.
   */
  signInFacebook() {
    this._signIn(new firebase.auth.FacebookAuthProvider());
  }

  /**
   * Twitter Sign-in function.
   */
  signInTwitter() {
    this._signIn(new firebase.auth.TwitterAuthProvider());
  }

  /**
   * GitHub Sign-in function.
   */
  signInGitHub() {
    this._signIn(new firebase.auth.GithubAuthProvider());
  }

  /**
   * Anonymous Sign-in function.
   */
  signInAnonymously() {
    firebase.auth().signInAnonymously().catch((error) => this.error = error);
  }

  /**
   * Sign In the user.
   *
   *  @param {firebase.auth.AuthProvider} provider
   */
  _signIn(provider) {
    let base;
    if (this.popup) {
      base = firebase.auth().signInWithPopup(provider);
    } else {
      base = firebase.auth().signInWithRedirect(provider);
    }
    if (!base) return;
    base.catch((error) => {
      this.error = error;
      // Handle popup blocked
      if (error.code === 'auth/popup-blocked') {
        this.popup = false;
        this._signIn(provider);
      }
    });
  }

  /**
   * key down / key up / key press event handler to submit forms on enter
   * This CANNOT be used as an annotated event listener; use regular
   * DOM on event handlers.
   *
   * @param {object} event
   * @private
   * @see https://www.polymer-project.org/2.0/docs/devguide/events#annotated-listeners
   * @see https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers
   */
  _submitOnEnter(event) {
    // check if 'enter' was pressed
    if (event.keyCode === 13) this._submitForm(event);
  }

  /**
   * Checks if there's any provider for the given email
   */
  fetchEmailProviders() {
    firebase.auth()
      .fetchProvidersForEmail(this.userEmail)
      .then((data) => {
        this.availableProviders = {
          password: data.includes('password'),
          google: data.includes('google.com'),
          facebook: data.includes('facebook.com'),
          twitter: data.includes('twitter.com'),
          github: data.includes('github.com'),
        };
        /**
         * Show account creation form if the email
         * is not registered in our database
         */
        const notRegistered = data.length === 0;
        this.selected = notRegistered ? 'email-signup' : 'email-providers';
      }).catch((error) => {
      this.error = error;
    });
  }

  /**
   * Sign In with email and password.
   *
   * @param {Object} e
   */
  signInWithEmailAndPassword(e) {
    firebase.auth()
      .signInWithEmailAndPassword(this.userEmail, this.userPassword)
      .catch((error) => {
        this.error = error;
        this.userEmail = this.userEmail ? this.userEmail : null;
        this.userPassword = null;
      });
  }

  /**
   * Password reset.
   */
  passwordReset() {
    firebase.auth()
      .sendPasswordResetEmail(this.userEmail)
      .then(() => this.selected = 'forgot-sent')
      .catch((error) => this.error = error);
  }

  /**
   * Create user with email and password.
   */
  createUserWithEmailAndPassword() {
    firebase.auth()
      .createUserWithEmailAndPassword(this.userEmail, this.userPassword)
      .catch((error) => {
        this.error = error;
        this.userPassword = null;
      });
  }

  /**
   * Sign In with phone number.
   */
  signInWithPhone() {
    const phoneComplete = this.phoneCode + this.phoneNumber;
    firebase.auth()
      .signInWithPhoneNumber(phoneComplete, this._recaptchaVerifier())
      .then((confirmationResult) => {
        /**
         * SMS sent. Prompt user to type the code
         * from the message, then sign the user in
         * with confirmationResult.confirm(code).
         */
        this.confirmationResult = confirmationResult;
        this.showConfirmationCodeScreen();
        this._removeRecaptcha();
      })
      .catch((error) => {
        this.error = error;
        this._removeRecaptcha();
      });
  }

  /**
   * Remove recaptcha
   * @private
   */
  _removeRecaptcha() {
    const element = document.getElementById('recaptchaContainer');
    if (!element) return;
    element.remove();
  }

  /**
   * Confirmation code screen.
   */
  showConfirmationCodeScreen() {
    this.selected = 'confirm-code';
  }

  /**
   * Sign in the user by passing the code to the confirm method.
   */
  confirmCode() {
    this.confirmationResult.confirm(this.confirmationCode)
      .then((result) => {
        this.user = result.user;
      })
      .catch((error) => {
        this.error = error;
      });
  }

  /**
   * sign out
   * @return {!firebase.Thenable<*>}
   */
  signOut() {
    this.error = null;
    return firebase.auth()
      .signOut()
      .catch((error) => {
        this.error = error;
      });
  }

  /**
   * Call to open the email dialog
   *
   * @private
   */
  _chooseEmail() {
    this.selected = 'email-login';
  }

  /**
   * Call to open the phone dialog
   *
   * @private
   */
  _choosePhone() {
    this.selected = 'phone-login';
  }

  /**
   * Reset email and password
   *
   */
  clear() {
    // Reset user basics
    this.userEmail = null;
    this.userPassword = null;
    this.phoneNumber = null;
    this.phoneCode = '+1';
    // Reset view
    this.selected = 'options';
    // Reset providers
    this.availableProviders = null;
    // Reset errors
    this.error = null;
    document.activeElement.blur();
  }

  /**
   * Submit form
   * @param {object} event
   * @private
   */
  _submitForm(event) {
    const form = event.target.closest('iron-form');
    if (form) form.fire('submit');
  }

  /**
   * Recaptcha verifier
   *
   * @return {*}
   * @private
   */
  _recaptchaVerifier() {
    this._removeRecaptcha();
    const container = document.createElement('div');
    container.id = 'recaptchaContainer';
    container.style.display = 'none';
    document.body.appendChild(container);
    if (!container) {
      this.error = new Error('Invalid recaptcha-container');
      return;
    }
    return new firebase.auth.RecaptchaVerifier(
      container, {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log('demo captcha', response);
        },
        'expired-callback': () => {
          // Reset reCAPTCHA?
          this._recaptchaVerifier();
          console.warn('expired recatpcha');
        },
      },
    );
  }
};
