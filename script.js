function searchGoogleBooks()
{
    var txtSearch = document.querySelector("#txtSearch")
    if(txtSearch.value == "")
    {
        document.querySelector("#mainDiv").classList.add("hasError")
        document.querySelector("#mainDiv").innerHTML = "No search keyword provided..."
        return;
    }

    document.querySelector("#mainDiv").classList.remove("hasError")

    fetch("https://www.googleapis.com/books/v1/volumes?&q=" + txtSearch.value + "&startIndex=0&maxResults=20")
    .then(response => response.json())
    .then(json => {
        var list = `<div class="row col-sm-5">found ${json.totalItems} books</div>
        <div class="row">`
        for(let i = 0; i < json.items[i].volumeInfo.title;i++)
        {
            console.log(json.items[i].volumeInfo.title)
            var bookInfo = json.items[i].volumeInfo;
            var template = `<ul class="col-sm-12 col-md-6 col-xl-4">`;
            template += `<a class="list-group-item list-group-item-action" href="${json.items[i].selflink}">${bookInfo.title}</a>`
            template += `<li class="list-group-item">${bookInfo.authors}</li>`
            template += `<li class="list-group-item">${bookInfo.publisher}, ${bookInfo.publishedDate}</li>`
            template += `</ul>`
            list += template;
        }
        list += `</div>`
        document.getElementById("mainDiv").innerHTML = list;
        
    });
}