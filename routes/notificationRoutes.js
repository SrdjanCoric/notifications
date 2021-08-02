const express = require("express");
const router = express.Router();

const { verifyUser } = require("../controllers/verificationController");

const {
  createNote,
  sendAggregatedNotification,
  updateNotification,
} = require("../controllers/notificationsController");

router.get("/notifications/:id", sendAggregatedNotification);

router.post("/notifications/", verifyUser, createNote);

router.patch("/notifications/:id", updateNotification);

module.exports = router;
