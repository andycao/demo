var redis = require('redis');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);

var client = redis.createClient({
    port: 6379,
    host: '127.0.0.1'
});

client.on("error", function (err) {
    console.log("Error " + err);
});


//add userid to redis
//add userid to set
//and incr userid's value
var addUserId = function(userid){
    
    client.saddAsync('myset', userid).then(function(reply){
        console.log('sadd myset ' + userid);
    })
    .then(function(){
        console.log('incr ' + userid);
        client.incrAsync(userid);
    });

}

var getUsers = function(){
    client.smembersAsync('myset').then(function(result){
        console.log(result);
        return result;
    })
};

module.exports = {
    users : getUsers
};
