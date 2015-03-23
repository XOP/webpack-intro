require('script-loader');
require('script!./lib/modernizr.js');

var $ = jQuery = require('./lib/jquery.js');

require(['./lib/foundation.min.js'], function(f){
    $(document).foundation();
});