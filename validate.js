


let frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
  
    e.preventDefault()
    let fname = document.querySelector("#fname")
    let fmsg = document.querySelector(".sf")
    if (fname.value == "") {
        fname.style.borderColor = "red"
        fmsg.innerText = "Enter a Full Name"
    }


    let pass = document.querySelector("#pass").value
    let msg = document.querySelector("#spas")

    if (pass.length < 6) {
        msg.innerText = "Pass length must be > 8"
    }
    let cpass = document.querySelector("#cpass").value
    let cmsg = document.querySelector("#scpas")
    if (pass !== cpass) {
        cmsg.innerText = "Both pass must be same"
    }
    let mob = document.querySelector("#num").value
    let ptn = /^\d{10}$/
    let nummsg = document.querySelector(".snum")

    if (!mob.match(ptn)) {
        nummsg.innerText = "only number Length=10"
    }

    let uname = document.querySelector("#uname").value
    let uptn = /[a-z]\d{0,9}/
    let umsg = document.querySelector(".suname")
    if (!uname.match(uptn)) {
        umsg.innerText = "Value must be in [a-z][0-9]"
    }
    let email=document.querySelector("#mail").value

    let eptrn='^[^\s@]+@[^\s@]+\.[^\s@]+$'
    let emsg=document.querySelector(".semail")
    if(!email.match(eptrn))
        {
            emsg.innerText="email must contain [A-Za-z][0-9]@."
        }

    let radio=document.querySelectorAll("input[type=radio]")
    let rcout=0
    let gmsg=document.querySelector(".gmsg")
     radio.forEach((btn)=>{
        if(btn.checked)
            {
               rcout++
            }
     })
     if(rcout!==1)
        {
            gmsg.innerText="Please select one option"
        }


})