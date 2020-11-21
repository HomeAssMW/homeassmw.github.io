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

function initi()
{ 
    for(i=0;i<10;i++)
    {
    var k;
    k=i+1;
    butt[i] = document.getElementById("butt"+k);
    buttstatus1[i] = document.getElementById("butt"+k+"status1");
    buttstatus2[i] = document.getElementById("butt"+k+"status2");
    }
}



function update()
{
    for(i=0;i<10;i++)
    {
    if (butt[i].checked == true)
    {
    buttstatus2[i].style.display = "block";
    buttstatus1[i].style.display = "none";
    } 
    if (butt[i].checked == false)
    {
    buttstatus1[i].style.display = "block";
    buttstatus2[i].style.display = "none";
    }
    }
    
}


function req(i)
{
    var t=i;
````var p=t+1;
    document.getElementById("txtHint2").innerHTML=p;
    if (butt[t].checked == true)
    {
        t=t+1;
	    update();
        document.getElementById("txtHint3").innerHTML="turning on";
        

    } 
    else if (butt[t].checked == false)
    {
        t=t+1;
	    update();
        document.getElementById("txtHint3").innerHTML="turning off";

    }
    
    
}

function makeRequest() {
    initi();
}

