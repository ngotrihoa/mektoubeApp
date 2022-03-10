import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {},
  logo: {
    alignSelf: 'center',
    width: width * 0.8,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  subLogo: {
    textAlign: 'center',
  },
  groupLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 25,
  },
  linkLeft: {
    flexGrow: 1,
    marginRight: 20,
  },
  linkText: {
    textDecorationLine: 'underline',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  linkBtn: {
    flexGrow: 1,
    backgroundColor: '#24cf5f',
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 15,
    paddingHorizontal: 20,
  },
  btnText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  //form
  formContainer: {
    padding: 36,
    paddingTop: 0,
  },
  formHeadType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#EAEAEB',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
    color: '#313840',
  },
  inputLabel: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  inputItem: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderColor: '#EAEAEB',
    borderWidth: 2,
    borderRadius: 8,
    position: 'relative',
  },
  iconShowPassword: {
    position: 'absolute',
    right: -10,
    transform: [{scale: 1.5}],
    bottom: 10,
  },
  errorContainer: {
    width: '100%',
    height: 42,
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  errorBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fde9e9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    color: '#e12c2c',
  },
  linkAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#24cf5f',
    marginVertical: 24,
    borderRadius: 8,
    paddingVertical: 8,
  },
  textBtn: {
    fontWeight: '700',
    fontSize: 15,
  },
  formInput: {},
  formContent: {},
});

export default styles;
