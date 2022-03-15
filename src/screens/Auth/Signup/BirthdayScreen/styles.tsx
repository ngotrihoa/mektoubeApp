import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

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
  label: {
    fontWeight: '600',
  },
  bottom: {
    width: '100%',
    height: height * 0.12,
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    marginHorizontal: 12,
    borderBottomWidth: 2,
    width: 60,
    borderBottomColor: '#ffffff',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    paddingBottom: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    paddingVertical: 30,
  },
});

export default styles;
