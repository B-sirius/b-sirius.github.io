import postMap from 'postMap.json';
import dayjs from 'dayjs';
import Link from 'next/link';
import styled from 'styled-components';
import StyledDialogBox from 'components/DialogBox';

// 按时间排序好的博客内容
const sortedPosts = Object
    .values(postMap)
    .sort((post1, post2) => {
        const date1 = dayjs(post1.date);
        const date2 = dayjs(post2.date);
        if (date1.isBefore(date2)) {
            return 1;
        }
        return -1;
    });

const RootWrapper = styled.div`
    background-color: #000;
    overflow: scroll;
`

const Root = ({ children }) => (
    <RootWrapper>
        {children}
    </RootWrapper>
)

const ContainerWrapper = styled.div`
    width: 960px;
    margin: auto;
`

const Container = ({ children }) => (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
)

const StyledSectionTitle = styled(StyledDialogBox)`
    width: fit-content;

    & > div {
        width: fit-content;
    }
`

const HomeSection = ({ className, title, children }) => (
    <div className={className}>
        <StyledSectionTitle>
            {title}
        </StyledSectionTitle>
        <StyledDialogBox>
            {children}
        </StyledDialogBox>
    </div>
)

const StyledHomeSection = styled(HomeSection)`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`

const PostList = () => (
    <Root>
        <Container>
            {sortedPosts.map((post) => {
                const { date, title, id } = post;
                return (
                    <StyledHomeSection title={title} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <div>{date}</div>
                    </StyledHomeSection>
                )
            })}
        </Container>
    </Root>
)

export default PostList;