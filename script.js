function check() {
    let input=document.getElementById('input').value
    let output =document.getElementById('output')
       let score =Number(input)
    if(score =='') {
       alert('enter your score')
    }
     else if(score >= 0 && score<=39) {
        output.innerHTML=`<p>Fail F</p>`
    }
    else if(score >= 40 && score<=44) {
        output.innerHTML=`<p>Pass E</p>`
    }
    if(score >= 45 && score<=49) {
        output.innerHTML=`<p> Fair D</p>`
    }if(score >= 50 && score<=59) {
        output.innerHTML=`<p>Good C</p>`
    }if(score >= 60 && score<=69) {
        output.innerHTML=`<p>Very good B</p>`
    }if(score >= 70 && score<=100) {
        output.innerHTML=`<p>Excellent A</p>`
    }

    if(score<0 || score  >100) {
        output.innerHTML=`<p>Invalid result</p>`

    }

}

function university() {
    let input = document.getElementById('input2').value
    let output= document.getElementById('output2')
    let score=Number(input)
    if(score =='') {
       alert('enter your score')
    }
    else if(score >= 4.5 && score<= 5) {
        output.innerHTML=`<p>First Class honour </p>`
    }
     else if(score >= 3.5 && score<= 4.49) {
        output.innerHTML=`<p>Second Class honour (upper division) 2:1 </p>`
    } else if(score >= 2.4 && score<= 3.49) {
        output.innerHTML=`<p>Second Class honour (lower division) 2:2</p>`
    } else if(score >= 1.5 && score<= 2.39) {
        output.innerHTML=`<p>Third Class honour </p>`
    }
     else if(score >= 1 && score<= 1.49) {
        output.innerHTML=`<p>Pass </p>`
    } else if(score >= 0.00 && score<= 0.99) {
        output.innerHTML=`<p>Fail </p>`
    }
    if(score<0 || score  >5) {
        output.innerHTML=`<p>Invalid result</p>`

    }

}


function poly() {
    let output = document.getElementById('output3')
    let input =document.getElementById('input3').value
    let score=Number(input)
     if(score =='') {
       alert('enter your score')
    }
    else if(score >=3.5 && score <=4) {
        output.innerHTML= `<p> Distinction </p>`
    }
    else if(score <=3.5 && score >=3.25) {
        output.innerHTML= `<p> Upper credit </p>`
    }else if(score <= 3.25 && score >=3) {
        output.innerHTML= `<p> pUper credit</p>`
    }else if(score <=3 && score >=2.5) {
        output.innerHTML= `<p>  Upper credit </p>`
    }else if(score <=2.25 && score >=2) {
        output.innerHTML= `<p> Lower credit </p>`
    }else if(score <=2 && score >=1.5) {
        output.innerHTML= `<p> Lower credit</p>`
    }else if(score <=1.5 && score >=0) {
        output.innerHTML= `<p> Fail</p>`
    }
      if(score<0 || score  >4) {
        output.innerHTML=`<p>Invalid result</p>`

    }
}