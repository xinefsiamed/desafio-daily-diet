import { Header } from "@components/Header";
import { Container, DietNumbersContainer, Statistics, StatisticsTitle } from "./styles";
import { DietNumberCard } from "@components/DietNumberCard";


export function DietResume() {

  const percentage = 12.2;

  const isPercentageBelowThan75 = percentage < 75;

  const type = isPercentageBelowThan75 ? 'SECONDARY' : 'PRIMARY'

  return (
    <Container type={type}>
      <Header percentage={percentage} />
      <Statistics>
        <StatisticsTitle>Estatísticas Gerais</StatisticsTitle>

        <DietNumberCard description="melhor sequência de pratos dentro da dieta" quantity={4} />
        <DietNumberCard description="refeições registradas" quantity={109} />
        <DietNumbersContainer>
          <DietNumberCard description="refeições dentro da dieta" quantity={32} type="PRIMARY" />
          <DietNumberCard description="refeições fora da dieta" quantity={77} type="SECONDARY" />
        </DietNumbersContainer>
      </Statistics>
    </Container>
  )
}