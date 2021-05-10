'use strict';

module.exports.randomNumberGeneration = (event) => {
  const randonNumber = parseInt(Math.random() * 100);
  console.log("Random number you've generated is: ", randonNumber);
  return randonNumber;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
