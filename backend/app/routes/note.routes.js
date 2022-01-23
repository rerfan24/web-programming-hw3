module.exports = app => {
    const notes = require("../controllers/note.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", notes.createUsers);

    // Create a new Note
    router.post("/note/:userId", notes.createNote);
  
    // Retrieve all Users with their Notes 
    router.get("/:userId", notes.findUserById);
  
    // Retrieve a single Note with id
    router.get("/note/:noteId", notes.findNoteById);

    // Retrive all users with their notes
    router.get("/", notes.findAll);
  
    // Update a User by the id in the request
    router.put("/:userId", notes.updateUser);

    // Update a Note by the id in the request
    router.put("/note/:noteId", notes.updateNote);

    // Delete a Note by the id in the request
    router.delete("/note/:noteId", notes.deleteNote);

    // Delete a User by the id in the request
    router.delete("/:userId", notes.deleteUser);

    app.use("/api/user", router);
  };