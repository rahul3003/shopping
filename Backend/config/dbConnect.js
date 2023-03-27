const { default: mongoose } = require("mongoose")

const dcConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database error!!!!!")
        throw new Error(error)
    }
}

module.exports = { dcConnect }