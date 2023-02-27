import mongoose from 'mongoose'


const MongoURL = `mongodb://127.0.0.1:27017/eth`
 export const connectDb = ()=> {
    try {
        mongoose.set('strictQuery', true)
        const conn = mongoose.connect(MongoURL)
        conn && console.log(`mongo connected`)


    } catch (error) {
        console.log(error)
        
    }
}