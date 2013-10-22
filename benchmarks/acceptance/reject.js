(function(){
  var suite = new Benchmark.Suite('reject', config);
  suites.push(suite);

  implementations.forEach(function(implementation){
    var RSVP = requireModule(implementation);
    var reason = new Error();

    suite.add(implementation, function(){
      RSVP.reject(reason);
    });
  });
}());
