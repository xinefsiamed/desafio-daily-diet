import { Container, ContainerBackgroundStyle, Description, NumberTitle } from "./styles";


type DietNumberCardProps = {
  type?: keyof typeof ContainerBackgroundStyle,
  quantity: number,
  description: string
}

export function DietNumberCard({ type = 'DEFAULT', description, quantity }: DietNumberCardProps) {

  return (
    <Container type={type}>
      <NumberTitle>
        {quantity}
      </NumberTitle>

      <Description>{description}</Description>
    </Container>
  )
}