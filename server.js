import express from "express";
import dotenv from "dotenv";
import  chats    from "./data/data.js";

const app = express();

dotenv.config();



app.get("/api/chats", (req, res) => {
    res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
   
    //  console.log(req.params.id);
    // agar params ki id chat id se match hoti hai toh vo singlechat hai
    const singlechat = chats.find((c) => c._id === req.params.id)
        res.send(singlechat);

});

// making port private from user because we dont want that user know that our port working on 3000
const port = process.env.port || 3000;// yaa toh env port or yaa 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});