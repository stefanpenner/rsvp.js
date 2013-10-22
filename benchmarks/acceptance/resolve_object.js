(function(){
  var suite = new Benchmark.Suite('resolve_object', config);
  suites.push(suite);

  implementations.forEach(function(implementation){
    var RSVP = requireModule(implementation);
    suite.add(implementation, function(){
      RSVP.resolve({ name: 'Domenic' });
    });
  });
}())
