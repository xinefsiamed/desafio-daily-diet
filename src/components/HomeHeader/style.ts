import styled from "styled-components/native";


export const Container = styled.View`

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const AvatarContainer = styled.View`
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};

  overflow: hidden;
`

export const Avatar = styled.Image`
  width: 38px;
  height: 38px;
`