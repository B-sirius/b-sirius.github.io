// 根据_posts目录生成postMap.json
const matter = require('gray-matter');
const fse = require('fs-extra');
const path = require('path');
const dayjs = require('dayjs');

// md是markdown的原始内容，为了能够正确相对正确的展示，我希望获得第一段纯文本内容作为描述，不要标题、列表之类的
// https://stackoverflow.com/a/69656654
function getDescription(md) {
    const regex = {
        title: /^#\s+.+/,
        heading: /^#+\s+.+/,
        custom: /\$\$\s*\w+/,
        ol: /\d+\.\s+.*/,
        ul: /\*\s+.*/,
        task: /\*\s+\[.]\s+.*/,
        blockQuote: />.*/,
        table: /\|.*/,
        image: /!\[.+\]\(.+\).*/,
        url: /\[.+\]\(.+\).*/,
        codeBlock: /`{3}\w+.*/,
    };

    const isTitle = (str) => regex.title.test(str);
    const isHeading = (str) => regex.heading.test(str);
    const isCustom = (str) => regex.custom.test(str);
    const isOl = (str) => regex.ol.test(str);
    const isUl = (str) => regex.ul.test(str);
    const isTask = (str) => regex.task.test(str);
    const isBlockQuote = (str) => regex.blockQuote.test(str);
    const isImage = (str) => regex.image.test(str);
    const isUrl = (str) => regex.url.test(str);
    const isCodeBlock = (str) => regex.codeBlock.test(str);

    if (!md) return "";
    const tokens = md.split("\n").filter(item => !!item);
    for (let i = 0; i < tokens.length; i++) {
        if (
            isTitle(tokens[i]) ||
            isHeading(tokens[i]) ||
            isCustom(tokens[i]) ||
            isOl(tokens[i]) ||
            isUl(tokens[i]) ||
            isTask(tokens[i]) ||
            isBlockQuote(tokens[i]) ||
            isImage(tokens[i]) ||
            isUrl(tokens[i]) ||
            isCodeBlock(tokens[i])
        )
            continue;

        return `${tokens[i].slice(0, 100)}......`;
    }
    return ""
}

// 映射id于post信息
// 目前博客不多，采用了一个简单的id生成方式（生成不连续的id）
async function update() {
    let postMap = {};

    const getTopId = () => {
        const keys = Object.keys(postMap);
        if (!keys.length) {
            return 0;
        }
        return Math.max(...keys.map(key => parseInt(key)))
    };

    // init postMap from postMap.json
    try {
        const rawMap = await fse.readFile('postMap.json');
        if (rawMap) {
            postMap = JSON.parse(rawMap);
        }
    } catch (e) {
        // continue regardless of error
    }

    // 遍历_posts目录中的md，获取相关的信息
    const postList = Object.values(postMap);
    const titleList = postList.map(item => item.title);
    const postFileNames = await fse.readdir('./_posts');
    const mdPathList = postFileNames.map((name) => ({
        name,
        path: path.join(process.cwd(), '_posts', name)
    }))

    for (const { name, path } of mdPathList) {
        const mdData = await fse.readFile(path);
        const { data: mdInfo, content } = matter(mdData);
        const { title, date, skip = false } = mdInfo;

        let id;
        if (!titleList.includes(title)) {
            // 我希望新id是不连续的
            id = getTopId() + Math.ceil(Math.random() * 10) + 1;
        } else {
            id = postList.find(item => item.title === title)?.id;
        }

        if (id) {
            postMap[id] = {
                id,
                name,
                title,
                date: dayjs(date).format('YYYY-MM-DD'),
                skip,
                description: getDescription(content)
            }
        }
    }

    await fse.writeFile('postMap.json', JSON.stringify(postMap));
}

update();