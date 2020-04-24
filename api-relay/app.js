// These import necessary modules and set some initial variables
require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const convert = require("xml-js");
var cors = require("cors");
const app = express();
const port = 3000;

// Rate limiting - Goodreads limits to 1/sec, so we should too

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

// const limiter = rateLimit({
//   windowMs: 1000,
//   max: 1,
// });

//  apply to all requests
// app.use(limiter);

// Allow CORS from any origin
app.use(cors());

// Routes
app.get("/", (req, res) => res.send("Yummo - Spoonacular Relay Api Server"));

// Our Goodreads relay route!
app.get("/api/search", async (req, res) => {
  try {
    const searchString = `ingredients=${req.query.ingredients}`;

    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_API_KEY}&${searchString}`
    );
    
    
    const results = await response.json();

    return res.json({
      success: true,
      results,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.get("/api/getRecipe", async (req, res) => {
  try {
    const recipeId = req.query.recipeId;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
    );

    const result = await response.json();

    return res.json({
      success: true,
      result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// This spins up our sever and generates logs for us to use.
// Any console.log statements you use in node for debugging will show up in your
// terminal, not in the browser console!
app.listen(port, () =>
  console.log(`Yummo express server listening on port ${port}!`)
);
