
let buttons = document.getElementsByTagName("button")
let buttonArray = Array.from(buttons);


buttonArray.forEach((button) => {
    button.addEventListener("click",printNum)
})


function printNum(event)
{
    let buttonValue = event.target.innerText;
    let screen = document.getElementById("screen")

    if(buttonValue === "C")
    {
        screen.value="";
       console.log(screen.value)
        return;
    }
    else if('X/-+'.includes(buttonValue))
    {
        if(screen.value.includes('+') || screen.value.includes('-') || screen.value.includes('X') || screen.value.includes('/'))
        {
            alert("Sign Already Present")
            return;
        }
    }
    else if(buttonValue ===  "+-")
        {
            if(screen.value[0] === '-')
            {
                screen.value = screen.value.slice(1)
            }
            else{
                screen.value = '-' + screen.value;
            }
            return;
        }
    else if(buttonValue === "=")
    {
       let ans = 0;
       if(screen.value.includes("+"))
       {
        ans = performSum(screen.value)
       }
       else if(screen.value.includes("-"))
       {
        ans = performSub(screen.value)
       }
       else if(screen.value.includes("X"))
       {
         ans = performMulti(screen.value)
       }
     else if(screen.value.includes("/"))
     {
        ans = performDiv(screen.value)
     }  

     if(ans == "undefined")
        {
            screen.value="";
        }       
        else{
           screen.value = ans;
        }
        return;
    }
   
    
    screen.value = screen.value + buttonValue;
}
function performSum(value)
{
    let plusIndex = value.indexOf("+")
    let num1 = value.slice(0,plusIndex)
    let num2 =value.slice(plusIndex + 1)
    console.log(num1,num2);
    let sum = Number(num1) + Number(num2);
    return sum;
    
}
function performSub(value)
{
    let minusIndex = value.indexOf("-")
    let num1 = value.slice(0,minusIndex)
    let num2 =value.slice(minusIndex+ 1)
    let sub = Number(num1) - Number(num2);
    return sub;
    
}
function performMulti(value)
{
    let multiIndex = value.indexOf("X")
    let num1 = value.slice(0,multiIndex)
    let num2 = value.slice(multiIndex+1);
    let mul = Number(num1) * Number(num2)
    return mul;
    
}
function performDiv(value)
{
    let divIndex = value.indexOf("/")
    let num1 = value.slice(0,divIndex)
    let num2 =value.slice(divIndex+ 1)
    let div = Number(num1) / Number(num2);
    if(Number(num2) === 0 )
    {
        alert("Can't Divide By Zero!")
        return;
    }
    return div;

}


