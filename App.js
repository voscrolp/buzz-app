import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FacebookScreen from './screens/CycleTransactionScreen';
import InstagramScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
    return (
        
        
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FacebookScreen},
  Instagram: {screen: InstagramScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "Facebook"){
        return(
          <Image
          source={require("./assets/facebook.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Instagram"){
        return(
          <Image
          source={require("./assets/instagram.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
