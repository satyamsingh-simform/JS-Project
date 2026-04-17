let quoteArr=[];
let index=-1;
async function quotefetcher(){
   let res=await fetch('https://dummyjson.com/quotes');
   let data=await res.json();
   console.log(data.quotes);
   quoteArr=data.quotes;
}
quotefetcher();
let nextBtn=document.getElementById('nextBtn');
let prevBtn=document.getElementById('prevBtn');
let p_quote=document.getElementById('quote');
let p_quoteBy=document.getElementById('quote-by');
let copyBtn=document.getElementById('copyBtn');
let div_quote=document.querySelector('#div-content');
console.log(div_quote);


function handleQuote(index){
    p_quote.innerText=quoteArr[index].quote;
    p_quoteBy.innerText=quoteArr[index].author;
}
window.addEventListener('DOMContentLoaded' ,()=>{
    handleQuote(index);
})
prevBtn.disabled=true
function buttonCheck(){
    prevBtn.disabled=(index<=0);
    nextBtn.disabled=(index>quoteArr.length-2);
}
function copyBtnFn(){
    copyBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`
    let text=div_quote.innerText;
    copyBtn.disabled=true;
    navigator.clipboard.writeText(text)
    .then(()=>{
        console.log(text);
        setTimeout(()=>{
            copyBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
            copyBtn.disabled=false;
        },1000)
    })
}

nextBtn.addEventListener('click',()=>{
    index++;
    handleQuote(index);
    buttonCheck()
})
prevBtn.addEventListener('click',()=>{
    index--;
    handleQuote(index);
    buttonCheck();
})
copyBtn.addEventListener('click',()=>{
    copyBtnFn();
})


let favBtn=document.getElementById('fav-btn')
let seeFavBtn=document.getElementById('see-fav')

function addFavQuote(){
    let quote_id=quoteArr[index].id;
    let favs=JSON.parse(localStorage.getItem('favoritesQuote'))||[];
    console.log(favs);
    if(favs.some((fav)=>fav.id===quote_id)){
        alert('already present in fav')
        return;
    } 
    favs.push(quoteArr[index]);
    console.log(favs);
    localStorage.setItem('favoritesQuote',JSON.stringify(favs));
    alert('added to favourite')
}

favBtn.addEventListener('click',()=>{
    addFavQuote();
})
seeFavBtn.addEventListener('click',()=>{
    window.location.href='fav.html'
})