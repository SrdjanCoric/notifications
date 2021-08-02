const { v4: uuidv4 } = require("uuid");
const createNotification = (
  postId,
  postTitle,
  type,
  commentText,
  userId,
  userName
) => {
  if (type === "Like") {
    return {
      type,
      read: false,
      post: {
        id: postId,
        title: postTitle,
      },
      user: {
        id: userId,
        name: userName,
      },
    };
  } else {
    return {
      type,
      read: false,
      post: {
        id: postId,
        title: postTitle,
      },
      comment: {
        id: uuidv4(),
        commentText,
      },
      user: {
        id: userId,
        name: userName,
      },
    };
  }
};

module.exports = createNotification;
