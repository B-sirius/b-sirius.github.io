// 博客的文章列表页

import postMap from 'postMap.json';
import dayjs from 'dayjs';
import styled from 'styled-components';
import DialogLink from 'components/DialogLink';

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

// 根容器，覆盖全屏
const RootWrapper = styled.div`
    background-color: #000;
    overflow: scroll;
`
const Root = ({ children }) => (
    <RootWrapper>
        {children}
    </RootWrapper>
)

// 固定宽度的主体容器
const ContainerWrapper = styled.div`
    width: 960px;
    margin: auto;
`
const Container = ({ children }) => (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
)

// 对话框样式的section
const HomeSection = styled(DialogLink)`
    margin: 20px;
`

// 列表
const PostList = () => (
    <Root>
        <Container>
            {sortedPosts.map((post) => {
                const { date, title, id, description } = post;
                return (
                    <HomeSection title={title} key={id} href={`/posts/${id}`}>
                        <div>{description}</div>
                        <div>{date}</div>
                    </HomeSection>
                )
            })}
        </Container>
    </Root>
)

export default PostList;