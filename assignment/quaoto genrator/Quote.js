const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const tagsDropdown = document.getElementById('tags');
const newQuoteButton = document.getElementById('new-quote');


function fetchQuote(tag = '') {
    const url = tag 
        ? `https://api.api-ninjas.com/v1/quotes?category=${tag}` 
        : `https://api.api-ninjas.com/v1/quotes`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader('X-Api-Key', '2uY2qP3s8yEx9EzYw+9eSQ==1FRIJKwtpQ3MmC3a'); 

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            if (data.length > 0) {
         
                const quote = data[0]; 
                quoteElement.textContent = `"${quote.quote}"`;
                authorElement.textContent = `${quote.author}`;
            } else {
                quoteElement.textContent = "No quotes available for this category.";
                authorElement.textContent = "";
            }
        } else {
            quoteElement.textContent = "An error occurred. Please try again.";
            authorElement.textContent = "";
        }
    };

    xhr.onerror = function () {
        quoteElement.textContent = "A network error occurred. Please try again.";
        authorElement.textContent = "";
    };

    xhr.send();
}


fetchQuote();


newQuoteButton.addEventListener('click', function () {
    const selectedTag = tagsDropdown.value;
    fetchQuote(selectedTag);
});
