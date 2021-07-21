const router = require("express").Router();
const { Post } = require("../models/Posts");

// add data into the database
router.post("/add", (req, res) => {
    const post = new Post(req.body);
    post.save((err) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, post });
    });
});

// retrive all the data from the database
router.get("/", (req, res) => {
    Post.find().exec((err, posts) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, posts: posts });
    });
});

// update the data
router.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, post) => {
            if (err) return res.status(400).json({ success: false, err });
            return res.status(200).json({ success: true, post });
        }
    );
});

// view data by id
router.get("/detail/:id", (req, res) => {
    let id = req.params.id;

    Post.findById(id, function (err, post) {
        if (err) return res.json({ success: false, error: err });
        return res.status(200).json({ success: true, post });
    });
});

// delete data
router.delete("/delete/:id", (req, res) => {
    Post.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if (err) {
            res.send(err);
        }
        return res.json(deleteItem);
    });
});

module.exports = router;