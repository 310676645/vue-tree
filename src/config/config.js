/**
 * Created by songjd on 16/11/25.
 * 基础配置文件
 */

const config = {
    appid: 'wxa68a21de0591e506',
    responseType: 'code',
    baseUrl: 'http://rybtest.weixuehui.cn/mp',
    prefix: 'course_query_',
    scope: 'snsapi_userinfo',
    //apiBase: process.env.NODE_ENV === 'production' ? 'http://rybtest.weixuehui.cn/mp' : 'http://67q7q.free.natapp.cc/dahao/public/mp'
    apiBase: process.env.NODE_ENV === 'production' ? 'http://rybtest.weixuehui.cn/mp' : 'http://mpuc3.free.natapp.cc/dahao/public/mp'
};
export default config;
