(function(){
  var suite = new Benchmark.Suite('sequence_empty', config);
  suites.push(suite);

  var SEQUENCE_COUNT = 1000;

  implementations.forEach(function(implementation){
    var Promise = lookupFeature(implementation, 'Promise');

    promise = new Promise(function(resolve, rejection){
      resolve(1);
    });

    suite.add(implementation, function(){
      for (var i = 0; i < SEQUENCE_COUNT; i ++) {
        promise = promise.then();
      }
    });
  });
}());
