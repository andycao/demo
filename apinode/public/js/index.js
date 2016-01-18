$( document ).ready(function() {
    console.log($)

    $("#mysubmit").click(function(){
        console.log('ahahahha');
        var newUser = {
            username: $("input[name='name']").val(),
            password: $("input[name='password").val()
        };
        console.log(newUser);

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
            url: '/user/delete/' + userid,
            dataType: 'JSON'
        }).done(function( response ) {

            console.log(response);
        });
    });
});