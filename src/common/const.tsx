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
  CITY: 'City',
  REGION: 'Region',
  SIGNUP_FLOW: 'SignupFlow',
  SIGNUP: 'Signup',
  SIGNIN: 'Signin',
};

const BACKGROUND_INTRO = require('./../../assets/images/intro-home.jpeg');
const LOGO = require('./../../assets/images/logo-large.png');

export {screenNavigation, BACKGROUND_INTRO, LOGO, StatusCodeHttp};
