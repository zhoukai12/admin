/**
 * 自动化工程
 */
// 建立上下文关系
const files = require.context('pages/', true, /\.js$/); // 第一个参数为目录 第二个参数为是否查找子集目录，第三个参数为文件
// 声明组件对象
const components = [];
files.keys().map(item => {
    if (item.includes('./index/') || item.includes('./login/')) { return false; };
    const jsonObj = {}
    const splitFileName = item.split('.');
    const path = `/index/${splitFileName[1].toLowerCase()}`;
    const component = files(item).default;
    jsonObj.path = path;
    jsonObj.component = component;
    components.push(jsonObj)
})

export default components;