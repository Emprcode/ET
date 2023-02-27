import UserSchema from "./UserSchema.js"


//create user
export const createUser = (userObj)=> {
    return UserSchema(userObj).save()
}

//get user
export const getSingleUser = (filter)=> {
    return UserSchema.findOne(filter)
}