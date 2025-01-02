import bodyParser from "body-parser";
import express from "express";

const PORT = 3000;
const app = express();

app.use(bodyParser.json);
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Backend!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
