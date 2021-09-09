
new Vue({
    el: '#app',
    data: {
        age: 35,
        x: 0,
        y: 0
    },
    methods: {
        substract: function(dec){
            this.age -= dec;
        },
        updateXY: function(){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click:function(){
            alert('Hello');
        },
        doThis:function(){
            alert("do this");
        },
        middle:function(){
            alert("middle");
        },
        logName:function(){
            alert("You entered the name");
        },
        logAge:function(){
            alert("You entered the age")
        }
    }
});