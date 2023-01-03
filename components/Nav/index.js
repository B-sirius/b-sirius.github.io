import styled from 'styled-components';
import Link from 'next/link';
import BlogTitle from 'components/BlogTitle';

const LINKS = [
    ['Home', '/'],
    ['Posts', '/posts'],
];

const LinkContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const Container = styled.div`
    margin-bottom: 50px;
`

const StyledLink = styled(Link)`
    padding: 5px 0;
    font-family: monospace;
    color: ${(props) => (props.$actived ? 'var(--nav-color)' : 'var(--font-color)')};
    font-size: 20px;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }
`;

const Nav = ({ className, activeIndex }) => (
    <Container className={className}>
        <LinkContainer>
            {
                LINKS.map((item, index) => (
                    <StyledLink href={item[1]} key={item[0]} $actived={index === activeIndex}>
                        [{item[0]}]
                    </StyledLink>
                ))
            }
        </LinkContainer>
        <BlogTitle />
    </Container>
)

export default Nav;