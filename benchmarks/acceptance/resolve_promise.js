(function(){
  var suite = new Benchmark.Suite('resolve promise', config);
  suites.push(suite);

  implementations.forEach(function(implementation){
    var RSVP = requireModule(implementation);
    var promise = RSVP.resolve(1);

    suite.add(implementation, function(){
      RSVP.resolve(promise);
    });
  });
}());
