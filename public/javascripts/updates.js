$(document).ready(function(){
    const login = Login.findOne()
    console.log(login.logged)

    $("#btn-truncate").click(function(){
        $("#com-1").toggleClass()
    });
});