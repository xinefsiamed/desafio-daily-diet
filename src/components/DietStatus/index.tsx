import { TouchableOpacityProps } from "react-native";
import { Container, Description, DietStatusStyleProps, Icon, PercentageText } from "./style";
import { useTheme } from "styled-components";


type DietStatusProps = TouchableOpacityProps & {
  type?: DietStatusStyleProps,
  percentage: number
}

export function DietStatus({ percentage, type = 'PRIMARY', ...rest }: DietStatusProps) {

  const { COLORS } = useTheme()

  return (
    <Container type={type} {...rest}>
      <Icon size={24} color={type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
      <PercentageText>{percentage.toLocaleString()}%</PercentageText>
      <Description>das refeições dentro da dieta</Description>

    </Container>
  )
}