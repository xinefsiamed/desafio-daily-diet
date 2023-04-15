import { StatusBar } from "react-native";
import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'

import theme from "@themes/index";
import { Loading } from "@components/Loading";
import { Home } from "@screens/Home";


export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}

    </ThemeProvider>
  );
}

