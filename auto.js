var p=0;
var applications=["Fan","Inside Light 1","Inside Light 2"];


function initi()
{ 
    var firebaseConfig = {
    apiKey: "AIzaSyDDsyejmZlCIjMUd1-boxGZMNeU3simIrs",
    authDomain: "home-auto-19214.firebaseapp.com",
    databaseURL: "https://home-auto-19214.firebaseio.com",
    projectId: "home-auto-19214",
    storageBucket: "home-auto-19214.appspot.com",
    messagingSenderId: "972026675084",
    appId: "1:972026675084:web:db664fe21e653274e1a0a9",
    measurementId: "G-Q9WNFQ9EB7"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   console.log('firebase 1');
   var database = firebase.database();
    var ref = database.ref('Home');
    ref.on('value', gotdata, errdata);

    
    for(p=1;p<11;p++)
    {
    console.log('The init will load now.');
    document.getElementById("txtHint2").innerHTML=p;
    if (document.getElementById("butt"+p).checked != false)
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
}


function gotdata(data)
{
    console.log(data.val());
    
}

function errdata(err)
{
console.log('Error');
console.log(err);

}


function req(p)
{
   console.log('firebase');
   var database = firebase.database();
    console.log('The req will load now.');
    document.getElementById("txtHint2").innerHTML=p;
    if (document.getElementById("butt"+p).checked != false)
    {
        document.getElementById("butt"+p+"status2").style.display = "block";
        document.getElementById("butt"+p+"status1").style.display = "none";
        document.getElementById("txtHint3").innerHTML="turning on";
        var ref = database.ref('Home/'+application[p]);
        var data={
        Status: "OFF" , Value : 1  
        }
        ref.set(data);
        console.log(data);
        ref.on('value', gotdata, errdata);
        

    } 
    else if (document.getElementById("butt"+p).checked == false)
    {
        document.getElementById("butt"+p+"status1").style.display = "block";
        document.getElementById("butt"+p+"status2").style.display = "none";
        document.getElementById("txtHint3").innerHTML="turning off";
        var ref = database.ref('Home/'+application[p]);
        var data={
        Status: "OFF" , Value : 0  
        }
        ref.set(data);
        console.log(data);
        ref.on('value', gotdata, errdata);

    }
    
    
}
