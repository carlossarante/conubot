const processCheck = require('./outputParser').processCheck;

const cronTaskChecker = function (interval = 5000) {
  setInterval(() => {
    console.log("Nginx status: ", processCheck('nginx'); );
  }, interval);
};

cronTaskChecker();

// module.exports = cronTaskChecker;
