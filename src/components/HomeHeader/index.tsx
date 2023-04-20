import { Avatar, AvatarContainer, Container, Logo } from "./style";
import LogoImage from '@assets/Logo.png'
import avatarImage from '@assets/avatar.jpg'

export function HomeHeader() {

  return (
    <Container>
      <Logo source={LogoImage} />
      <AvatarContainer>
        <Avatar source={avatarImage} />
      </AvatarContainer>
    </Container>
  )
}