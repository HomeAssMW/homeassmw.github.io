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

function req(p)
{
    var t;
    t=p+1;
    p=t;
    document.getElementById("txtHint2").innerHTML=p;
    if (document.getElementById("butt"+p).checked == true)
    {
        document.getElementById("butt"+p+"status2").style.display = "block";
        document.getElementById("butt"+p+"status1").style.display = "none";
        document.getElementById("txtHint3").innerHTML="turning on";
        

    } 
    else if (document.getElementById("butt"+p).checked == false)
    {
        document.getElementById("butt"+p+"status1").style.display = "block";
        document.getElementById("butt"+p+"status2").style.display = "none";
        document.getElementById("txtHint3").innerHTML="turning off";

    }
    
    
}


