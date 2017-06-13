import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
	//for production purpose - arif
} else {
   // Development
   Error['stackTraceLimit'] = Infinity;
   require('zone.js/dist/long-stack-trace-zone');
}