"use strict";
const UserModel = require('../model/user');
const getTestInfo = async ctx =>{
    let id  = ctx.query.id;
    let userInfo = await UserModel.getTestById(id);
    ctx.body = userInfo;
    ctx.status = 200;
};
const getUserInfo = async ctx =>{
    let id  = ctx.query.id;
    let userInfo = await UserModel.getUserInfoById(id);
    ctx.body = userInfo;
    ctx.status = 200;
};
const getUserTodo = async ctx =>{
    let id  = ctx.query.id;
    let periodsTodo = await UserModel.getUserTodo(id);
    ctx.body = periodsTodo;
    ctx.status = 200;
};


module.exports.routers = {
    'GET /getTestInfo':getTestInfo,
    'GET /getUserInfo':getUserInfo,
    'GET /getUserTodo':getUserTodo,

};
module.exports.securedRouters = {

};