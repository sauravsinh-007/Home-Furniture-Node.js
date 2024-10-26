const category = require("../models/category.model")
const express = require("express")

const getAllCategory = async (req, res) => {
    try {
        const categoryData = await category.find()
        console.log("categoryData get successfully")
        res.status(200).json(categoryData)


    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }

}

const createCategory = async (req, res) => {
    try {
        const categoryData = req.body
        const newCategoryData = new category(categoryData)

        const response = await newCategoryData.save()
        console.log("new category data saved")
        res.status(201).json(response)

    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }
}

const updateCategory = async (req, res) => {

    const categoryId = req.params.id
    const updateCategoryData = req.body

    try {
        const updateCategory = await category.findByIdAndUpdate(categoryId, updateCategoryData, { new: true });
        if (!updateCategory) {
            return res.status(400).json({ error: "Category not found" })
        }
        res.status(200).json(updateCategory)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal Server Error" });

    }
}

const deleteCategory = async (req, res) => {

    try {
        const categoryID = req.params.id

        const response = await category.findByIdAndDelete(categoryID)
        if (!response) {
            return res.status(401).json({ error: "Category not found" })
        }
        console.log("category data delete")
        res.status(201).json({ message: "category data delete successfully" })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { getAllCategory, createCategory, updateCategory, deleteCategory }