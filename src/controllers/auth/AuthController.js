// import bcrypt from "bcrypt";
// import prisma from "../config/db.config.js";
// import jwt from "jsonwebtoken";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DbService = require("../../services/DbService");
const db = require("../../models");
const User = db.users;
class AuthController {
  static async register(data) {
    try {
      const resObj = {};
      const payload = data;
      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);

      const user = await DbService.create(User, payload);

      return Object.assign(resObj, {
        message: "Account created successfully!",
        statusCode: 200,
        user,
      });
    } catch (error) {
      console.log(error);
      const resObj = {};
      // return res
      //   .status(500)
      //   .json({ message: "Something went wrong.pls try again." });
      return Object.assign(resObj, {
        message: "Registration failed",
        statusCode: 500,
      });
    }
  }

  static async login(data) {
    try {
      const { email, password } = data;

      const user = await DbService.findById(User, { email });

      if (user) {
        // *Check both password
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "365d",
        });

        return Object.assign({
          message: "Logged in successfully!",
          access_token: `Authorization ${token}`,
          statusCode: 200,
        });
      }

      return Object.assign({ message: "Invalid credentials", statusCode: 401 });
    } catch (error) {
      return Object.assign({
        message: "Something went wrong.",
        statusCode: 500,
      });
    }
  }

  // static async user(req, res) {
  //   const user = req.user;
  //   return res.status(200).json({ user: user });
  // }
}

module.exports = AuthController;
