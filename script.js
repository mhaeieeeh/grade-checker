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