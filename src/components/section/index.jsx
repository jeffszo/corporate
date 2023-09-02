import avatar from "../../img/avatar.png";
import {
  ContainerGeral,
  Title,
  Paragraph,
  Button,
  ContainerText,
  ContainerCareFeatures,
  TitleFeatures,
  SubTitleFeatures,
  ContainerServices,
  ItemServices,
  TitleItemServices,
  ParagraphServices,
  ContainerAbout,
  SubTitleAbout,
  TitleAbout,
  ContainerImg,
  ContainerAboutText,
  ParagraphAbout,
  ContainerAmazing,
  TitleAmazing,
  SubTitleAmazing,
  ContainerImgAmazing
} from "./styles";

import LogoDevelop from '../../img/image 2 (1).png';
import LogoLupa from '../../img/image 2 (2).png';
import LogoPaper from '../../img/image 2.png';
import PersonOne from '../../img/Rectangle 2.png';
import BgNote from '../../img/Rectangle 3.png';
import DuplaPerson from '../../img/dupla-person.png';
import OldPerson from '../../img/old-person.png';




export function Section() {
  return (
    <div>
      <ContainerGeral>
        <ContainerText>
          <Title>
            Our{" "}
            <span
              style={{
                color: "#F54C1E",
              }}
            >
              consultation
            </span>{" "}
            is always in sync with your strategy
          </Title>
          <Paragraph>
            Scelerisque dignissim in leo at magna donec mi metus ipsum luctus
            nam elit sociis luctus et aliquam libero.
          </Paragraph>
          <Button>Our Services</Button>
        </ContainerText>
        <img
          src={avatar}
          alt=""
          style={{
            height: 600,
            width: "auto",
          }}
        />
      </ContainerGeral>
      <ContainerCareFeatures>
        <TitleFeatures>CARE FEATURES</TitleFeatures>
        <SubTitleFeatures>Awesome Service With Our Tools</SubTitleFeatures>
        <ContainerServices>
          <ItemServices>
          <img src={LogoPaper} alt="Logo do papel" style={{
            marginBottom: 10
          }}/>
            <TitleItemServices>App Development</TitleItemServices>
            <ParagraphServices>Helping families live intelligently means we’re always working to bring our customers.</ParagraphServices>
          </ItemServices>
          <ItemServices>
          <img src={LogoDevelop} alt="Logo do PC" style={{
            marginBottom: 10
          }}/>
            <TitleItemServices>Cloud Storage</TitleItemServices>
            <ParagraphServices>
            Helping families live intelligently means we’re always working to bring our customers.
            </ParagraphServices>
          </ItemServices>
          <ItemServices>
          <img src={LogoLupa} alt="Logo da Lupa" style={{
            marginBottom: 10
          }}/>
            <TitleItemServices>UX Planning</TitleItemServices>
            <ParagraphServices>
            Helping families live intelligently means we’re always working to bring our customers.
            </ParagraphServices>
          </ItemServices>
        </ContainerServices>
      </ContainerCareFeatures>
      <ContainerAbout>
        <ContainerImg>
            <img src={PersonOne} alt="" />
        </ContainerImg>
        <ContainerImg>
            <img src={BgNote} alt="" style={{
                display: 'flex',
                marginTop: 53,
                marginRight: 35,
                height: 300
            }} />
        </ContainerImg>
        <ContainerAboutText>
            <TitleAbout>About</TitleAbout>
            <SubTitleAbout>Influencer Marketing for Your Business</SubTitleAbout>
            <ParagraphAbout>With over 25 years of experience, we have crafted thousands of Strategic discovery process that enables us to peel back the Layers which enable us to understand, connect, represent and Dominate your market.</ParagraphAbout>
        </ContainerAboutText>
      </ContainerAbout>
      <ContainerAmazing>
        <TitleAmazing>Our Services</TitleAmazing>
        <SubTitleAmazing>Amazing Business Services </SubTitleAmazing>
        <ContainerImgAmazing>
          <img src={DuplaPerson} alt="" />
          <img src={OldPerson} alt="" />
        </ContainerImgAmazing>
      </ContainerAmazing>
    </div>
  );
}
