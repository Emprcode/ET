import express from "express";
import { addTrans, getTransById } from "../model/trans/TransModel.js";

const router = express.Router();

// create

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await addTrans(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New transaction added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add transaction Please try again later",
        });
  } catch (error) {
   
    next(error);
  }
});

//get
router.get("/", async (req, res, next) => {
  try {
    const result = await getTransById();

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
