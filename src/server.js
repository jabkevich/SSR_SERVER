import express from "express";

import Routers from "./routers";
import React from "react";

import HTML from "./HTML";

const PORT = 3001;
const app = express();

const context = {};

app.use(express.static("dist"));

app.get("*", (req, res) => {
    return res.send(HTML({url: "/404"}, context))
})

Routers.forEach(route => {
    app.get(route.url, (req, res) => {

        res.send(HTML(req, context));
    });
});
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));


//view-source: