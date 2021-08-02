const aggregateNotifications = (id, notifications) => {
  const postTitle = findPostTitle(id, notifications);
  return {
    postTitle,
    read: false,
    likes: {
      totalLikes: getTotalLikes(id, notifications),
      usersWhoLiked: findUsersWhoLiked(id, notifications),
    },
    comments: {
      usersAndComments: findUsersAndCommentsForPost(id, notifications),
    },
  };
};

const getTotalLikes = (id, notifications) => {
  return findUsersWhoLiked(id, notifications).length;
};

const findPostTitle = (id, notifications) => {
  for (let i = 0; i < notifications.length; i++) {
    const notification = notifications[i];
    if (isCorrectNotification(notification, id)) {
      return notification["post"]["title"];
    }
  }
};

const findUsersWhoLiked = (id, notifications) => {
  let users = [];
  for (let i = 0; i < notifications.length; i++) {
    const notification = notifications[i];
    if (isCorrectNotification(notification, id) && isLike(notification)) {
      users.push(getUserName(notification));
    }
  }
  return users;
};

const findUsersAndCommentsForPost = (id, notifications) => {
  const usersAndComments = {};
  for (let i = 0; i < notifications.length; i++) {
    const notification = notifications[i];
    if (isCorrectNotification(notification, id) && isComment(notification)) {
      usersAndComments[getUserName(notification)] =
        getCommentText(notification);
    }
  }
  return usersAndComments;
};

const isLike = (notification) => {
  return notification["type"] === "Like";
};

const isComment = (notification) => {
  return notification["type"] === "Comment";
};

const getUserName = (notification) => {
  return notification["user"]["name"];
};

const getCommentText = (notification) => {
  return notification["comment"]["commentText"];
};

const isCorrectNotification = (notification, id) => {
  return notification["post"]["id"] === id;
};

module.exports = {
  aggregateNotifications,
  findPostTitle,
};
