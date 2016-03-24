
var vo = require('vo');

function a(){
    console.log('a');
}

function b(){
    console.log('b');
    return setTimeout(function(){
        console.log('b done');
    }, 500);
}

function c(){
    console.log('c');
}

vo.pipeline(a, b, c)(function(err, v) {
            console.log('all done');
      });