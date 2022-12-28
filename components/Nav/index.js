import styled from 'styled-components';
import Link from 'next/link';

const LINKS = [
    ['Home', '/'],
    ['Posts', '/posts'],
]

const ContainerWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
`

const Container = ({ children }) => (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
)

const StyledA = styled.a`
    padding: 5px 0;
    font-family: monospace;
    color: ${(props) => (props.active ? 'var(--nav-color)' : 'var(--font-color)')};
    font-size: 20px;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }
`;

const Nav = ({ className, activeIndex }) => (
    <Container className={className}>
        {
            LINKS.map((item, index) => (
                <Link href={item[1]} key={item[0]}>
                    <StyledA active={index === activeIndex}>[{item[0]}]</StyledA>
                </Link>
            ))
        }
    </Container>
)

export default Nav;