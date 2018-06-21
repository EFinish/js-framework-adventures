Vue.component(
    "vue-example-header",
    {
        template: 
        "<div>"+
        "<h1>Vue.js Example</h1>"+
        "</div>"
    }
)

Vue.component(
    'form-one',
    {
        data: function() {
            return {
                name: '',
                age: '',
                birthday: '',
                gender: '',
                niceDay: ''
            }
        },
        template:
        '<div>'+
            '<div>'+
                '<label for="">What is your name?</label>'+
                '<input id="" type="text" placeholder="Enter your name..." v-model="name">'+
                '{{name}}'+
            '</div>'+
            '<div>'+
                '<label for="">What is your age?</label>'+
                '<input id="" type="number" min="0" placeholder="Enter your age..." v-model="age">'+
                '{{age}}'+
            '</div>'+
            '<div>'+
                '<label for="">What is your birthday?</label>'+
                '<input id="" type="date" placeholder="mm/dd/yyyy" aria-label="What is your birthday (mm/dd/yyyy)?" v-model="birthday">'+
                '{{birthday}}'+
            '</div>'+
        '</div>'
    }
)

var pp = new Vue({
    el: "#app",
    data: {
        name: '',
        age: '',
        birthday: '',
        gender: '',
        niceDay: ''
    }
})