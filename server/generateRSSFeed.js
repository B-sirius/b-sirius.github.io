// 更新RSS订阅源
const fs = require('fs');
const RSS = require('rss');
const dayjs = require('dayjs');

const postMap = require('../postMap.json');

function generateRssFeed() {
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

    const site_url = 'https://b-sirius.github.io';

    const feedOptions = {
        title: 'LWDW! posts | RSS Feed',
        site_url,
        feed_url: `${site_url}/rss.xml`,
        pubDate: `${dayjs().format('YYYY-MM-DD')} 08:00:00`
    };

    const feed = new RSS(feedOptions);

    for (const item of sortedPosts) {
        const { date, title, id, description } = item;
        feed.item({
            title,
            description,
            url: `${site_url}/posts/${id}`,
            date
        })
    }

    fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}

generateRssFeed();