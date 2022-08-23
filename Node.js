const dotenv = require("dotenv")

dotenv.config()
console.log(process.env)

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coding-blog-t0xf0.mongodb.net/<dbname>`