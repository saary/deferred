var Deferred = function() {
  if (!(this instanceof Deferred)) {
    return new Deferred();
  }

  this.promise = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });

  return this;
};

module.exports = Deferred;
