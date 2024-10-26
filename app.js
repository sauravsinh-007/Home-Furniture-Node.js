const express = require('express')

const app = express()
const port = 3000
const db = require("./config/db")
const bodyParser = require("body-parser")
const userRoute = require("./routes/userRoute")
const menuroute = require("./routes/menuRoute")
const roleRoute = require("./routes/roleRoute")
const contentRoute = require("./routes/contentRoute")
const carouselRoute = require("./routes/carouselRoute")
const categoryRoute = require("./routes/categoryRoute")
const cors = require('cors');

// app.use(bodyParser.json())

// app.use(express.json())
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb' }));

app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
app.use("/user", userRoute)
app.use("/menu", menuroute)
app.use("/role", roleRoute)
app.use("/content", contentRoute)
app.use("/carousel", carouselRoute)
app.use("/category", categoryRoute)




app.get('/', (req, res) => {
    res.send("Hello Sauravsinh")
})

app.listen(port, () => {
    console.log(`App Listening at http:/localhost:${port}`)
})


