let quote=[];
let index=0;
async function fetchQuotes(){
    let response=await fetch('http://api.quotable.io/quotes?limit=20');
    quote=await response.json();
    quote=quote.results;
    console.log(quote);
}
fetchQuotes();


let nextBtn = document.getElementById('nextBtn')
let prevBtn = document.getElementById('prevBtn')
let copyBtn = document.getElementById('copyBtn')
let p=document.getElementById('quote');
let span=document.getElementById('quote-by');
let divContent=document.getElementById('content');


function changeQuote(index){
    p.innerText=quote[index].content;
    span.innerText=quote[index].author;
}
prevBtn.disabled=true;
function updateButton(index){
    prevBtn.disabled=(index===0);
    nextBtn.disabled=(index===quote.length-1);
}
function copy(){
    let text=p.innerText;
    console.log(text);
    navigator.clipboard.writeText(text)
    .then(()=>{
        copyBtn.innerHTML=`copied`;
        setTimeout(()=>{
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