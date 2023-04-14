//Create container
let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row");

container.append(row);
document.body.append(container);

//async,await,try & catch methods for getting usable API
async function coffee(){
    try {
        let enter=prompt("Enter the category:  (ex: sports,science)");
    let res=await fetch(`https://inshorts.deta.dev/news?category=${enter}`);
    let res1=await res.json();
    let news=res1.data;
    console.log(news);

    for(var i=0;i<news.length;i++){
     
        row.innerHTML=`<div class="card">
    <div class="card-header">
      <h4><b>${news[0].title}</b></h4>
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p> ${news[0].content}</p>
        <footer class="blockquote-footer">Author: <cite title="Source Title"> ${news[0].author}</cite></footer>
      </blockquote>
    </div>
  </div>`;

    }
            
    } catch (error) {
     console.log("Error");
    
    }
    
}
coffee();