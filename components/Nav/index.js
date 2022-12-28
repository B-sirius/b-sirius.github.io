import styled from 'styled-components';
import Link from 'next/link';

const LINKS = [
    ['Home', '/'],
    ['Posts', '/posts'],
]

const ContainerWrapper = styled.div`
    display: flex;
`

const Container = ({ children }) => (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
)

const StyledA = styled.a`
    padding: 16px;
    font-family: monospace;
    color: var(--font-color);
    font-size: 20px; 
`;

const Nav = ({ className }) => (
    <Container className={className}>
        {
            LINKS.map(item => (
                <Link href={item[1]} key={item[0]}>
                    <StyledA>[{item[0]}]</StyledA>
                </Link>
            ))
        }
    </Container>
)

export default Nav;