// const person = {
//     name : "Akshit malik",
//     age: 21,
//     city: "Ghaziabad"
// };

// for ( let key in person) {
//     console.log("person details: " +key +":" + person[key]);
//     console.log("person details: "+key + ":" + "person.key")
// }

// while(count <10){
//     document.while("current count")
//     }


function calculateResult(){
    const n=document.getElementById("subjects").value;
    let i,total=0;
    for(i=0;i<n;i++){

         
        total+=parseFloat(prompt("Enter the subject no."+(i+1)))


    }

    let avg=total/n;
    let grade;
    if(avg>90){
        grade='A+';
       
    }
    else if(avg>80){
        grade='A';
    }
    else if(avg>70){
        grade='B';
    }
    else if(avg>60){
        grade='C';
    }
    else if(avg>50){
        grade='D';
    }
    else if(avg<50){
        grade='E';
    }
    let result;
    if(avg>50){
        result="Pass"
    }
    else(
        result="Fail"
    )
    document.getElementById("result").innerHTML="Total Marks = "+total+"<br> Average = " +avg+"<br> Grade = "+grade+"<br> Result = "+result;
 
}
