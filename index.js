import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let userPosts = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/profile", (req, res) => {
    res.render("profile.ejs", { userPosts });
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.post("/submit", (req, res) => {
    if (req.body.userPost.trim() !== "") {
        userPosts.push(req.body.userPost);
    }
    res.redirect("/");
});

app.post("/profile/submit", (req, res) => {
    if (req.body.userPost.trim() !== "") {
        userPosts.push(req.body.userPost);
    }
    res.redirect("/profile");
})

app.post("/edit/:index", (req, res) => {
    const index = req.params.index;
    const updatedPost = req.body.updatedPost
    userPosts[index] = (updatedPost);
    res.redirect("/profile");
})

app.post("/delete/:index", (req, res) => {
    const index = req.params.index;
    userPosts.splice(index, 1);
    res.redirect("/profile");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})