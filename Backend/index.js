const express = require("express")
const app = express()
const cors = require("cors")
const port = 9000
app.use(express.json())
app.use(cors())

app.use("/uploads",express.static("uploads"))

const {taskRouter} = require("./routes/ApiRoutes")
app.use('/api',taskRouter)


app.listen(port,()=>{
    console.log(`server is start http//localhost:${port}`)
})

