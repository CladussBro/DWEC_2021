var req = XMLHttpRequest();
req.open('GET','https://randomuser.me/api',true);
req.onreadystatechange = function (aEvt) {
    if (req.readyState == 4) {
        if(req.status == 200)
        dump(req.responseText);
        else
        dump("Error loading page\n");
    }
    };
    req.send(null); 