export default {
     computed: {
          filteredPosts() {
               return this.posts.filter( (post) => {
                    if (post.title) {
                         return post.title.toLowerCase().match(this.search.toLowerCase());
                    } else {
                         return false;
                    }
               });
          }
     }
}