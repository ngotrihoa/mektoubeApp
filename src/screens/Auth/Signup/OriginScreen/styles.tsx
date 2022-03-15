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
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: 14,
  },
  list: {
    marginTop: 20,
  },
  listSelected: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomColor: '#ffffff50',
    borderTopColor: '#ffffff50',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    paddingBottom: 20,
    paddingTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 17,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#ffffff40',
    borderRadius: 20,
    marginBottom: 10,
  },
  itemSelected: {
    backgroundColor: '#ffffff50',
    borderColor: 'white',
  },
  listItemSelected: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 6,
    paddingVertical: 11,
    borderRadius: 20,
    backgroundColor: '#ffffff20',
    marginRight: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    paddingLeft: 12,
    fontSize: 16,
    fontWeight: '700',
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
