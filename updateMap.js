// it's the map maintains the relationship between the id and posts info.
// I won't have many posts, so it's a very cheap version to generate some ids.
const matter = require('gray-matter');
const fse = require('fs-extra');
const path = require('path');
const dayjs = require('dayjs');

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
    } catch (e) { }

    // loop through md files in _posts, collect infos from them.
    const mapArr = Object.values(postMap).map(item => item.title);
    const postFileNames = await fse.readdir('./_posts');
    const mdPathList = postFileNames.map((name) => ({
        name,
        path: path.join(process.cwd(), '_posts', name)
    }))

    for (const { name, path } of mdPathList) {
        const mdData = await fse.readFile(path);
        const { data: mdInfo } = matter(mdData);
        const { title, date, skip = false } = mdInfo;
        if (!mapArr.includes(title)) {
            // I don't want the new id to be constant.
            const id = getTopId() + Math.ceil(Math.random() * 10) + 1;
            postMap[id] = {
                id,
                name,
                title,
                date: dayjs(date).format('YYYY-MM-DD'),
                skip
            }
        }
    }

    await fse.writeFile('postMap.json', JSON.stringify(postMap));
}

update();