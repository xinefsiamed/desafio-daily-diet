import { TouchableOpacityProps } from 'react-native'
import { Container, ButtonStyleColorProps, Text, Icon } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'


type ButtonProps = TouchableOpacityProps & {
  type?: ButtonStyleColorProps,
  title: string,
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
}

export function Button({ type = 'PRIMARY', title, icon, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <Text type={type}>{title}</Text>
    </Container>
  )
}