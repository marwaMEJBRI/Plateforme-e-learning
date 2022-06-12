const express = require("express");
const {
  Addpostuler,
  GetPostulation,
  DeletePostulation,
} = require("../controllers/postulerController");
const router = express.Router();

router.post("/addPostulation", Addpostuler);

router.get("/getPostulation", GetPostulation);

router.delete("/deletePostulation/:postId", DeletePostulation);

module.exports = router;
