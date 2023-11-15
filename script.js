let td1 = document.querySelectorAll('.section1 td');
let td2 = document.querySelectorAll('.section2 td');
 let input = document.querySelectorAll('input');
       let value1;

       let a='RUB';
       let b='USD';
       let amount1= 1;
  const apiKey = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
  const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
  const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${a}&to=${b}&amount=${amount1}`;
  fetch(apiUrl)
  .then((res)=>res.json())
  .then((data)=>{
      console.log(data);
      console.log(data.value);
         let p1 = document.querySelector(".p1");
     
         p1.innerHTML=`1 ${a} = ${data.value} ${b}`;
  })
   let amount2= 1;
   const apiUrl2= `${apiUrl1}?api_key=${apiKey}&from=${b}&to=${a}&amount=${amount2}`;
   fetch(apiUrl2)
   .then((res)=>res.json())
   .then((data)=>{
       console.log(data);
   console.log(data.value);
   let p = document.querySelector(".p2");
    
          p.innerHTML=`1 ${b} = ${data.value} ${a}`;
     })
    

    
 td1.forEach((a,index )=>{
    a.addEventListener('click',()=>{
        value1 = td1[index].innerText;
        // console.log(value1)
       a.classList.toggle('violet');
        for(i=0;i<td1.length;i++){
            if(i== index){
             continue;
            }
            else {
                td1[i].classList.remove('violet')
             }
         }
        
    })
})


let value2;
td2.forEach((a,index )=>{
    a.addEventListener('click',()=>{
      value2 = td2[index].innerText;
        a.classList.toggle('violet');
        for(i=0;i<td2.length;i++){

            if(i== index){
             continue;
            }
            else {
                td2[i].classList.remove('violet')
            }
        }
         
    })
    
})
td1.forEach(x =>{
    x.addEventListener('click',()=>{
        let a=value1 ;
        let b=value2;
         let amount= input[0].value;
         const apiKey = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
         const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
         const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${a}&to=${b}&amount=${amount}`;
         fetch(apiUrl)
         .then((res)=>res.json())
         .then((data)=>{
            console.log(data);
             input[1].value = data.value.toFixed(4)   
                   })
    })
})
td2.forEach(x =>{
    x.addEventListener('click',()=>{
        let a=value1 ;
        let b=value2;
         let amount= input[1].value;
         const apiKey = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
         const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
         const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${a}&to=${b}&amount=${amount}`;
         fetch(apiUrl)
         .then((res)=>res.json())
         .then((data)=>{
            console.log(data);
             input[0].value = data.value.toFixed(4)   
                   })
    })
    
})

input[0].addEventListener('keyup',()=>{
    let a=value1 ;
    let b=value2;
     let amount= input[0].value;
     const apiKey = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
     const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
     const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${a}&to=${b}&amount=${amount}`;
     fetch(apiUrl)
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
         input[1].value = data.value.toFixed(4)   
               })
})
    // input[1].value= input.value.replace(/[^0-9.]/g,'');
    
  function myprg0(){
    let a=value2 ;
    let b=value1;
     let amount= 1;
     const apiKey = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
     const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
     const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${a}&to=${b}&amount=${amount}`;
     fetch(apiUrl)
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data.value)
     let p = document.querySelector(".p2");
    
    p.innerHTML=`1 ${a} = ${data.value} ${b}`;
       })
    let c=value1 ;
    let d=value2;
     let amountt= 1;
     const apiKeyy = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
     const apiUrl11 = "https://api.currencybeacon.com/v1/convert";
     const apiUrll= `${apiUrl11}?api_key=${apiKeyy}&from=${c}&to=${d}&amount=${amountt}`;
     fetch(apiUrll)
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);

           let p1 = document.querySelector(".p1");
           
           p1.innerHTML=`1 ${c} = ${data.value} ${d}`;
            
               })
   
  }
  input[1].addEventListener('keyup', ()=>{
    let a=value2 ;
   let b=value1;
    let amount= input[1].value;
    const apiKey = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
    const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
    const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${a}&to=${b}&amount=${amount}`;
    fetch(apiUrl)
    .then((res)=>res.json())
    .then((data)=>{
        input[0].value = data.value.toFixed(4)
      })
  })

function myprg1(){
    let a=value2 ;
    let b=value1;
     let amount= 1;
     const apiKey = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
     const apiUrl1 = "https://api.currencybeacon.com/v1/convert";
     const apiUrl= `${apiUrl1}?api_key=${apiKey}&from=${a}&to=${b}&amount=${amount}`;
     fetch(apiUrl)
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data.value)
     let p = document.querySelector(".p2");
    //   console.log(a)
    //   console.log(b)
   
    p.innerHTML=`1 ${a} = ${data.value} ${b}`;
       })
       let c=value1 ;
    let d=value2;
     let amountt= 1;
     console.log(a)
           console.log(b)
     const apiKeyy = "Dae5peUZvHbtRwXlbsxu9gB3seNl9ogT";
     const apiUrl11 = "https://api.currencybeacon.com/v1/convert";
     const apiUrll= `${apiUrl11}?api_key=${apiKeyy}&from=${c}&to=${d}&amount=${amountt}`;
     fetch(apiUrll)
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);

           let p1 = document.querySelector(".p1");
           
           p1.innerHTML=`1 ${c} = ${data.value} ${d}`;
            
               })
}
td1.forEach(item =>{
    item.addEventListener('click',myprg0)
})
td2.forEach(item =>{
    item.addEventListener('click', myprg1)
})

    // input.value= input.value.replace(/[^0-9.]/g,'');
    









