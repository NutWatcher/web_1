/**
 * Created by yzjf on 2014/6/12.
 */
exports.config = {
    db: 'mongodb://127.0.0.1/test',
    session_secret: 'lyy',
    auth_cookie_name: 'lyy',
    admins: { lyy: true },
    file_path: "D:/nodejsFile",
    articleList:{
        about:{
            code : "web01_jieshao"
        },
        caseList:{
            code : "web01_anli"
        }
    }
};