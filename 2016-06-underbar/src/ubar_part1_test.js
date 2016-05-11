// function(value, index, array)

// ------- REDUCE ------- 
var test = [1, 2, 3, 4, 5]
//var test = [5, 2];

/*var testFcn = function(total, number){
  console.log("Total, Number: " + total + ", " + number);
  return total + number;
}*/

var testFcn = function(max, number){
  console.log("max, number: " + max + ", " + number);

  if (number > max) {
  	return number;
  } else {
  	return max;
  }
  
}

var reduc = function(collection, iterator, accumulator) {
  var i = accumulator ? 0 : 1;
  var end = accumulator ? accumulator: collection[0];

  for (i; i < collection.length; i++) {
  	end = iterator(end, collection[i]);
  }

  return end;

}

console.log("Accumulator is Zero:")
console.log(reduc(test, testFcn, 0));

console.log("\nNo Accumulator:")
console.log(reduc(test, testFcn));

console.log("\nAccumulator is 10:")
console.log(reduc(test, testFcn, 10));


// ------- UNIQUE ------- 
/* var unique = function(array) {

    var arr = [ array[0] ];

    for (var i = 1; i < array.length; i++) {
      
      var match = false;

      for (var j = 0; j < arr.length; j++) {

        if ( array[i] === arr[j] ) { match = true; }
      }

      if (!match) { arr.push(array[i]); }
    }

    return arr;
}

console.log(unique([2, 3, 4, 2, 6, 6])); */


// ------- FOR EACH ------- 
/*

var eachFcn = function(collection, iterator) {

    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }

    } else {

      for (var key in collection) {
        collection[key] = iterator(collection[key]);
      }
    }

}

var iterations = [];

var letterTest = function(letter, index) {
    iterations.push([letter, index]);
};

eachFcn(['a', 'b', 'c'], letterTest);
console.log(iterations); 

*/
