import { TouchableOpacityProps } from "react-native";
import { Container, DietTypeCircle, FoodTitle, HourText } from "./styles";


type DietCardProps = TouchableOpacityProps & {
  isNotOnDiet?: boolean;
  hour: string;
  foodName: string;
}

export function DietCard({ isNotOnDiet = false, hour, foodName, ...rest }: DietCardProps) {
  return (
    <Container {...rest}>
      <HourText>{hour}</HourText>
      <FoodTitle>{foodName}</FoodTitle>
      <DietTypeCircle isNotOnDiet={isNotOnDiet} />
    </Container>
  )
}