import Logo from "../../img/corporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen-removebg-preview 1 (1).png";
import Facebook from "../../icons/facebook.png";
import Twitter from "../../icons/twitter.png";
import Instagram from "../../icons/instagram.png";

import {
  ContainerGeral,
  ContainerCorporate,
  ParagraphFooter,
  ContainerLogo,
  ContainerInfo,
  ContainerText,
  Pdescribe
} from "./styles";

export function Footer() {
  return (
    <ContainerGeral>
      <ContainerCorporate>
        <img src={Logo} alt="" style={{
            width: 100,
            marginTop: 45,
            marginBottom: 25
        }}/>
        <ParagraphFooter>
          2021 Award winning Vaccination and Lorem ipsum dolor sit amet
        </ParagraphFooter>
        <ContainerLogo>
          <img src={Facebook} alt="" style={{
            marginRight: 20,
            cursor: 'pointer',
            width: 40
            
          }} />
          <img src={Twitter} alt="" style={{
            marginRight: 20,
            cursor: 'pointer',
            width: 40
          }}/>
          <img src={Instagram} alt="" style={{
            cursor: 'pointer',
            width: 40          
          }} />
        </ContainerLogo>
      </ContainerCorporate>
      <ContainerInfo style={{
        marginTop: 45
      }}>
          <ContainerText style={{
            marginRight: 100
          }}>Location
          <Pdescribe>America</Pdescribe>
          <Pdescribe>Asia</Pdescribe>
          <Pdescribe>Europe</Pdescribe>
          <Pdescribe>Africa</Pdescribe>
          </ContainerText>
          <ContainerText style={{
            marginRight: 100
          }}>Contact
          <Pdescribe>About-me</Pdescribe>
          <Pdescribe>Teamns</Pdescribe>
          <Pdescribe>Profile</Pdescribe>
          <Pdescribe>FAQ</Pdescribe>

          </ContainerText>
          <ContainerText>Legals
          <Pdescribe>Privacy</Pdescribe>
          <Pdescribe>Disclaimer</Pdescribe>
          <Pdescribe>Teamns</Pdescribe>
          <Pdescribe>Company</Pdescribe>

          </ContainerText>
      </ContainerInfo>
    </ContainerGeral>
  );
}
