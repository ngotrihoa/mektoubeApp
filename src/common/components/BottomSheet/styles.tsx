import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,

    zIndex: 1000,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      height: -3,
      width: 0,
    },
    shadowOpacity: 0.24,
    borderTopLeftRadius: 31,
    borderTopRightRadius: 32,
    elevation: 3,
    paddingTop: 32,
  },

  header: {
    paddingHorizontal: 36,
    marginBottom: 34,
    position: 'relative',
    width: '100%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  close: {
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: -10,
    right: 24,
  },
});

export default styles;
