const app = Vue.createApp({
    data()  {
        return{
                keyword: '',
                result: null
        }
    },
    methods: {
        SearchGoogleBooks() {
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.keyword + "&startIndex=0&maxResults=20")
            .then(response => response.json())
            .then((json) => {this.result = json
                console.log(this.result)
            }) 
            
        }   
    }

})