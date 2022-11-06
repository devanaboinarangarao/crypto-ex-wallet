const express = require("express");
const cors = require("cors");
const {join} = require("path");
const appRoutes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 8080;

const corsConfig = {
    origin: ['http://localhost:4200'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public/dist'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root:__dirname});
});
app.use('/api', appRoutes);
app.use('/', (req, res) => {
    res.send("page not found");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});