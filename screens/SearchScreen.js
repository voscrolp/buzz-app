import React from "react";
import {
  Text,
  View,
} from "react-native";
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class InstagramScreen extends React.Component {
  render(){
    return(
      <View>
      <SafeAreaProvider>
        <Header
          backgroundColor = {'pink'}
          centerComponent = {{
              text : 'Buzz App',
              style : { color: 'black', fontSize: 30}
          }}
        />
        </SafeAreaProvider>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '400px' }}>
          <Text>Instagram</Text>
        </View>
        </View>
    );
  }
}
