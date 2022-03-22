import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 20,
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
    flexBasis: '30%',
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    flexBasis: '30%',
  },
});

export default styles;
