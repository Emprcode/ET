import { getSingleUser } from "../model/user/UserModel.js"


export const userAuth = async(req, res, next)=> {
    try {
        const {Authorization} = req.headers

        const user = await getSingleUser({_id: Authorization})

        if (user?._id) {
            return next()
            
        }
        re.json({
            status:"error",
            message:"Unauthorize"
        })
    } catch (error) {
        next(error)
        
    }
}