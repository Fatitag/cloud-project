const Student = require('../models/student');
const fs = require('fs');

exports.createStudent = (req, res, next) => {
  const studentObject = JSON.parse(req.body.student);
  delete studentObject._id;
  delete studentObject._userId;
  const student = new Student({
      ...studentObject,
      userId: req.auth.userId,
  });

  student.save()
  .then(() => { res.status(201).json({message: 'student enregistré !'})})
  .catch(error => { res.status(400).json( { error })})
};

exports.getOneStudent = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (student) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(401).json({
        error: error
      });
    }
  );
};

exports.modifyStudent = (req, res, next) => {
  const studentObject = req.file ? {
      ...JSON.parse(req.body.student),
  } : { ...req.body };

  delete studentObject._userId;
  Thing.findOne({_id: req.params.id})
      .then((student) => {
          if (student.userId != req.auth.userId) {
              res.status(401).json({ message : 'Not authorized'});
          } else {
              Student.updateOne({ _id: req.params.id}, { ...studentObject, _id: req.params.id})
              .then(() => res.status(200).json({message : 'student modifié!'}))
              .catch(error => res.status(401).json({ error }));
          }
      })
      .catch((error) => {
          res.status(400).json({ error });
      });
};
exports.deleteStudent = (req, res, next) => {
  Student.findOne({ _id: req.params.id})
      .then(student => {
          if (student.userId != req.auth.userId) {
              res.status(401).json({message: 'Not authorized'});
          } else {
              fs.unlink(`images/${filename}`, () => {
                  Student.deleteOne({_id: req.params.id})
                      .then(() => { res.status(200).json({message: 'student supprimé !'})})
                      .catch(error => res.status(401).json({ error }));
              });
          }
      })
      .catch( error => {
          res.status(500).json({ error });
      });
};
exports.getAllStuff = (req, res, next) => {
  Student.find().then(
    (students) => {
      res.status(200).json(students);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};