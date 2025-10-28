import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());


const API_KEY = process.env.GEMINI_API_KEY;


app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    
    const shortHistory = messages.slice(-10);

   
    const formattedMessages = shortHistory.map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.message }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedMessages }),
      }
    );

    console.log("Response status:", response.status);
    const text = await response.text();
    console.log("Raw response:", text);

    const data = JSON.parse(text);
    const botReply =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response ";

    res.json({ reply: botReply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.listen(5000, () => console.log(" Server running on port 5000"));
