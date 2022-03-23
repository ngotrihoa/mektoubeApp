import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 100,
    backgroundColor: '#fff',
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: Platform.OS === 'ios' ? 45 : 10,
  },
  headerLeft: {
    flexBasis: '25%',
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    flexBasis: '25%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerTitleText: {
    color: '#313840',
    fontWeight: '600',
    fontSize: 22,
    textAlign: 'center',
  },
  headerRightItem: {
    flexDirection: 'row',
  },
  imageHeroContainer: {
    position: 'relative',
  },
  imageHeroBgc: {
    width: '120%',
    height: 250,
  },
  imageHeroText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.18)',
    paddingHorizontal: 16,
  },
  textTitle: {
    fontSize: 35,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 13,
  },
  after: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderColor: 'transparent',
    borderBottomColor: '#ffffff95',
    borderBottomWidth: 25,
    borderLeftWidth: width,
  },
  before: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderColor: 'transparent',
    borderBottomColor: '#ffffff95',
    borderBottomWidth: 25,
    borderRightWidth: width,
  },
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 25,
    position: 'relative',
    marginBottom: 18,
  },
  filterBtn: {
    backgroundColor: '#24cf5f',
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingLeft: 20,
    paddingRight: 5,
    borderRadius: 10,
  },
  textFilter: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '600',
  },
  numFilterBox: {
    width: 16,
    height: 13,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    transform: [{translateY: 5}],
  },
  numFilter: {
    color: '#24cf5f',
    fontWeight: '700',
    fontSize: 10,
  },
  bottomBorder: {
    width: 40,
    height: 2,
    backgroundColor: '#ddd',
    position: 'absolute',
    left: 0,
    bottom: -2,
  },
  filterTitle: {
    maxWidth: 180,
    margin: 0,
    fontSize: 22,
    color: '#313840',
  },

  //----user item
  listUsers: {
    justifyContent: 'space-around',
    marginHorizontal: 15,
  },
  userItem: {
    marginBottom: 40,
    borderRadius: 24,
    padding: 16,
    backgroundColor: '#ffffff',
    elevation: 3,
    maxWidth: width * 0.4,
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
      width: 5,
    },
    shadowOpacity: 0.06,
  },
  userThumbnail: {
    width: 131,
    height: 131,
    overflow: 'hidden',
    borderRadius: 16,
  },
  imageThumbnail: {
    flex: 1,
  },
  userInfo: {
    paddingTop: 6,
    paddingLeft: 3,
  },
  userName: {
    marginVertical: 4,
    fontSize: 16,
    fontWeight: '700',
    color: '#313840',
    textTransform: 'capitalize',
  },
  userAge: {
    color: '#989ca0',
    fontSize: 14,
    fontWeight: '600',
  },
  userLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userRegion: {
    color: '#989ca0',
    fontSize: 14,
    fontWeight: '600',
  },
  groupInfo: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  listSkeleton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 15,
  },
  listSkeletonItem: {
    marginBottom: 20,
    borderRadius: 16,
  },
});

export default styles;
