import { DietStatusStyleProps } from "@components/DietStatus/style";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'


type ContainerStyleProps = {
  type: DietStatusStyleProps
}

export const Container = styled.View`
  padding: 24px;

  align-items: center;
`

export const BackButton = styled(TouchableOpacity)`
align-self: flex-start;
`

export const Icon = styled(ArrowLeft)`
  
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