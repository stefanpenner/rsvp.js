var Benchmark = require('benchmark');

require('./loader.js');
require('./builds/rsvp-2.0.4.amd.js');
require('./builds/rsvp-2.0.4-test.amd.js');
require('./benchmarks.js');
require('./acceptance/creation.js');
require('./acceptance/reject.js');
require('./acceptance/resolve_number.js');
require('./acceptance/resolve_object.js');
require('./acceptance/resolve_promise.js');
require('./acceptance/sequence_empty.js');
