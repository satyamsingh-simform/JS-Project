const arr=[
  "The only true wisdom is in knowing you know nothing. — Socrates",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "We suffer more in imagination than in reality. — Seneca",
  "In the middle of difficulty lies opportunity. — Albert Einstein",
  "The mind is everything. What you think, you become. — Buddha",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Opportunities don’t happen. You create them. — Chris Grosser",
  "Do what you love and you’ll never work a day in your life. — Confucius",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "The greatest thing you’ll ever learn is just to love and be loved in return. — Nat King Cole",
  "Love all, trust a few, do wrong to none. — William Shakespeare",
  "We accept the love we think we deserve. — Stephen Chbosky",
  "To love oneself is the beginning of a lifelong romance. — Oscar Wilde",
  "Sometimes the heart sees what is invisible to the eye. — H. Jackson Brown Jr.",
  "Happiness depends upon ourselves. — Aristotle",
  "Life isn’t about finding yourself. Life is about creating yourself. — George Bernard Shaw",
  "Do what makes your soul shine. — Unknown",
  "Act as if what you do makes a difference. It does. — William James",
  "Not how long, but how well you have lived is the main thing. — Seneca"
];

let colors = [
  "#FFB6C1", // LightPink
  "#FFD700", // LightGold
  "#ADD8E6", // LightBlue
  "#90EE90", // LightGreen
  "#FFDEAD", // NavajoWhite
  "#FAFAD2", // LightGoldenRodYellow
  "#FFEFD5", // PapayaWhip
  "#D3D3D3", // LightGray
  "#E6E6FA", // Lavender
  "#F0E68C", // Khaki
  "#FFFACD", // LemonChiffon
  "#F5F5DC", // Beige
  "#F0FFFF", // Azure
  "#FFF0F5", // LavenderBlush
  "#F5FFFA", // MintCream
  "#D3D3D3", // LightGray
  "#E6E6FA", // Lavender
  "#F0E68C", // Khaki
  "#FFFACD", // LemonChiffon
  "#F5F5DC", // Beige
];

document.addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
    let p=document.querySelector('p');
    let index=Math.floor(Math.random()*arr.length);
    p.innerHTML=arr[index];
    let div=document.querySelector('div');
    div.style.backgroundColor=colors[index];
  }
},)


