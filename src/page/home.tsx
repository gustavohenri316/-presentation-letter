import { Navbar } from "../components/Navbar";
import { Profile } from "../components/Profile";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Profile />
      <Navbar />
    </Container>
  );
}
