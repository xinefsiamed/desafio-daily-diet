import { HomeHeader } from "@components/HomeHeader";
import { Container } from "./styles";

import { useNavigation } from '@react-navigation/native'

import { DietStatus } from "@components/DietStatus";
import { Button } from "@components/Button";
import { Label } from "@components/Button/styles";
import { DietCard } from "@components/DietCard";
import { SectionList } from "react-native";
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


  const navigation = useNavigation()

  function handleResumeDetails() {
    navigation.navigate('resume')
  }

  return (
    <Container>
      <HomeHeader />
      <DietStatus percentage={12.2} onPress={handleResumeDetails} />

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