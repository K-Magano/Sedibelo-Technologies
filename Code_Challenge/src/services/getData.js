<script>
  export default {
    data () {
      return {
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'name',
        keys: ['Name', 'Surname', 'Designation', 'Department'],,
        items: [],
      };
    },
    created() {
        // Fetch data from user.json on component creation
        fetch('/Code_Challenge/database/users.json')
          .then(response => response.json())
          .then(data => {
            this.items = data;
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
</script>