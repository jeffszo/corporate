import { Header } from "./components/header"
import { Section } from "./components/section";
import {SectionTwo} from "./components/section-two"
import { Footer } from "./components/footer";
import GlobalStyle from "./global/styles";
export default function App() {
  

  return (
    <div>
      <Header>
      </Header>
      <Section></Section>
      <SectionTwo></SectionTwo>
      <Footer></Footer>
      <GlobalStyle/>
    </div>
  )
}


