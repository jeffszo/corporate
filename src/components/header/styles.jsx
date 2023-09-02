import styled from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@500&display=swap');

// `;

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

`;

export const ItemList = styled.li`
  list-style-type: none;
  flex-direction: row;
  height: 24px;
  margin-right: 2rem;
  font-family: 'Poppins', sans-serif;
  &:hover {
    cursor: pointer;
    color: #f54c1e;
    border-bottom: #f54c1e 1px solid;
    border-bottom-width: 0.4px;
  }

`;

export const ButtonConnect = styled.button`
  background-color: #f54c1e;
  border: none;
  border-radius: 4px;
  width: 146px;
  height: 40px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
`;
