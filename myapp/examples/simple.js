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

client.set("test", "test_value", redis.print);
client.hset("hashtest", "key1", "value1", redis.print);
client.hget("hashtest", "key2", redis.print);
console.log('***')
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
});

console.log("*****");

// So instead of writing client.get('foo', cb); you have to write:
return client.getAsync('test').then(function(res) {
    console.log(res); 
    // client.quit();
});
