const express = require("express");
// const {
//   allMessages,
//   sendMessage,
// } = require("../controllers/messageControllers");
const { protect } = require("../middlewares/authMiddlewares");
const { sendMessage, allMessages } = require("../controllers/messageControllers");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
