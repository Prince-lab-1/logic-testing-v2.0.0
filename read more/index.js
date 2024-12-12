var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores eum molestiae atque aperiam cumque, sapiente nisi blanditiis ipsam commodi? Repellat non quas expedita quidem eos molestias sed consectetur voluptatum!';

var h1 = document.getElementById('txt');
h1.innerHTML = text.substring(0,45) + "....";

var btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
      h1.innerHTML = text ;
      btn.innerHTML= "see less";

      btn.addEventListener('click', ()=>{
            btn.innerHTML= "read more"; 
            h1.innerHTML = text.substring(0,45) + "....";   
      })
})