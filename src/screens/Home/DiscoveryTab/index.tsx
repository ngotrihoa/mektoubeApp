import React, {useLayoutEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../../common/components/MyAppText';
import Skeleton from '../../../common/components/Skeleton';
import {DISCOVERY_BANNER} from '../../../common/const';
import {
  getListUserAction,
  getMoreUserAction,
  setIsLoadingAction,
} from '../../../redux/actions/homeAction';
import {
  selectIsHomeLoading,
  selectListUser,
} from '../../../redux/selector/homeSelector';
import classes from './styles';

const ListUsersItem = ({user}) => {
  return (
    <View style={classes.userItem}>
      <View style={classes.userThumbnail}>
        <Image
          source={{uri: user.thumbnail}}
          resizeMode="contain"
          style={classes.imageThumbnail}
        />
      </View>
      <View style={classes.userInfo}>
        <Text style={classes.userName}>{user.name}</Text>
        <View style={classes.groupInfo}>
          <Text style={classes.userAge}>{user.age} ans</Text>
          <Text style={{color: '#989ca0', marginHorizontal: 5}}>|</Text>
          <View style={classes.userLocation}>
            <Ionicons
              name="location-sharp"
              size={14}
              color="#989ca0"
              style={{marginRight: 3}}
            />
            <Text style={classes.userRegion}>
              {user.region.length > 8
                ? user.region.substring(0, 8 - 3) + '...'
                : user.region}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const DiscoveryTab = () => {
  const listUsers = useSelector(selectListUser);
  const isLoading = useSelector(selectIsHomeLoading);
  const dispatch = useDispatch();

  const {width, height} = Dimensions.get('window');
  const flatListRef = useRef(null);
  let scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });

  useLayoutEffect(() => {
    if (!listUsers || listUsers?.length < 1) {
      dispatch(getListUserAction({}));
    }
  }, []);

  const handleGetMoreUsers = () => {
    dispatch(getMoreUserAction());
  };

  const handleRefresh = () => {
    dispatch(setIsLoadingAction(true));
    dispatch(getListUserAction({}));
  };

  const handlePressReset = () => {
    dispatch(getListUserAction({}));
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  return (
    <View style={classes.root}>
      <Animated.View style={[classes.header, {transform: [{translateY}]}]}>
        <View style={classes.headerLeft}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={handlePressReset}>
            <AntDesign name="reload1" color="#989CA0" size={24} />
            <Text
              style={{
                color: '#313840',
                marginLeft: 5,
                fontWeight: '600',
                fontSize: 15,
              }}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
        <View style={classes.headerTitle}>
          <Text style={classes.headerTitleText}>Découvrir</Text>
        </View>
        <View style={classes.headerRight}>
          <View style={classes.headerRightItem}>
            <MaterialCommunityIcons
              name="tune-vertical"
              color="#24cf5f"
              size={22}
            />
            <View
              style={{
                width: 12,
                height: 12,
                paddingHorizontal: 3,
                borderRadius: 3,
                backgroundColor: '#24cf5f',
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{translateY: -5}],
              }}>
              <Text
                style={[
                  classes.numFilter,
                  {
                    color: '#fff',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>

      <View>
        <FlatList
          ref={flatListRef}
          ListHeaderComponent={() => (
            <>
              <View style={classes.imageHeroContainer}>
                <Image
                  source={DISCOVERY_BANNER}
                  style={classes.imageHeroBgc}
                  resizeMode="cover"
                />
                <View style={classes.imageHeroText}>
                  <Text style={classes.textTitle}>Rencontres</Text>
                  <Text style={classes.subTitle}>
                    Découvrez les profils et faites une rencontre !
                  </Text>
                </View>
                <View style={classes.after} />
                <View style={classes.before} />
              </View>

              <View style={classes.filterBar}>
                <Text style={classes.filterTitle}>Votre Recherche</Text>
                <View style={classes.bottomBorder} />
                <TouchableOpacity style={classes.filterBtn}>
                  <MaterialCommunityIcons
                    name="tune-vertical"
                    color="white"
                    size={18}
                  />
                  <Text style={classes.textFilter}>Critères</Text>
                  <View style={classes.numFilterBox}>
                    <Text style={classes.numFilter}>0</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
          ListFooterComponent={() => {
            // if (!isLoading) {
            //   return null;
            // }
            return (
              <View style={[classes.listSkeleton, {flexDirection: 'row'}]}>
                <Skeleton
                  width={width * 0.42}
                  height={180}
                  style={classes.listSkeletonItem}
                />
                <Skeleton
                  width={width * 0.42}
                  height={180}
                  style={classes.listSkeletonItem}
                />
                <Skeleton
                  width={width * 0.42}
                  height={180}
                  style={classes.listSkeletonItem}
                />
                <Skeleton
                  width={width * 0.42}
                  height={180}
                  style={classes.listSkeletonItem}
                />
              </View>
            );
          }}
          data={listUsers || []}
          renderItem={item => <ListUsersItem user={item.item} />}
          numColumns={2}
          keyExtractor={(item, index) => `${item.uuid} + ${index}`}
          scrollEventThrottle={1}
          // onScroll={Animated.event(
          //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
          //   {useNativeDriver: false},
          // )}
          onScroll={e => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
          removeClippedSubviews={true}
          columnWrapperStyle={classes.listUsers}
          ListFooterComponentStyle={{paddingBottom: 80}}
          onEndReached={handleGetMoreUsers}
          onEndReachedThreshold={0.7}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={200}
          refreshControl={
            <RefreshControl
              colors={['red', 'tomato']}
              onRefresh={handleRefresh}
              refreshing={isLoading}
            />
          }
        />
      </View>
    </View>
  );
};

export default DiscoveryTab;
