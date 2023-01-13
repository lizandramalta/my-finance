import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList, RootTabParamList } from '../application/types'
import Home from '../screens/home'
import Fixed from '../screens/fixed'
import Cards from '../screens/cards'
import Extract from '../screens/extract'
import Profile from '../screens/profile'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import NextMonthSimulation from '../screens/home/nextMonthSimulation'
import AddRelease from '../screens/home/addRelease'
import FixedInfo from '../screens/fixed/fixedInfo'
import Login from '../screens/login'
import { colors, dimension, icons } from '../application/contants'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

type BackButtonProps = {
  navigation: BottomTabNavigationProp<BackButtonProps>
}

const BackButton = ({ navigation }: BackButtonProps) => (
  <TouchableOpacity onPress={navigation.goBack}>
    <Ionicons name="arrow-back-circle" size={32} color={colors.blue} />
  </TouchableOpacity>
)

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ navigation }) => ({
        headerLeft: () => <BackButton navigation={navigation} />,
        headerTransparent: true,
        headerTitle: '',
      })}
    >
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
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.softBlue,
        },
        headerTitleStyle: {
          fontSize: 22,
          fontFamily: 'QuicksandMedium',
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
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '',
          headerStyle: {
            height: dimension.height * 0.05,
            backgroundColor: colors.softBlue,
          },
        }}
      />
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
