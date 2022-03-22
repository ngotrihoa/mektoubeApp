import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

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
});

export default styles;
