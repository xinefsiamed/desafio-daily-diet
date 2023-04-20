import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export type ButtonStyleColorProps = 'PRIMARY' | 'SECONDARY'

type ContainerProps = {
  type: ButtonStyleColorProps
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 12px;

  border-radius: 6px;
  padding: 16px;

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
    
    border: ${type === "PRIMARY" ? 'none' : `1px solid ${theme.COLORS.GRAY_100}`};
  `}
`

export const Text = styled.Text<ContainerProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `};

  margin-top: 40px;
  margin-bottom: 8px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs<ContainerProps>(({ theme, type }) => ({
  size: 18,
  color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))``;

