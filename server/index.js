import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3001;

app.get("/api", (req, res) => {
    res.json({ "users": ["user1", "user2", "user3"] });
});

app.get("/", (req, res) => {

})

app.listen(port, () => {
    console.log(`server up and running on port ${port}!`);
})