var cont = document.getElementById('conte');

fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data =>{
            data.forEach( data => {
                cont.innerHTML += `<p id="cont">${data.name}</p>`;
            //     cont.innerHTML += `<p id="cont">THE CITY ${data.address.city}</p>`;
            //     cont.innerHTML += `<p id="cont">${data.email}</p>`;
            });
            console.log(data);
      })