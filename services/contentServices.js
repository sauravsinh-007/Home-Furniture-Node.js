const content = require("../models/content.model")
const express = require('express');

const getAllContent = async (req, res) => {
    try {
        const userdata = await content.find()
        console.log("Content Data get Successfully");
        res.status(200).json(userdata)

    } catch (err) {
        console.log('err', err)
        res.status(500).json({ error: "Internal server error" })

    }
}

const createContent = async (req, res) => {
    try {
        const contentData = req.body
        console.log('userData', contentData)

        const newContent = new content(contentData)
        const response = await newContent.save()
        console.log("New Content Data Saved")
        res.status(200).json(response)

    } catch (err) {
        console.log('err', err)
        res.status(501).json({ error: "Internal Server Error" })

    }
}

const updateContent = async (req, res) => {
    const contentID = req.params.id;
    const updatedData = req.body;
    console.log('updatedData', updatedData)

    try {
        if (updatedData.email) {
            const existingUser = await content.findOne({ email: updatedData.email, _id: { $ne: contentID } });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }
        }

        const updatedContent = await content.findByIdAndUpdate(contentID, updatedData, { new: true });
        if (!updatedContent) {
            return res.status(404).json({ error: 'Content not found' });
        }

        res.status(200).json(updatedContent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user' });
    }
};


const deleteContent = async (req, res) => {
    try {
        const contentID = req.params.id;
        console.log('userID', contentID);

        const response = await content.findByIdAndDelete(contentID);

        if (!response) {
            return res.status(404).json({
                error: 'Content not found'
            });
        }

        console.log("User Data Deleted");
        return res.status(200).json({ message: "User Data Deleted Successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }

}

module.exports = { getAllContent, createContent, updateContent, deleteContent }