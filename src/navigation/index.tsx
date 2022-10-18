import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList, RootTabParamList } from '../types'
import Home from '../screens/home'
import Fixed from '../screens/fixed'
import Cards from '../screens/cards'
import Extract from '../screens/extract'
import Profile from '../screens/profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NextMonthSimulation from '../screens/home/nextMonthSimulation'
import AddRelease from '../screens/home/addRelease'
import FixedInfo from '../screens/fixed/fixedInfo'
import Login from '../screens/login'
import { colors, dimension, icons } from '../contants'
import { Ionicons } from '@expo/vector-icons'
import { IconProps } from '@expo/vector-icons/build/createIconSet'

export default function Navigation() {
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
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
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
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons
              name={icons[route.name]}
              size={32}
              color={focused ? colors.white : colors.softBlue}
            />
          )
        },
        tabBarStyle: {
          backgroundColor: colors.blue,
          height: dimension.height * 0.11,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.softBlue,
        tabBarLabelStyle: {
          fontFamily: 'QuicksandMedium',
          fontSize: 14,
        },
      })}
    >
      <BottomTab.Screen
        name="Fixed"
        component={Fixed}
        options={{ title: 'Fixos' }}
      />
      <BottomTab.Screen
        name="Cards"
        component={Cards}
        options={{ title: 'Cartões' }}
      />
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen
        name="Extract"
        component={Extract}
        options={{ title: 'Extrato' }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Perfil' }}
      />
    </BottomTab.Navigator>
  )
}
