// it's the map maintains the relationship between the id and postsname.
// I won't have many posts, so it's a very cheap version to generate some ids.
const matter = require('gray-matter');
const fs = require('fs');

let postMap = {
};

try {
    const rawMap = fs.readFileSync('postMap.json');
    if (rawMap) {
        postMap = JSON.parse(rawMap);
    }
} catch (e) {}

const mapArr = Object.values(postMap).map(item => item.title);
const postFileNames = fs.readdirSync('_posts');

let topId = Math.max(Object.keys(postMap).map(key => parseInt(key)));

postFileNames.forEach((name) => {
    // the ids of existing posts should not change during each build.
    if (!mapArr.includes(name)) {
        // I don't want the new id to be constant.
        const id = topId + Math.ceil(Math.random() * 10) + 1;
        postMap[id] = {
            fileName: name
        }
        topId = id;
    }
});

fs.writeFileSync('postMap.json', JSON.stringify(postMap));