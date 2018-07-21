// tech crunch api key = fe9a928d7b834d7fa253e1ebd8ca7fc4

document.addEventListener("DOMContentLoaded", getNews)

function getNews() {
	const xhr = new XMLHttpRequest()
	
	xhr.open('GET','https://newsapi.org/v2/everything?q=technology&apiKey=fe9a928d7b834d7fa253e1ebd8ca7fc4', true);
	
	xhr.onload = function() {
		if (this.status = 200) {
			const response = JSON.parse(this.responseText)
			console.log(response)
		
			response.articles.forEach(function(article) {
			document.querySelector('#apiDumpster').innerHTML = `
				<li>
					<h4><span>${article.title}</span><small>${article.author}</small></h4>
					  			
					<h3><a href="${article.url}" target="_blank">${article.url}</a></h3>
					  			
					<hr>
				</li>
				`
			})		
		}
	}
	
	xhr.send();
}

  


