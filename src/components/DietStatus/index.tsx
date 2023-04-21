import { TouchableOpacityProps } from "react-native";
import { Container, Description, DietStatusStyleProps, Icon, PercentageText } from "./style";
import { useTheme } from "styled-components";


type DietStatusProps = TouchableOpacityProps & {

  percentage: number
}

export function DietStatus({ percentage, ...rest }: DietStatusProps) {

  const { COLORS } = useTheme();

  const isPercentageBelowThan75 = percentage < 75;

  const type = isPercentageBelowThan75 ? 'SECONDARY' : 'PRIMARY'

  return (
    <Container type={type} {...rest}>
      <Icon size={24} color={type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
      <PercentageText>{percentage.toFixed(2).toLocaleString()}%</PercentageText>
      <Description>das refeições dentro da dieta</Description>

    </Container>
  )
}