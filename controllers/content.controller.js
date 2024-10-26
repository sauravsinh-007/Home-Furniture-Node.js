const contentService = require("../services/contentServices")

const getContent = async (req, res) => {
    try {
        await contentService.getAllContent(req, res);
    } catch (err) {
        console.error(err);
    }
};


const createContent = async (req, res) => {
    console.log('req', req.body)
    try {
        await contentService.createContent(req, res);
    } catch (err) {
        console.error(err);
    }
};

const updateContent = async (req, res) => {
    try {
        await contentService.updateContent(req, res);
    } catch (err) {
        console.error(err);
    }
};

const deleteContent = async (req, res) => {
    try {
        await contentService.deleteContent(req, res);
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getContent, createContent, updateContent, deleteContent };
