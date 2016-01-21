$( document ).ready(function() {
    console.log($)

    $("#mysubmit").click(function(){
        var newUser = {
            username: $("input[name='name']").val(),
            password: $("input[name='password").val()
        };

        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/user/add',
            dataType: 'JSON'
        }).done(function( response ) {

            console.log(response);
        });
    });

    $("#deleteuser").click(function(){
        var userid = $("input[name='userid']").val();
        $.ajax({
            type: 'DELETE',
            url: '/user/' + userid,
            dataType: 'JSON'
        }).done(function( response ) {

            console.log(response);
        });
    });

    $("#updateuser").click(function () {
        var userid = $("input[name='updateid']").val();
        var newUser = {
            username: $("input[name='newName']").val(),
            password: $("input[name='newPassword").val()
        };
        console.log(newUser);
        
        $.ajax({
            type: 'PUT',
            url: '/user/' + userid,
            dataType: 'JSON',
            data: newUser
        }).done(function(result){
            console.log(result);
        });
    })
});