import { HomeHeader } from "@components/HomeHeader";
import { Container } from "./styles";

import { DietStatus } from "@components/DietStatus";
import { Button } from "@components/Button";
import { Label } from "@components/Button/styles";
import { DietCard } from "@components/DietCard";
import { SectionList, View } from "react-native";
import { DateSectionTitle } from "@components/DietCard/styles";


const Data = [
  {
    title: '18.04.2023',
    data: [
      {
        hour: '22:00',
        foodName: 'X-tudo',
        isNotOnDiet: true
      },
      {
        hour: '17:15',
        foodName: 'Alface',
        isNotOnDiet: false
      },
      {
        hour: '11:00',
        foodName: 'PF de respeito',
        isNotOnDiet: false
      },
    ]
  },

  {
    title: '19.04.2023',
    data: [
      {
        hour: '22:00',
        foodName: 'X-tudo',
        isNotOnDiet: true
      },
      {
        hour: '17:15',
        foodName: 'Alface',
        isNotOnDiet: false
      },
      {
        hour: '11:00',
        foodName: 'PF de respeito',
        isNotOnDiet: false
      },
    ]
  }
]


export function Home() {

  return (
    <Container>
      <HomeHeader />
      <DietStatus percentage={98.89} />

      <Label>Refeições</Label>
      <Button title="Nova refeição" icon="plus" />


      <SectionList
        style={{ marginTop: 20 }}
        sections={Data}
        keyExtractor={(item, index) => `${item}+${index}`}
        renderItem={({ item }) => (
          <DietCard foodName={item.foodName} hour={item.hour} isNotOnDiet={item.isNotOnDiet} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateSectionTitle>{title}</DateSectionTitle>
        )}
        showsVerticalScrollIndicator={false}
      />

    </Container>
  )
}