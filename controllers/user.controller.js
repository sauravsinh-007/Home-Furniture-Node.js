const userService = require('../services/userService');
const express = require("express")


const getUser = async (req, res) => {
    try {
        await userService.getAllUser(req, res);
    } catch (err) {
        console.error(err);
    }
};

const LoginUser = async (req, res) => {
    // console.log('req', req.body)

    try {
        await userService.LoginUser(req, res);
    } catch (err) {
        console.error(err);
    }
};

const createUser = async (req, res) => {
    // console.log('req', req.body)

    try {
        await userService.createUser(req, res);
    } catch (err) {
        console.error(err);
    }
};

const updateUser = async (req, res) => {
    try {
        await userService.updateUser(req, res);
    } catch (err) {
        console.error(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req, res);
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getUser, createUser, updateUser, deleteUser, LoginUser };
