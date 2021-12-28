
function comic() {
    fetch("http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=2a63f5bcddf74a9597df7407e5cc6a4b&hash=674805c8f6220783eb43e645e46b5ede", {
        "method": "GET"
    })
    .then(response => response.json())
    .then(data => console.log(data.data));
}

comic();

