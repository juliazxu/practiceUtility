var _ = require("lodash");

// 1. We have an array of Javascript Objects representing some users in the following format:

  const users = [
    { id: 22, username: "martin", active: true},
    { id: 23, username: "max",    active: false},
    { id: 24, username: "linda",  active: false}
  ]

// Please write a function that takes such a list as its first argument and give back only
// the active users (active === true).
    
  const worker = function(/* arguments */) {
    // do work; return stuff
  };
  
  // export the worker function as a nodejs module
  module.exports = worker;