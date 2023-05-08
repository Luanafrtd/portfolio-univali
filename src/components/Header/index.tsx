import { Container, Icons, LinksNavegation } from "./styles";
import Contact from "../Contact";
import About from "../About";

export default function Header() {
  return (
    <>
    <Container>
       <LinksNavegation>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </LinksNavegation>

      <Icons>
        <a target="_blank" href="https://github.com/Luanafrtd"><img src="icons8-git.png" width={"20px"}></img></a>
        <a target="_blank" href="https://www.instagram.com/luanafrtd/"><img src="icons8-instagram.png" width={"20px"}></img></a>
        <a target="_blank" href="https://www.linkedin.com/in/luanaafurtado/"><img src="icons8-linkedin.png" width={"20px"}></img></a>
      </Icons>

    </Container>      
      
      <About/>     
      <Contact/>
      
      </>
  );
}
