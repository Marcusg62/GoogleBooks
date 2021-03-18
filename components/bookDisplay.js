app.component('book-display', {
    props:{
        book:{
            type: String,
            required: true,
            default: null
        },
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4 my-2">
        <a class="list-group-item list-group-item-action active text-light cursor-pointer underline" style="cursor: pointer; text-decoration: underline; " :href="this.BookObj.volumeInfo.selflink"> {{ this.BookObj.volumeInfo.title }} </a>
        <img v-if="this.BookObj.volumeInfo.imageLinks?.thumbnail" :src="this.BookObj.volumeInfo.imageLinks.thumbnail" class= "card-img-top" alt="book pic" >
        <li class="list-group-item" v-if="this.BookObj.volumeInfo.averageRating">Avg. Rating: {{ this.BookObj.volumeInfo.averageRating }}/5 </li>
        <li class="list-group-item" v-if="this.BookObj.volumeInfo.description">Description:  {{ this.BookObj.volumeInfo.description }} </li>
        <li class="list-group-item" v-if="this.BookObj.volumeInfo.authors">Authors: <span v-for="(author, jndex) in this.BookObj.volumeInfo.authors"> {{ author }}, </span> </li>
        <li class="list-group-item" v-if="(this.BookObj.volumeInfo.publisher && this.BookObj.volumeInfo.publishedDate)">{{this.BookObj.volumeInfo.publisher}},{{this.BookObj.volumeInfo.publishedDate}}</li>
        </ul>`,

    computed:
    {
        BookObj(){
            if(this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        }
    }
});






