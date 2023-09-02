import styled from "styled-components";

export const ContainerGeral = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  background-color: #031333;
  margin-top: 0.5%;
`;
export const ContainerText = styled.div`
  display: flex;
  margin: 7% 0 0 9%;
  height: 400px;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Title = styled.h1`
  width: 600px;
  font-size: 4.2rem;
  color: #fff;
`;

export const Paragraph = styled.p`
  color: #fff;
  margin: 2.5% 0;
  width: 440px;
  font-size: 16px;
  font-weight: 200;
`;
export const Button = styled.button`
  background-color: #f54c1e;
  border: none;
  border-radius: 4px;
  width: 138px;
  height: 44px;
  color: #fff;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  text-align: center;
  &:hover{
    cursor: pointer;
    opacity: 0.9;
  }
`;


export const ContainerCareFeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


`
export const TitleFeatures = styled.h4`
  letter-spacing: 2.5px;
  color: #F54C1E;
  margin-bottom: 10px;
  font-weight: 500;
`

export const SubTitleFeatures = styled.h1`
  color: #031333;
  margin-bottom: 3.5%;

`

export const ContainerServices = styled.div`
  display: flex;
  margin-bottom: 9%;
`

export const ItemServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`

export const TitleItemServices = styled.h2`
  text-align: center;
  color: #031333;
  margin: 0 15px 10px 0;
  font-weight: 600;

`

export const ParagraphServices = styled.p`
  text-align: center;
  opacity: 0.7;
  width: 250px;
`

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
`

export const SubTitleAbout = styled.h1`
  font-size: 2.2rem;
  color: #031333;
  width: 370px;
`

export const TitleAbout = styled.h4`
  margin-bottom: 5%;
  letter-spacing: 2px;
  font-weight: 500;
  color: #F54C1E;
`

export const ContainerImg = styled.div`
  margin-right: 28px;
`

export const ContainerAboutText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
export const ParagraphAbout = styled.p`
  text-align: justify;
  margin-top: 5%;
  width: 440px;
  opacity: 0.8;

`

export const ContainerAmazing = styled.div`
  width: 100%;
  height: 900px;
  background-color: #031333;
`;

export const TitleAmazing = styled.h5`
  text-align: center;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  padding-top: 75px;
  color: #F54C1E;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 3px;
  opacity: 0.9;
`;

export const SubTitleAmazing = styled.h1`
  color: #fff;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 10px;
  font-size: 2.4rem;
`

export const ContainerImgAmazing = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  gap: 25px;
`