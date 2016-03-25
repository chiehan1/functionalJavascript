var slice = Array.prototype.slice;

function logger(namespace) {

  return function() {
    console.log(namespace + ' ' + slice.call(arguments).join(' '));
    //console.log(slice.call(arguments));
  }

}

module.exports = logger;

/*
var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger
*/