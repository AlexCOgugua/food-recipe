const express = require("express");
const { getRecipes, getRecipesById, addRecipes, editRecipes, deleteRecipes, upload } = require("../controller/recipe");
const verifyToken = require("../middleware/auth");
const router = express.Router();

router.get("/", getRecipes);    //Get all recipes
router.get("/:id", getRecipesById);    //Get a recipe by id
router.post("/", upload.single('file'), verifyToken, addRecipes);    //Add a new recipe 
router.put("/:id", upload.single('file'), editRecipes);    //Update a recipe by id
router.delete("/:id", deleteRecipes);    //Delete a recipe by id

module.exports = router;    // Export the router object
