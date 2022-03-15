import React from 'react';
import {View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ProviderStore} from 'react-redux';
import MySnackbar from './src/common/components/Snackbar';
import SpinLoadingGlobal from './src/common/components/SpinLoadingGlobal';
import RootNavigation from './src/navigation';
import store from './src/redux/store';

const App = () => {
  return (
    <ProviderStore store={store}>
      <PaperProvider>
        <View style={{flex: 1}}>
          <SpinLoadingGlobal />
          <MySnackbar />
          <RootNavigation />
        </View>
      </PaperProvider>
    </ProviderStore>
  );
};

export default App;
