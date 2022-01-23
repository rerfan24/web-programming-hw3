const db = require("../models");
const User = db.users;
const Note = db.notes;
const Op = db.Sequelize.Op;

// Create and Save new Users
exports.createUsers = (req, res) => {
  if (!req.body.username || ! req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const user = {
    username: req.body.username,
    password: req.body.password,
    isAdmin: req.body.isAdmin ? req.body.isAdmin : false
  };

  User.create(user)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the User."
    });
  });
};

// Create and Save new Notes
exports.createNote = (req, res) => {
  const id = req.params.userId;
  console.log(id);
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const note = {
    title: req.body.title,
    body: req.body.body,
    userId: id,
  };

  Note.create(note)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Note."
    });
  });
};

// Find a single User with an id with their notes
exports.findUserById = (req, res) => {
  const id = req.params.userId;

  User.findByPk(id, { include: ["notes"]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Get the notes for a given note id
exports.findNoteById = (req, res) => {
  const id = req.params.noteId;

  Note.findByPk(id, { include: ["user"]})
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Note with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Note with id=" + id
      });
    });
};

//Get all Users include notes
exports.findAll = (req, res) => {
  User.findAll({ include: "notes" })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Update a User by the id in the request
exports.updateUser = (req, res) => {
  const id = req.params.userId;

  if (req.body.username) {
    res.status(400).send({
      message: "You can not change Username!!"
    });
    return;
  }

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating User with id=${id}`
      });
    });
};

// Update a Note by the id in the request
exports.updateNote = (req, res) => {
  const id = req.params.noteId;

  Note.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Note was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Note with id=${id}. Maybe Note was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Note with id=${id}`
      });
    });
};

// Delete a Note by the id in the request
exports.deleteNote = (req, res) => {
  const id = req.params.noteId;

  Note.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Note was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Note with id=${id}. Maybe Note was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Note with id=" + id
      });
    });
};

// Delete a User by the id in the request
exports.deleteUser = (req, res) => {
  const id = req.params.userId;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};