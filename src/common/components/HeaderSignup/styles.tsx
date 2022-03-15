import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
