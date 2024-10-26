const categoryService = require("../services/categoryServices")
const express = require("express")

const getAllCategory = async (req, res) => {
    try {
        await categoryService.getAllCategory(req, res)
    } catch (err) {
        console.log(err)
    }
}

const createCategory = async (req, res) => {
    try {
        await categoryService.createCategory(req, res)
    } catch (err) {
        console.log(err)
    }
}

const updateCategory = async (req, res) => {
    try {
        await categoryService.updateCategory(req, res)
    } catch (err) {
        console.log(err)
    }
}

const deleteCategory = async (req, res) => {
    try {
        await categoryService.deleteCategory(req, res)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { getAllCategory, createCategory, updateCategory, deleteCategory }