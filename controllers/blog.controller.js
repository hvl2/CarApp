/* In this file, you will create all the code needed to perform CRUD operations using Mongoose. */
const Blog = require("../models/blog.model.js");
const mongoose = require("mongoose");

exports.create = function (req, res) {
  // Create and Save a new blog
  let blogModel = new Blog({
    title: "Example code",
    text: "This is to demonstrate how to add data to a database using Mongoose",
    author: "Hyperion",
  });
  blogModel.save(function (err, data) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Some error occurred while creating the blog." });
    } else {
      console.log(data);
      res.send("The blog has been added");
    }
  });
};

exports.findAll = function (req, res) {
  Blog.find(function (err, blogs) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Some error occurred while retrieving blogs." });
    } else {
      res.send(blogs);
    }
  });
};

exports.updateByAuthor = function (req, res) {
  let query = { author: "Hyperion" };
  Blog.findOneAndUpdate(query, { author: "Hyperon" }, { new: true }, function (
    err,
    doc
  ) {
    if (err) {
      console.log("Something wrong when updating data!");
      res.send("ERROR: Not Updated. " + err);
    }
    res.send("Updated");
  });
};

exports.deleteBlogsByAuthor = function (req, res) {
  Blog.findOneAndRemove({ author: "Hyperion" }, function (err) {
    if (err) {
      console.log("ERROR: Blogs NOT removed. " + err);
      res.send("ERROR: Blogs NOT removed. " + err);
    }
    res.send("Blogs removed");
  });
};
