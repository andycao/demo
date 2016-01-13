var redis = require("redis");
var Promise = require("bluebird");

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

var client = redis.createClient({
    port: 6379,
    host: '127.0.0.1'
});

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});
var obj = {
    name: 'rob',
    age: 27,
    color: 'black'
};

var keys = Object.keys(obj);

for(var i = 0; i < keys.length; i++){

    var key = keys[i];

    client.hset("test", key, obj[key],redis.print);
}

client.hgetallAsync('test').then(function(res) {
    console.log(res);
    client.quit();
});

