import TransSchema from "./TransSchema.js";

//create user
export const addTrans = (transObj) => {
  return TransSchema(transObj).save();
};

//get user
export const getTransById = (_id) => {
  return TransSchema.find({ _id });
};
//delete

export const deleteTransByIds = (userId, idArg) => {
  return TransSchema.deleteMany({
    userId,
    _id: { $in: idArg },
  });
};
