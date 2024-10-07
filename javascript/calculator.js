function result(){
    var principal=parseInt(document.getElementById("principal").value); 
    var rate=parseInt(document.getElementById("rate").value);
    var time= parseInt(document.getElementById("time").value);
    var error="<div class=error> Error: Principal amount must be between 500 and 10000.</div>"
    let baserate='0';
    
    if (principal< 500 || principal > 10000) {
        document.getElementById("output").innerHTML=error;
    }

    if (principal < 1000) {
        baserate = 5;
    } 
    else if (principal >=1000 && principal <=5000) {
        baserate = 7;
    }
     else if (principal > 5000) {
        baserate = 10;
    }


    if(rate != baserate )
        {
            document.getElementById('output').innerHTML='<h4>Based on applied rate</h4>'
            document.getElementById('note').innerHTML=
            "<div class=note>NOTE: below 1000 -rate 5% , 1000 to 5000 - rate 7% , above 5000 -rate 10%"
        
        } else if(rate = baserate){
            var interest= principal*rate*time/100;
            var total= interest + principal;  
            document.getElementById("answer_1").innerHTML=interest;
            document.getElementById("answer_2").innerHTML=total; 
        }

    if (time > 5) {
            rate =rate + 2;
            additionalInfo = '- Bonus-- 2% added to interest rate for more than 5 years.';
        }
        document.getElementById("answer_3").innerHTML= additionalInfo;



}









