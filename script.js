var container =document.createElement('div');
container.className="container";

var row = document.createElement('div');
row.className='row';

container.append(row);

var p1 = fetch("https://restcountries.com/v3.1/all")

.then((x)=>x.json())
.then((x1)=>foo(x1));



function foo(ele){
    console.log("hi",ele)
    
    for(var i=0;i<ele.length;i++){
       
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <img src="${ele[i].flags.svg}" class="card-img-top" alt="...">
        <div class="card-header">${ele[i].name.common}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${ele[i].capital}</h5>
          <p class="card-text">Region : ${ele[i].region}  </div>
      </div>
      </div>
        `
           document.body.append(container);
    }
    
}

function image(data){
return data.flags.png;
}