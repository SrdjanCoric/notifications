const findUserName = (notifications, userId) => {
  for (let i = 0; i < notifications.length; i++) {
    let notification = notifications[i];
    if (notification["user"]["id"] === userId) {
      return notification["user"]["name"];
    }
  }
};

module.exports = findUserName;
