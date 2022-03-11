import AsyncStorage from '@react-native-async-storage/async-storage';

const setDataStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Set data to AsyncStorage fail!: ', error);
  }
};

const getDataStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log('Get data from AsyncStorage fail!: ', error);
  }
};

const removeDataStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Remove data from AsyncStorage fail!: ', error);
  }
};

export {setDataStorage, getDataStorage, removeDataStorage};
export default AsyncStorage;
