import React from 'react';
import {View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import RootNavigation from './src/navigation';

const App = () => {
  return (
    <PaperProvider>
      <View style={{flex: 1}}>
        <RootNavigation />
      </View>
    </PaperProvider>
  );
};

export default App;
