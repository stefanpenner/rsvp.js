(function(){
  var suite = new Benchmark.Suite('creation', config);
  suites.push(suite);

  implementations.forEach(function(implementation){
    var Promise = lookupFeature(implementation, 'Promise');

    suite.add(implementation, function(){
      new Promise(function(resolve, reject){ });
    });
  });
}());
