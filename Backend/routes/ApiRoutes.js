let express = require("express")
let multer = require("multer")
let path = require("path")
const taskRouter = express.Router();

const { getData, postData, updateData } = require("../contorllars/Api")

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

taskRouter.get('/task', getData)

taskRouter.post('/posttask', upload.single('Image'), postData)

taskRouter.put('/task/:id', upload.single('Image'), updateData)

module.exports = { taskRouter }
