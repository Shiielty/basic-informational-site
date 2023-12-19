const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const option = {
  root: path.join(__dirname, "./"),
};

app.get("/", (req, res) => {
  const fileName = "index.html";
  res.sendFile(fileName, option, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.get("/about", (req, res) => {
  const fileName = "about.html";
  res.sendFile(fileName, option, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.get("/contact-me", (req, res) => {
  const fileName = "contact-me.html";
  res.sendFile(fileName, option, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

// handle 404 Error page
app.use((req, res, next) => {
  res.status(404);
  res.sendFile("404.html", option, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Sent: 404.html`);
    }
  });
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on port: ${port}`);
});

