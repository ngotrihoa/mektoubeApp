interface Mapping {
  [key: string]: string;
}

const StatusCodeHttp = {
  SUCCESS: 200,
};

const screenNavigation: Mapping = {
  ENTITY: 'Entity',
  BIRTHDAY: 'Birthday',
  ORIGIN: 'Origin',
  COUNTRY: 'Country',
  LOCATION: 'Location',
  ZIPCODE: 'Zipcode',
  CITY: 'City',
  REGION: 'Region',
  SIGNUP_FLOW: 'SignupFlow',
  SIGNUP: 'Signup',
  SIGNIN: 'Signin',
};

const BACKGROUND_INTRO = require('./../../assets/images/intro-home.jpeg');
const LOGO = require('./../../assets/images/logo-large.png');
const DISCOVERY_BANNER = require('./../../assets/images/discover-banner-male.jpg');

export {
  screenNavigation,
  BACKGROUND_INTRO,
  LOGO,
  StatusCodeHttp,
  DISCOVERY_BANNER,
};
