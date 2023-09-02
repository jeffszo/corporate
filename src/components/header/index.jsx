import {
  ContainerHeader,
  ListContainer,
  ItemList,
  ButtonConnect,
} from "./styles";

import Logo from "../../icons/corporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen-removebg-preview 1.png";

export function Header() {
  return (
    <ContainerHeader>
      <ListContainer>
        <img
          src={Logo}
          alt=""
          style={{
            marginRight: 290,
          }}
        />

        <ItemList
          style={{
            marginRight: 35,
          }}
        >
          Home
        </ItemList>
        <ItemList
          style={{
            marginRight: 35,
          }}
        >
          About
        </ItemList>
        <ItemList
          style={{
            marginRight: 35,
          }}
        >
          Services
        </ItemList>
        <ItemList
          style={{
            marginRight: 35,
          }}
        >
          Resources
        </ItemList>
        <ItemList
          style={{
            marginRight: 35,
          }}
        >
          Projects
        </ItemList>
        <ButtonConnect
          style={{
            marginLeft: 290,
          }}
        >
          Contact us today
        </ButtonConnect>
      </ListContainer>
    </ContainerHeader>
  );
}
