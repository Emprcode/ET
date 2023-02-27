import express from "express";
import { createUser, getSingleUser } from "../model/user/UserModel.js";

const router = express.Router();

// create

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await createUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New user created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create user Please try again later",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.errorCode = 200;
      error.message =
        "This email is already in use, Please try with different email";
    }
    next(error);
  }
});

//get
router.post("/login", async (req, res, next) => {
  try {
    const result = await getSingleUser(req.body);

    res.json({
      status: "success",
      message: "success",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
