
const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容1',
            createTime: 1609574630,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容2',
            createTime: 1609678888,
            author: 'zhangsan'
        }
    ]

}
const getDetail = (id) => {
    return {
        msg: 'getDetail'
    }
}
const newBlog = ((blogData = {}) => {
    console.log('newblogData', blogData);
    return {
        id: 3 // 表示新建博客，插入到数据表里面的id
    }
})
const updateBlog = (id, blogData = {}) => {
    console.log(`${id}:${blogData}`);
    return true;
}
const delBlog = (id) => {
    return true;
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}