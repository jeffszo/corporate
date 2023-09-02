import { Container, Col, ContainerProjects,Title, SubTitle } from "./styles"
import Person from '../../img/group.png';
import Group from '../../img/group2.png'
import Group3 from '../../img/group3.png'
import Group4 from '../../img/group4.png'
import Group5 from '../../img/group5.png'

export function SectionTwo(){
    return (
        <div>
            <Container>
                <Col><img src={Person} alt=""/></Col>
            </Container>
            <ContainerProjects>
                <Title>Latest Project & Case</Title>
                <SubTitle>Let’s Looks Our Global Projects</SubTitle>
                <img src={Group} alt="" style={{
                    marginBottom: 120,
                    display: 'flex',
                    width: 1380
                }}/>
                <img src={Group3} alt="" style={{
                    marginBottom: 140,
                    width: 1380
                }} />
                <img src={Group4} alt="" style={{
                    marginBottom: 120
                }}/>
                <img src={Group5} alt="" style={{
                    marginBottom: 80
                }} />
            </ContainerProjects>
        </div>
    )
}