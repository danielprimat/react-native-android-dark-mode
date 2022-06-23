import * as React from 'react';

import {  View, useColorScheme, Switch } from 'react-native';
import {setNightMode} from "react-native-android-dark-mode";

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{
      backgroundColor: isDarkMode ? 'black' : 'green', flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
          setNightMode(!isDarkMode)
        }}
        value={isDarkMode}
      />
    </View>
  );
}

