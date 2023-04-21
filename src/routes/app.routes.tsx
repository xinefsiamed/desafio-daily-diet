import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DietResume } from "@screens/DietResume"
import { Home } from "@screens/Home"


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen
        name="diets"
        component={Home}
      />

      <Screen
        name="resume"
        component={DietResume}
      />

    </Navigator>
  )
}