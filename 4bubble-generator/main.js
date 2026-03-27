document.addEventListener('mouseover', (e)=>{
    let div=document.createElement('div');
    div.className='circle';
    div.id='wow';
    document.body.appendChild(div);

    //position changing
    let x=e.clientX;
    let y=e.clientY;
    div.style.left=`${x-25}px`;
    div.style.top=`${y-25}px`;

    //background color and text
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
    const text = ['hii', 'byye', 'hello', 'namaste', 'smile'];
    let index=Math.floor(Math.random()*colors.length);
    div.style.backgroundColor=colors[index]
    div.innerText=text[index];
    div.style.color='black'

    setTimeout(()=>{
        div.remove();
    },5000)
})
