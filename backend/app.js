
import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes.js';
import 'express-async-errors'
import staffRouter from './routes/staff-routes.js';
import socialRouter from './routes/Social-worker.js';
import DroppedRouter from './routes/Dropeed-Students.js';
import cors from "cors"
const app = express();
app.use(express.json())
app.use(cors())

import fileUpload from 'express-fileupload';
import cloudinary from 'cloudinary'

// middleware 
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

cloudinary.v2.config({

  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
app.use(fileUpload({ useTempFiles: true }));

app.use("/api/user", router)
app.use("/api/staff", staffRouter)
app.use("/api/social", socialRouter)
app.use("/api/dropStudents", DroppedRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

mongoose.connect((process.env.MONGO_URI))
  .then(() => app.listen(4000))
  .then(() => console.log('connected to db and listening to local host 4000'))
  .catch((err) => console.log(err))


