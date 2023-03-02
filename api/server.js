import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UserRouter from './src/router/UserRouter.js'
import { connectDb } from './src/configDb/DbConfig.js'
import TransRouter from './src/router/TransRouter.js'
import { userAuth } from './src/middleware/authMiddleware.js'

const app = express()

const PORT = process.env.PORT || 8000

// middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())


//database
connectDb()

//router
app.use("/api/v1/user", UserRouter)
app.use("/api/v1/transaction", userAuth, TransRouter)

//uncaught error handler

app.use("*", (req, res, next)=> {
    const error = {
        errorCode : 404,
        message:"page not found"
    }
    next(error)
})


//global error handler

app.use((error, req, res, next)=> {
    const statusCode = error.errorCode || 500

    res.status(statusCode).json({
        status:"error",
        message: error.message
    })
})

app.listen(PORT, (error)=> {
    error ? console.log(error): console.log(`your server running at http://localhost:${PORT}`)
})