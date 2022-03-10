import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
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
  headerLeft: {
    flexBasis: '25%',
    paddingLeft: 20,
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    flexBasis: '25%',
    paddingRight: 20,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 26,
    flex: 1,
  },
  textContent: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'AvenirNextCondensed_Bold',
    fontWeight: '600',
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
    fontFamily: 'AvenirNextCondensed_Bold',
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
