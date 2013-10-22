var suites = [];
var implementations = ['rsvp-test', 'rsvp', 'when', 'bluebird'];

var adapters = {
  rsvp: {
    Promise: requireModule('rsvp').Promise
  },
  'rsvp-test': {
    Promise: requireModule('rsvp-test').Promise
  },
  when: {
    Promise: requireModule('when').promise
  },
  bluebird: {
    Promise: requireModule('bluebird')
  }
};


function lookupFeature(implementation, thing) {
  return adapters[implementation][thing]
}

var config = {
  onCycle: function(event) {
    console.log(event.currentTarget.name + ':', String(event.target));
  }
};

function run(){
  console.log('queueing');
  suites.forEach(function(suite){
    suite.run({
      async: true,
      queued: true
    });
  });
}
