import styled, { css } from "styled-components/native";


export const ContainerBackgroundStyle = {
  DEFAULT: 'GRAY_600' as const,
  PRIMARY: 'GREEN_LIGHT' as const,
  SECONDARY: 'RED_LIGHT' as const
}

type ContainerStyleProps = {
  type: keyof typeof ContainerBackgroundStyle
}

export const Container = styled.View<ContainerStyleProps>`
  padding: 16px;

  flex: 1;
  width: 100%;
  border-radius: 8px;

  max-height: 107px;

  gap: 8px;
  justify-content: center;
  align-items: center;


  background-color: ${({ theme, type }) => theme.COLORS[ContainerBackgroundStyle[type]]}
`

export const NumberTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Description = styled.Text`
${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `};

  text-align: center;
`