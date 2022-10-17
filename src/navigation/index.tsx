import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList, RootTabParamList } from './types'
import Home from '../screens/home'
import Fixed from '../screens/fixed'
import Cards from '../screens/cards'
import Extract from '../screens/extract'
import Profile from '../screens/profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NextMonthSimulation from '../screens/home/nextMonthSimulation'
import AddRelease from '../screens/home/addRelease'
import FixedInfo from '../screens/fixed/fixedInfo'

export default function Navigation() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NextMonthSimulation"
        component={NextMonthSimulation}
      />
      <Stack.Screen name="AddRelease" component={AddRelease} />
      <Stack.Screen name="FixedInfo" component={FixedInfo} />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="Fixed" component={Fixed} />
      <BottomTab.Screen name="Cards" component={Cards} />
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Extract" component={Extract} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  )
}
