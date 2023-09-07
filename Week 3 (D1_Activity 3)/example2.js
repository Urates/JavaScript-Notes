//function lefty (InString,Num){
    //var OutString=InString.substring(InString, Num);
    //alert(OutString);
//}
//lefty("This is a test", 7);//

var Ret = lefty ("This is a test", 15);
alert(Ret);
function lefty(Instring, Num){
    var OutString=Instring.substring(Instring,Num);
    return(OutString);
}

lefty("This is a test",7);


