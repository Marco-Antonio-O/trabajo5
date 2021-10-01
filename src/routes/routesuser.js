const express = require("express")
const router = express.Router()
const {
	usersGet,
	userGet,
	userDelete,
	userPut,
	userPost
} = require("../controllers/userc.js")

router.get("/:id", userGet)
router.get("/", usersGet)
router.delete("/:id", userDelete)
router.put("/:id", userPut)
router.post("/", userPost)

module.exports = router