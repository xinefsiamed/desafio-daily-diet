import { DietStatusStyleProps } from "@components/DietStatus/style";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


type ContainerStyleProps = {
  type: DietStatusStyleProps
}

export const Container = styled(SafeAreaView) <ContainerStyleProps>`
  flex:1;
  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Statistics = styled.View`
  flex: 1;
  
  width: 100%;
  
  padding: 24px;
  
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  align-items: center;
  gap: 12px;
`

export const StatisticsTitle = styled.Text`

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 9px;
  margin-bottom: 11px;
`

export const DietNumbersContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`