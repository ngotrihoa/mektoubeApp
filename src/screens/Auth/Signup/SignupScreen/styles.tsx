import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  boxIcon: {
    width: 70,
    height: 70,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff30',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Avenir Next Condensed Bold',
  },
  headerRight: {
    marginLeft: 'auto',
    textDecorationLine: 'underline',
    color: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
  titleContent: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
  },
  boxTitle: {
    width: '100%',
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {},
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    borderBottomColor: 'hsla(0,0%,100%,.5)',
    borderBottomWidth: 1,
  },
  label: {
    fontWeight: '600',
  },
  bottom: {
    width: '100%',
    height: height * 0.08,
  },
  boxIconButton: {
    width: 50,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff50',
  },
  listInput: {},
  inputItem: {
    marginBottom: 20,
  },
  listCheckbox: {},
  checkboxItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  inputError: {
    paddingVertical: 4,
    backgroundColor: '#ff2c2c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Avenir Next Condensed Bold',
  },
  textLabel: {
    fontSize: 14,
    fontFamily: 'Avenir Next Condensed Medium',
  },
  btn: {
    backgroundColor: 'hsla(0,0%,100%,.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#fff',
    borderTopWidth: 1,
  },
  textBtn: {
    fontSize: 18,
    textTransform: 'uppercase',
    marginLeft: 15,
  },
});

export default styles;
