let quotes=[];
let index=0;
async function fetchQuotes(){
    try{
        let response = await fetch('https://dummyjson.com/quotes');
        let data = await response.json();
        console.log(data.quotes[0]);
        quotes=data.quotes;
    }
    catch(err){
        console.log(err);
    }
}
fetchQuotes();

let nextBtn = document.getElementById('nextBtn')
let prevBtn = document.getElementById('prevBtn')
let copyBtn = document.getElementById('copyBtn')
let p=document.getElementById('quote');
let span=document.getElementById('quote-by');
let divContent=document.getElementById('content');
let divCopy=document.getElementById('div-content');


function changeQuote(index){
    p.innerText=quotes[index].quote;
    span.innerText=quotes[index].author;
}
prevBtn.disabled=true;
function updateButton(index){
    prevBtn.disabled=(index===0);
    nextBtn.disabled=(index===quotes.length-1);
}
function copy(){
    let text=p.innerText;
    console.log(text);
    navigator.clipboard.writeText(text)
    .then(()=>{
        copyBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`;
        copyBtn.disabled=true;
        setTimeout(()=>{
            copyBtn.disabled=false;
            copyBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
        },1500)
    })
    .catch((err)=>console.log(err))
}


nextBtn.addEventListener('click',()=>{
    index++;
    changeQuote(index);
    updateButton(index);
})
prevBtn.addEventListener('click',()=>{
    index--;
    changeQuote(index);
    updateButton(index);
})
copyBtn.addEventListener('click',()=>{
    copy();
})
divCopy.addEventListener('dblclick',()=>{
    let copyText=divCopy.innerText;
    navigator.clipboard.writeText(copyText)
    .then(()=>{
        alert('copied successfully');
    })
})