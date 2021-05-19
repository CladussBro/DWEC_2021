$("#cambiar").click(function() {
    var p1 = document.getElementsByTagName('p')[1];
    var p2 = document.getElementsByTagName('p')[2];
    if($(p1).next(p2) == p2){
        $(p2).before($(p1));
    }else{
        $(p2).after($(p1));
    }
});