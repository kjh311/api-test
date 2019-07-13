// const Http = new XMLHttpRequest();
// const url = 'https://jsonplaceholder.typicode.com/posts';
// // const url = 'https://kjh311.github.io/api-test/api.json/';
// Http.open("GET", url);
// Http.send();


// Http.onreadystatechange=(e)=>{
// 	const response = JSON.parse(Http.responseText);

// for(var i = 0; i < response.length - 1; i++){
//     var li = document.createElement('li');
//     li.innerHTML = response[i].title;  
//     document.getElementById('list-ul').appendChild(li);
// 	}
// 	// console.log(response);
// }


// BETTER WAY
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
  	for(var i = 0; i < json.length; i++){
	  	var li = document.createElement('li');
	    li.innerHTML = json[i].title;  
	    document.getElementById('list-ul').appendChild(li);
  	}
  })


function submitPost(){
	const title_content = document.getElementById("title_input").value;
	const body_content = document.getElementById('body_input').value;
	let userID = document.getElementById('id_input').value;
	
	// POSTING
	// fetch('https://jsonplaceholder.typicode.com/posts', {
 //    method: 'POST',
 //    body: JSON.stringify({
 //      title: title_content,
 //      body: body_content,
 //      userId: userID

 //    }),
 //    headers: {
 //      "Content-type": "application/json; charset=UTF-8"
 //    }
 //  })
 //  .then(response => response.json())
 //  .then(json => console.log(json))

  var li = document.createElement('li');
	    li.innerHTML = body_content;  
	    document.getElementById('list-ul').appendChild(li);

}

