const { exec } = require('../dao/mysql');
const getList = (author, keyword) => {
    // 永远成立，1=1保证sql语句成立，不会报错
    let sql = `select * from blogs where 1=1`
    if (author) {
        sql += ` and author = '${author}'`
    }
    if (keyword) {
        sql += ` and title like '%${keyword}%'`
    }
    sql += ` order by createtime desc;`
    // 返回promise
    return exec(sql);
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