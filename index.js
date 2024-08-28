import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});    

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

// netstat -ano | findstr "LISTENING"