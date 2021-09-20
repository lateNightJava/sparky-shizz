const headTracker = require('./script1');
const mouthTracker = require('./script2');

const main = async () => {
  headTracker();
  mouthTracker();
};

main();