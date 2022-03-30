/* eslint-disable import/no-anonymous-default-export */
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const bcrypt = require("bcrypt");
const v4 = require("uuid").v4;
const jwt = require("jsonwebtoken");
const jwtSecret = 'SUPERSECRETE20221';

const saltRounds = 10;
const url = "mongodb+srv://compuTechUser:to2RyjYN9CDkcmyq@cluster0.r1bha.mongodb.net/compuTech?retryWrites=true&w=majority";
const dbName = "compuTech";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function findUser(db, email, callback) {
  const collection = db.collection("user");
  collection.findOne({ email }, callback);
}

function createUser(db, username, email, password, callback) {
  const collection = db.collection("user");
  bcrypt.hash(password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    collection.insertOne(
      {
        userId: v4(),
        username,
        email,
        password: hash,
      },
      function (err, userCreated) {
        assert.equal(err, null);
        callback(userCreated);
      }
    );
  });
}

export default (req, res) => {
  if (req.method === "POST") {
    // signup
    try {
      assert.notEqual(null, req.body.username, "Username required");
      assert.notEqual(null, req.body.email, "Email required");
      assert.notEqual(null, req.body.password, "Password required");
    } catch (bodyError) {
      res.status(403).json({ error: true, message: bodyError.message });
    }

    // verify email does not exist already
    client.connect(function (err) {
      assert.equal(null, err);
      console.log("Connected to MongoDB server =>");
      const db = client.db(dbName);
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;

      findUser(db, email, function (err, user) {
        if (err) {
          res.status(500).json({ error: true, message: "Error finding User" });
          return;
        }
        if (!user) {
          // proceed to Create
          createUser(db, username, email, password, function (creationResult) {
            if (creationResult.length === null || creationResult.length === "null" || creationResult.length < 1) {
              res.status(200).json({creation:true, message:"User created"});
              // res.redirect('/Auth/login')
              return;
            }
            res.status(200).json({creation:true, message:"User created"});
          });
        } else {
          // User exists
          res.status(403).json({ error: true, message: "Username exists" });
          res.status(403).json({ error: true, message: "Email exists" });
          return;
        }
      });
    });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ users: ["John Doe"] });
  }
};
