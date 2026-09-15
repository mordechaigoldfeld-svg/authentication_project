import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import usersRouter from './ROUTES/usersRoute.js'

const app = express()

app.use(cors({}))

app.use(express.json())

app.use('/users',usersRouter)


const PORT = process.env.PORT || 3000


app.use((_, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT,()=>{
    console.log(`server runing on http://localhost:${PORT}...`);
    
})