Vue.component(
    "vue-example-header",
    {
        template: 
        "<div class='row form-group'>"+
            "<div class='col-sm-12'>"+
                "<h1 role='banner'>Vue.js Example</h1>"+
            "</div>"+
        "</div>"
    }
)

Vue.component(
    'form-one',
    {
        data: function() {
            return {
                name: null,
                age: null,
                birthday: null,
                gender: null,
                nice_day: null,
                gender_options: [
                    'male',
                    'female',
                    'other'
                ]
            }
        },
        template:
        '<div class="row form-group">'+
            '<div class="col-sm-12">'+
                '<label for="">What is your name?</label>'+
                '<input id="" type="text" placeholder="Enter your name..." v-model="name">'+
                '{{name}}'+
            '</div>'+
            '<div class="col-sm-12">'+
                '<label for="">What is your age?</label>'+
                '<input id="" type="number" min="0" placeholder="Enter your age..." v-model="age">'+
                '{{age}}'+
            '</div>'+
            '<div class="col-sm-12">'+
                '<label for="">What is your birthday?</label>'+
                '<input id="" type="date" placeholder="mm/dd/yyyy" aria-label="What is your birthday (mm/dd/yyyy)?" v-model="birthday">'+
                '{{birthday}}'+
            '</div>'+
            '<fieldset class="col-sm-12">'+
                '<legend>What is your gender?</legend>'+
                '<div v-for="option in gender_options" >'+
                    '<label :for="\'gender-options-\'+option">{{option}}</label>'+
                    '<input type="radio" :id="\'gender-options-\'+option" :value="option" v-model="gender">'+
                '</div>'+
            '</fieldset>'+
            '{{gender}}'+
        '</div>'
    }
)

Vue.component(
    'radio-div',
    {
        template:
        '<div>'+
            '<label for="">{{name}}</label>'+
            '<input type="radio" placeholder="Enter your name..." value="{{value}}" name="{{name}}">'+        
        '</div>'
    }
)