//const uuidv1 = require("uuid/v1"); //uuidv1();

//  .js
// ========
module.exports = {
  get: function() {
    const uuidv1 = require("uuid/v1"); //uuidv1();

    var idug2 = uuidv1();
  
    return idug2;
  },
  undashed: function() {const uuidv1 = require("uuid/v1"); //uuidv1();

    var idug2 = "";
    idug2 = uuidv1();
    return idug2
      .replace("-", "")
      .replace("-", "")
      .replace("-", "")
      .replace("-", "");
  },
  undash: function() {const uuidv1 = require("uuid/v1"); //uuidv1();

    var idug2 = "";
    idug2 = uuidv1();
    return idug2
      .replace("-", "")
      .replace("-", "")
      .replace("-", "")
      .replace("-", "");
  },
  un: function() {const uuidv1 = require("uuid/v1"); //uuidv1();

    var idug2 = "";
    idug2 = uuidv1();
    return idug2
      .replace("-", "")
      .replace("-", "")
      .replace("-", "")
      .replace("-", "");
  },
  short: function() {const uuidv1 = require("uuid/v1"); //uuidv1();

    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
};
