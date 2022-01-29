let limit =20, offset =100 , cont=1;
let down = document.querySelector('.down-p');
down.onclick=()=>{
    fetch("http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=2a63f5bcddf74a9597df7407e5cc6a4b&hash=674805c8f6220783eb43e645e46b5ede&offset="+(offset+limit*cont)+"&limit="+limit, {
        "method": "GET"
    })
    .then(response => response.json())
    .then(data => loop(data.data));
    cont++;
}
function loop(data){
    for(var i = 0; i < data.results.length; i++){
        console.log(data.results[i]);
        showComic(data.results[i]);
    }
}
function showComic(data){
    let contsupreme = document.getElementById("contcomics");
    let contgral = document.createElement("div");
    let container = document.createElement("div");
    let infocomp = document.createElement("div");
    let titulo = document.createElement("h1");
    let info = document.createElement("p");
    let complemento = document.createElement("div");
    let portada = document.createElement("img");
    let detalles = document.createElement("div");
    let subt = document.createElement("h3");
    let lista = document.createElement("ul");
    let nombre = document.createElement("li");
    let paginas = document.createElement("li");
    let identifier = document.createElement("li");
    let str1 = document.createElement("strong");
    let str2 = document.createElement("strong");
    let str3 = document.createElement("strong");
    let salto = document.createElement("br");
    str1.innerText="Name: ";
    str2.innerText="Count Pages: ";
    str3.innerText="ID: ";
    nombre.append(str1," ",data.title);
    paginas.append(str2," ",data.pageCount);
    identifier.append(str3," ",data.id);
    lista.append(nombre,paginas,identifier);
    subt.innerText="Details: \n";
    detalles.className="info";
    detalles.append(lista);
    
    portada.src=data.thumbnail.path+"."+data.thumbnail.extension;
    complemento.append(portada,detalles);
    complemento.className="product-image";

    titulo.innerText=data.title;
    if(data.description!=null)
        info.innerText=data.description;
    else
        info.innerText="Description not available...";
    info.className="information";
    infocomp.append(titulo,info);
    infocomp.className="product-details";

    container.append(infocomp,complemento);
    contgral.appendChild(container);
    contgral.id="container";
    contsupreme.append(contgral);
}


