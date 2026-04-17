
let favData=[];
let originalData=[];

window.onload=function(){
    favData=JSON.parse(localStorage.getItem('favorites')) || [];
    originalData=[...favData];
    render(favData);

    // populate filter dropdown
    let filter=document.getElementById('filter-author');
    let authors=[...new Set(originalData.map(q => q.author))];
    authors.forEach((a)=>{
        let opt = document.createElement('option');
        opt.value = a;
        opt.innerText = a;
        filter.appendChild(opt);
    });
}

// render function
function render(data){
    let divEl = document.getElementById('container');

    divEl.innerHTML = data.map((data)=>`
        <div id="content">
            <p class='fav-data'>${data.quote}</p>
            <p class='fav-data'>-${data.author}</p>
            <button class='delete' id=${data.id}>Delete</button>
        </div>
    `).join('');

    let delBtn = document.getElementsByClassName('delete');

    Array.from(delBtn).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            favData = favData.filter((q)=>q.id != e.target.id);
            localStorage.setItem('favorites', JSON.stringify(favData));

            originalData = [...favData];
            render(favData);
        })
    })
}

// search
document.getElementById('search-input').addEventListener('input',(e)=>{
    let val = e.target.value.toLowerCase();
    let filtered = originalData.filter(q =>
        q.quote.toLowerCase().includes(val) ||
        q.author.toLowerCase().includes(val)
    );
    render(filtered);
});

// filter
document.getElementById('filter-author').addEventListener('change',(e)=>{
    let val = e.target.value;
    if(val === 'all'){
        render(originalData);
    } else {
        let filtered = originalData.filter(q => q.author === val);
        render(filtered);
    }
});

