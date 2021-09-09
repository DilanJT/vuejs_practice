
new Vue({
    el:"#vue-one",
    data: {
        todos: [
            "drink",
            "eat"
        ],
        currentTask: '',
    },
    methods: {
        addTask: function(){
            this.todos.push(this.currentTask);
            this.currentTask = "";
        },
        deleteItem: function(task){
            var index = this.todos.indexOf(task);
            if(index != -1) {
                this.todos.splice(index, 1);
                console.log(this.todos);
            }
        },
    },
    
})