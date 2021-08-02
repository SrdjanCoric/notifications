const findUserName = require("../helpers/findUserName");
const isValidPost = require("../helpers/validations");
const notifications = require("../lib/notifications.json");

const {
  findPostTitle,
  aggregateNotifications,
} = require("../helpers/aggregateNotifications");

const createNotification = require("../helpers/createNotification");

const createNote = (req, res) => {
  const { postId, type, commentText } = req.body;

  const userId = req.user;
  const userName = findUserName(notifications, userId);

  if (isValidPost(postId, notifications)) {
    const postTitle = findPostTitle(postId, notifications);
    const notification = createNotification(
      postId,
      postTitle,
      type,
      commentText,
      userId,
      userName
    );
    notifications.push(notification);
    return res.status(201).json(notification);
  } else {
    return res.status(404).send("Post not found");
  }
};

const sendAggregatedNotification = (req, res) => {
  const { id } = req.params;
  res.json(aggregateNotifications(id, notifications));
};

const updateNotification = (req, res) => {
  const { id } = req.params;
  const { read } = req.body;
  let notification = aggregateNotifications(id, notifications);
  notification["read"] = read;
  res.json(notification);
};

exports.createNote = createNote;
exports.sendAggregatedNotification = sendAggregatedNotification;
exports.updateNotification = updateNotification;
