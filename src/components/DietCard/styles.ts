import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;

  padding: 12px 14px;

  flex-direction: row;
  align-items: center;


  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  margin-bottom: 12px;
`

export const HourText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
  `};
  margin-right: 12px;
`;

export const FoodTitle = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};

  padding-left: 12px;
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

type DietTypeProps = {
  isNotOnDiet: boolean
}

export const DietTypeCircle = styled.View<DietTypeProps>`
  border-radius: 999px;

  width: 14px;
  height: 14px;

  background-color: ${({ theme, isNotOnDiet }) => isNotOnDiet ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
`

export const DateSectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `};

  margin-top: 32px;
  margin-bottom: 8px;
`