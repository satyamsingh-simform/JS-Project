alert('you have 60 second to complete the game');

let arrEmojis = ["😀","😀","🥳","🥳","🎁","🎁","🎊","🎊","🎈","🎈","👏","👏","🏆","🏆","🐇","🐇"];
let emojiShufle = arrEmojis.sort(() => (Math.random() - 0.5));

let all_P=document.querySelectorAll('.item');
let reset=document.getElementById('reset');
let moveDetail=document.querySelector('.detail')
let time=document.querySelector('.time')
let msg=document.querySelector('.msg')


all_P.forEach((p,index)=>{
    p.innerText=emojiShufle[index];
})

let first=null;
let second=null;
let lock=false;

let move=0;
let sec=0;


function resetFunc(){
    first=null;
    second=null;
    lock=false;
}

all_P.forEach((p,index)=>{
    p.addEventListener('click',()=>{
        if(lock) return;
        if(p===first) return;

        p.classList.add('flipped')
        if(!first){
            first=p;
        }
        else{
            second=p;
            lock=true;
            if(first.innerText===second.innerText){
                first.classList.add('matched');
                second.classList.add('matched');
                resetFunc();
                checkWin();
                totalMove();
            }
            else{
                setTimeout(()=>{
                    first.classList.remove('flipped');
                    second.classList.remove('flipped');
                    resetFunc();
                    totalMove();
                },1000)
            }
        }
    })
})

reset.addEventListener('click',()=>{
    location.reload();
})

//handle time logic
let clear=setInterval(()=>{
    sec++;
    time.innerHTML=`<strong>Total time:${sec}</strong>`;
    if(sec==60){
        all_P.forEach((p)=>{
            p.classList.add('disabled');
            msg.innerHTML=`
                <p class="try-again">Try again</p>
                <strong>Time limit hit</strong>
            `
            clearInterval(clear)
        });
    }
},1000)

//win check
function checkWin(){
    let count=0
    all_P.forEach((p)=>{
        console.log(p.classList.contains('matched'));
        if(p.classList.contains('matched')){
            count++
            console.log(count);
        }
    })
    if(count==16){
        clearInterval(clear);
        msg.innerHTML=`<strong class="won">YOU WON</strong>`
        console.log(`you took total ${move} move to win this game`);
        console.log('winner');
    }
}

//move count
function totalMove(){
    move++;
    moveDetail.innerHTML=`<strong>Total Move:${move}</strong>`;
}
