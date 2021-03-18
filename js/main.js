const app = Vue.createApp({
    data()  {
        return{
                keyword: '',
                result: null,
                PageNum: 0,
                max: 20,
                x: 0
        }
    },
    methods: {
        SearchGoogleBooks() {
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + txtSearch.value + "&startIndex="+this.PageNum+"&maxResults="+this.max)
            .then(response => response.json())
            .then((json) => {this.result = json
                console.log(this.result)
                this.x=this.result.totalItems
            })
        },
        prevPage(){
            if(this.PageNum == 0)
            {
                return;
            }
            this.PageNum -= 1;
            this.SearchGoogleBooks()
        },
        nextPage(){
            console.log(this.x);
            console.log(this.max);
            if(this.PageNum == parseInt(this.x / this.max))
            {
                console.log(this.max);
                return;
            }
            this.PageNum += 1;
            this.SearchGoogleBooks()
        }
    }
});




