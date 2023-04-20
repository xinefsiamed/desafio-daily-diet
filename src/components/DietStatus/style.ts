import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from "phosphor-react-native";

export type DietStatusStyleProps = 'PRIMARY' | 'SECONDARY'

type ContainerColorProps = {
  type: DietStatusStyleProps
}

export const Container = styled(TouchableOpacity) <ContainerColorProps>`
  margin-top: 48px;
  min-height: 102px;
  
  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  padding: 10px;
`;


export const Icon = styled(ArrowUpRight)`
  align-self: flex-end;
`

export const PercentageText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["2XL"]}px; 
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Description = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px; 
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};

  margin-bottom: 12px;
`