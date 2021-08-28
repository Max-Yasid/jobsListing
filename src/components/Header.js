import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 130px;
`;

const Img = styled.img`
    width: 100%;
    height: 130px;
    background-color: var(--Desaturated-Dark-Cyan);
`;

export default function Header(){
    return (
        <Container>
            {window.screen.width < 400 ? 
                (<Img className="headerImg" src="/images/bg-header-mobile.svg" alt="header background" /> )
                : (<Img className="headerImg" src="/images/bg-header-desktop.svg" alt="header background" /> )
            }
        </Container>
    );
}