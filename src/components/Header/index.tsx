import { BackButton, Container, Description, Icon, PercentageText } from "./styles";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
  percentage: number
}

export function Header({ percentage }: HeaderProps) {

  const navigation = useNavigation()
  const { COLORS } = useTheme()

  const isPercentageBelowThan75 = percentage < 75;

  const type = isPercentageBelowThan75 ? 'SECONDARY' : 'PRIMARY'

  function handleGoHome() {
    navigation.navigate('diets')
  }

  return (
    <Container >
      <StatusBar backgroundColor={type === 'PRIMARY' ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT} />
      <BackButton onPress={handleGoHome}>
        <Icon color={type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
      </BackButton>

      <PercentageText>{percentage.toFixed(2).toLocaleString()}%</PercentageText>
      <Description>das refeições dentro da dieta</Description>

    </Container>
  )
}