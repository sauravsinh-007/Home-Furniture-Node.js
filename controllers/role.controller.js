const roleService = require('../services/roleServices');
const express = require("express")


const getRole = async (req, res) => {
    try {
        await roleService.getAllRole(req, res);
    } catch (err) {
        console.error(err);
    }
};


const createRole = async (req, res) => {
    console.log('req', req.body)
    try {
        await roleService.createRole(req, res);
    } catch (err) {
        console.error(err);
    }
};

const updateRole = async (req, res) => {
    try {
        await roleService.updateRole(req, res);
    } catch (err) {
        console.error(err);
    }
};

const deleteRole = async (req, res) => {
    try {
        await roleService.deleteRole(req, res);
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getRole, createRole, updateRole, deleteRole };
