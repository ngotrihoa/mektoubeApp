interface Mapping {
  [key: string]: string;
}

const StatusCodeHttp = {
  SUCCESS: 200,
};

const rules = {
  ruleEmail: {
    required: {
      value: true,
      message: "L'Email n'est pas valide",
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "L'Email n'est pas valide",
    },
  },

  ruleUserName: {
    required: {
      value: true,
      message: 'Le Prénom ne peut pas être vide',
    },
    pattern: {
      value: new RegExp('^[a-zA-Z0-9]{4,15}$'),
      message: 'Les caractères spéciaux ne sont pas acceptés dans les prénoms',
    },
    minLength: {
      value: 4,
      message: 'Merci de choisir un prénom de 4 à 15 caractères',
    },
    maxLength: {
      value: 15,
      message: 'Merci de choisir un prénom de 4 à 15 caractères',
    },
  },

  rulePassword: {
    required: {
      value: true,
      message: 'Le mot de passe ne peut pas être vide',
    },
    minLength: {
      value: 8,
      message: 'Votre nouveau mot de passe doit faire au moins 8 caractères',
    },
    pattern: {
      value: /^[\S]+$/,
      message: 'Le mot de passe ne doit pas contenir d’espace',
    },
  },
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
  rules,
};
