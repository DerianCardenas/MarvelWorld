let down = document.querySelector('.down-p');
let limit =100, offset =100 , cont=1;
down.onclick=()=>{
    fetch("http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=2a63f5bcddf74a9597df7407e5cc6a4b&hash=674805c8f6220783eb43e645e46b5ede&offset="+offset*cont+"&limit="+limit, {
            "method": "GET"
        })
        .then(response => response.json())
        .then(data => loop(data.data));
    cont++;
}
function loop(data){
    console.log(data);
    for(var i = 0; i < data.results.length; i++){
        //console.log(data.results[i]);
        showChar(data.results[i]);
    }
}
function showChar(char){
    let cont = document.getElementById("cont");
    let flipcont = document.createElement('div');
    let card = document.createElement('div');
    let frente = document.createElement('div');
    let dorso = document.createElement('div');
    let imgCont = document.createElement('div');
    let img = document.createElement('img');
    let text = document.createElement('p');
    let textinfo = document.createElement('p');
    let mas = document.createElement('a');
    flipcont.className="flip-container";
    card.className="card";
    frente.className="frente";
    dorso.className="dorso";
    imgCont.className="imgCont";
    let source = char.thumbnail.path+"."+char.thumbnail.extension;
    img.src=source;
    text.innerText=char.id+" "+char.name;
    textinfo.innerText="Hero Identifier: "+char.id+" "
    if(char.description=="")
        textinfo.innerText="Information Not Found.."
    else
        textinfo.innerText=char.description;
    mas.href="#";
    mas.className="btnMas";
    mas.innerText="Ver más";
    imgCont.appendChild(img);
    frente.appendChild(imgCont);
    frente.appendChild(text);
    dorso.appendChild(textinfo);
    //dorso.appendChild(mas);
    card.appendChild(dorso);
    card.appendChild(frente);
    flipcont.appendChild(card);
    cont.appendChild(flipcont);
}