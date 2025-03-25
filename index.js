import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server Status</title>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Josefin Sans', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background: linear-gradient(to right, #00c6ff, #0072ff);
                color: white;
                text-align: center;
            }
            .container {
                padding: 20px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h1 {
                font-size: 2.5rem;
                margin-bottom: 10px;
            }
            p {
                font-size: 1.2rem;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Server is Running Successfully! 🎉</h1>
            <p>Your Express server is up and running on port 8888.</p>
        </div>
    </body>
    </html>
  `);
});

app.listen(8888, () => {
  console.log("Server is running on port 8888"); 
});
