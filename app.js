/* ==========================================
   GBSBFORYOU Digital Secretariat Framework
   Prototype v0.1
   app.js
========================================== */

console.log("GDSF Prototype Started");

/* -----------------------------
   Random ID Generator
------------------------------ */

function generateID(prefix){

    const random = Math.floor(Math.random()*1000000);

    return prefix + "-" + Date.now() + "-" + random;

}

/* -----------------------------
   ENTER DIGITAL SECRETARIAT
------------------------------ */

const enterButton = document.getElementById("enterOffice");

if(enterButton){

    enterButton.addEventListener("click",function(){

        window.location.href="pages/reception.html";

    });

}

/* -----------------------------
   Submit Raw Idea
------------------------------ */

const submitButton=document.getElementById("submitButton");

if(submitButton){

submitButton.addEventListener("click",function(){

    const rawText=document.getElementById("rawText").value.trim();

    if(rawText===""){

        alert("कृपया अपना विचार लिखें।");

        return;

    }

    const DID=generateID("DID");

    const PID=generateID("PROJECT");

    const PRID=generateID("PROMPT");

    const userData={

        did:DID,

        project:PID,

        prompt:PRID,

        rawText:rawText,

        date:new Date().toLocaleString()

    };

    localStorage.setItem("GDSF_USER",JSON.stringify(userData));

    alert(

"Project Registered Successfully\n\n"

+

"Digital Identity : "

+

DID

+

"\n\nPrompt ID : "

+

PRID

+

"\n\nProject ID : "

+

PID

);

window.location.href="executive.html";

});

}

/* -----------------------------
   Load Executive Dashboard
------------------------------ */

function loadDashboard(){

const dashboard=document.getElementById("dashboard");

if(!dashboard)return;

const data=JSON.parse(localStorage.getItem("GDSF_USER"));

if(!data){

dashboard.innerHTML="<h3>No Active Project</h3>";

return;

}

dashboard.innerHTML=`

<h2>Welcome to Executive Office</h2>

<p><b>DID :</b> ${data.did}</p>

<p><b>Project :</b> ${data.project}</p>

<p><b>Prompt :</b> ${data.prompt}</p>

<hr>

<h3>Raw Idea</h3>

<p>${data.rawText}</p>

`;

}

loadDashboard();
