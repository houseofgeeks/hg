const express = require("express");
const router = express.Router();

const auth = require("../util/auth");
const eventController = require("../controllers/eventController")

router.post("/", auth, eventController.create_event);
router.get("/", eventController.get_event);
router.delete("/:id", auth, eventController.delete_event);
// Should we allow updation to events, requires disussion
router.put("/:id", auth, eventController.update_event);

module.exports = router;
