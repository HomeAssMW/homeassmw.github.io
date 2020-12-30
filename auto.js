var p=0;
var applications=["1 Home Theater","2 Laptop","3 Inside Light 1","4 Inside Light 2","5 OutSide Light Front","6 Outside Light Back","7 Fan","8 Night Lamp"];


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

    
    //for(p=1;p<11;p++)
    //{
    //document.getElementById("txtHint2").innerHTML=p;
    //if (document.getElementById("butt"+p).checked != false)
    //{
    //    document.getElementById("butt"+p+"status2").style.display = "block";
    //    document.getElementById("butt"+p+"status1").style.display = "none";
        

    //} 
    //else if (document.getElementById("butt"+p).checked == false)
    //{
    //    document.getElementById("butt"+p+"status1").style.display = "block";
    //    document.getElementById("butt"+p+"status2").style.display = "none";

    //}
    //}
}


function gotdata(data)
{
    var db = data.val();
  var keys = Object.keys(db);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var StaDet  = db[k].Status;
      var h=i+1;
      if(StaDet)
      {
        document.getElementById("but"+h).checked = true;
        document.getElementById("but"+h+"status2").style.display = "block";
        document.getElementById("but"+h+"status1").style.display = "none";
      }
      else if(!StaDet)
      {
          document.getElementById("but"+h).checked = false;
        document.getElementById("but"+h+"status1").style.display = "block";
        document.getElementById("but"+h+"status2").style.display = "none";
      }
  }
    
}


function gotdata2(data)
{
    var db = data.val();
  var keys = Object.keys(db);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var StaDet  = db[k].Status;
      var h=i+1;
      if(StaDet)
      {
        document.getElementById("but"+h).checked = true;
        document.getElementById("but"+h+"status2").style.display = "block";
        document.getElementById("but"+h+"status1").style.display = "none";
      }
      else if(!StaDet)
      {
          document.getElementById("but"+h).checked = false;
        document.getElementById("but"+h+"status1").style.display = "block";
        document.getElementById("but"+h+"status2").style.display = "none";
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
    var t;
   var database = firebase.database();
    if (document.getElementById("but"+p).checked == true)
    {
        t=p-1;
        document.getElementById("but"+p+"status2").style.display = "block";
        document.getElementById("but"+p+"status1").style.display = "none";
        var ref = database.ref('Lab/'+applications[t]);
        var data={
        Status: true
        }
        ref.set(data);
        ref.on('value', gotdata, errdata);
        

    } 
    else if (document.getElementById("but"+p).checked == false)
    {
        t=p-1;
        document.getElementById("but"+p+"status1").style.display = "block";
        document.getElementById("but"+p+"status2").style.display = "none";
        var ref = database.ref('Lab/'+applications[t]);
        var data={
        Status: false
        }
        ref.set(data);
        ref.on('value', gotdata, errdata);

    }
    
    
}
