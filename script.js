const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();


Http.onreadystatechange=(e)=>{
	const response = JSON.parse(Http.responseText);

for(var i = 0; i < response.length - 1; i++){
    var li = document.createElement('li');
    li.innerHTML = response[i].title;  
    document.getElementById('list-ul').appendChild(li);
	}
	console.log(response);
}