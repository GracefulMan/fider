'use strict';
const connection=require('../index');
const getMonthInfoTodo=(year, month)=>{
    let _sql = `SELECT DISTINCT year, month, day FROM time_schedule WHERE year = ${year} && month = ${month} && status = 1`;
    return connection.query(_sql);
};
const getMonthInfoAll=(year, month)=>{
    let _sql = `SELECT DISTINCT year, month, day FROM time_schedule WHERE year = ${year} && month = ${month} && (status = 1 || status = 2)`;
    return connection.query(_sql);
};
const getDayTodo=(year, month, day)=>{
    let _sql = `SELECT * FROM time_schedule WHERE year = ${year} && month = ${month} && day = ${day} && status = 1`;
    return connection.query(_sql);
};
const getUserDayTodo=(year, month, day, uid)=>{
    let _sql = `SELECT * FROM rider_period WHERE uid = ${uid} && year = ${year} && month = ${month} && day = ${day} && (status = 1 || status = 3)`;
    return connection.query(_sql);
};

module.exports={
    getMonthInfoTodo,
    getMonthInfoAll,
    getDayTodo,
    getUserDayTodo
};