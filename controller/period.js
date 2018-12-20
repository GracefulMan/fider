"use strict";
const PeriodModel = require('../model/period');
const addPeriod = async ctx =>{
    let uid  = ctx.request.body.uid;
    let userphone = ctx.request.body.userphone;
    let timeid = ctx.request.body.timeid;
    let year = ctx.request.body.year;
    let month = ctx.request.body.month;
    let day = ctx.request.body.day;
    let time = ctx.request.body.time;
    let car = ctx.request.body.car;
    let addPeriod = await PeriodModel.addPeriod(uid, userphone, timeid, year, month, day, time, car);
    let result = {};
    result['addPeriod'] = addPeriod;
    result['msg'] = '添加成功';
    ctx.body = result;
    ctx.status = 200;
};
const deletePeriod = async ctx =>{
    let id  = ctx.request.body.id;
    let deletePeriod = await PeriodModel.deletePeriod(id);
    let result = {};
    result['deletePeriod'] = deletePeriod;
    result['msg'] = '取消成功';
    ctx.body = result;
    ctx.status = 200;
};
// 用户待完成 只包含待完成
const periodsTodoOnly = async ctx =>{
    let id  = ctx.query.id;
    ctx.body = await PeriodModel.getUserTodoOnly(id);
    ctx.status = 200;
};
// 用户待完成 包含待完成和等待中
const periodsTodoAll = async ctx =>{
    let id  = ctx.query.id;
    ctx.body = await PeriodModel.getUserTodoAll(id);
    ctx.status = 200;
};




module.exports.routers = {
    'POST /addPeriod':addPeriod,
    'POST /deletePeriod':deletePeriod,

    'GET /periods/todo/only': periodsTodoOnly,
    'GET /periods/todo/all': periodsTodoAll,

};
module.exports.securedRouters = {

};