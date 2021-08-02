const isValidPost = (id, notifications) => {
  for (let i = 0; i < notifications.length; i++) {
    const notification = notifications[i];
    if (notification["post"]["id"] === id) {
      return true;
    }
  }
  return false;
};

module.exports = isValidPost;
