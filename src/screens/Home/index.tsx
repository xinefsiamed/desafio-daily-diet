import { Avatar, AvatarContainer, Container, Logo } from "./styles";
import LogoImage from '@assets/Logo.png'
import avatarImage from '@assets/avatar.jpg'

export function Home() {

  return (
    <Container>
      <Logo source={LogoImage} />
      <AvatarContainer>
        <Avatar source={avatarImage} />
      </AvatarContainer>
    </Container>
  )
}