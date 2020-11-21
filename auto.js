var data;
var arrayon=["b1=1","b2=1","b3=1","b4=1","b5=1","b6=1","b7=1","b8=1","b9=1","b10=1"];
var arrayoff=["b1=0","b2=0","b3=0","b4=0","b5=0","b6=0","b7=0","b8=0","b9=0","b10=0"];
var butt=[];
var buttold=[];
var buttnew=[];
var buttstatus1=[];
var buttstatus2=[];
var ind=[(0,3)];
var i;
var k;
var j;
var l;
function req(i)
{
    var t=i;
    document.getElementById("txtHint2").innerHTML=t;
    if (butt[t].checked == true)
    {
        t=t+1;
        document.getElementById("txtHint3").innerHTML="turning on";
        

    } 
    else if (butt[t].checked == false)
    {
        t=t+1;
        document.getElementById("txtHint3").innerHTML="turning off";

    }
    
    
}

