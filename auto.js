var p=0;
var applications=["start","1 Home Theater","2 Laptop","3 Inside Light 1","4 Inside Light 2","5 OutSide Light Front","6 Outside Light Back","7 Fan","8 Night Lamp"];


function initi()
{ 
    var firebaseConfig = {
    apiKey: "AIzaSyAlCeK_xNfjgQMPqNdFUB8Gc0yFzIj2Nys",
    authDomain: "homeass-2528.firebaseapp.com",
    databaseURL: "https://homeass-2528.firebaseio.com",
    projectId: "homeass-2528",
    storageBucket: "homeass-2528.appspot.com",
    messagingSenderId: "973082369587",
    appId: "1:973082369587:web:54c67a1630b2a044594d46",
    measurementId: "G-24BQMQSFLL"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   var database = firebase.database();
    var ref = database.ref('Lab');
    ref.on('value', gotdata, errdata);

    
    for(p=1;p<11;p++)
    {
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
    var db = data.val();
  var keys = Object.keys(db);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var StaDet1  = db[k].Status;
    var StaDet2  = db[k].Value;
      var h=i+1;
      if(StaDet2==1)
      {
        document.getElementById("butt"+h).checked = true;
        document.getElementById("butt"+h+"status2").style.display = "block";
        document.getElementById("butt"+h+"status1").style.display = "none";
        document.getElementById("txtHint3").innerHTML="turning on";
      }
      else if(StaDet2==0)
      {
          document.getElementById("butt"+h).checked = false;
        document.getElementById("butt"+h+"status1").style.display = "block";
        document.getElementById("butt"+h+"status2").style.display = "none";
        document.getElementById("txtHint3").innerHTML="turning on";
      }
  }
    
}

function errdata(err)
{
console.log('Error');
console.log(err);

}


function req(p)
{
   var database = firebase.database();
    document.getElementById("txtHint2").innerHTML=p;
    if (document.getElementById("butt"+p).checked != false)
    {
        document.getElementById("butt"+p+"status2").style.display = "block";
        document.getElementById("butt"+p+"status1").style.display = "none";
        document.getElementById("txtHint3").innerHTML="turning on";
        var ref = database.ref('Lab/'+applications[p]);
        var data={
        Status: true
        }
        ref.set(data);
        ref.on('value', gotdata, errdata);
        

    } 
    else if (document.getElementById("butt"+p).checked == false)
    {
        document.getElementById("butt"+p+"status1").style.display = "block";
        document.getElementById("butt"+p+"status2").style.display = "none";
        document.getElementById("txtHint3").innerHTML="turning off";
        var ref = database.ref('Lab/'+applications[p]);
        var data={
        Status: false
        }
        ref.set(data);
        ref.on('value', gotdata, errdata);

    }
    
    
}
