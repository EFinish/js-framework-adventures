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
                ],
                nice_day_options: [
                    'yes',
                    'no',
                    'maybe so'
                ]
            }
        },
        template:
        '<div class="row form-group">'+
            '<div class="col-sm-12">'+
                '<label for="name">What is your name?</label>'+
                '<input id="name" type="text" placeholder="Enter your name..." v-model="name">'+
                '{{name}}'+
            '</div>'+
            '<div class="col-sm-12">'+
                '<label for="age">What is your age?</label>'+
                '<input id="age" type="number" min="0" placeholder="Enter your age..." v-model="age">'+
                '{{age}}'+
            '</div>'+
            '<div class="col-sm-12">'+
                '<label for="birthday">What is your birthday?</label>'+
                '<input id="birthday" type="date" placeholder="mm/dd/yyyy" aria-label="What is your birthday (mm/dd/yyyy)?" v-model="birthday">'+
                '{{birthday}}'+
            '</div>'+
            '<fieldset class="col-sm-12">'+
                '<legend>What is your gender?</legend>'+
                '<div v-for="option in gender_options" >'+
                    '<input type="radio" :id="\'gender-options-\'+option" :value="option" v-model="gender"> '+
                    '<label :for="\'gender-options-\'+option">{{option}}</label>'+
                '</div>'+
            '</fieldset>'+
            '{{gender}}'+
            '<div class="col-sm-12" v-if="(gender !== null && gender !== \'male\' && gender !== \'female\')">'+
            '<label for="gender-expand">Enter your gendering label</label>'+
                '<input id="gender-expand" type="text" placeholder="Enter your gendering..." v-model="gender">'+
                '{{age}}'+
            '</div>'+
            '<fieldset class="col-sm-12">'+
                '<legend>Are you having a nice day?</legend>'+
                '<div v-for="option in nice_day_options" >'+
                    '<input type="radio" :id="\'nice_day-options-\'+option" :value="option" v-model="nice_day"> '+
                    '<label :for="\'nice_day-options-\'+option">{{option}}</label>'+
                '</div>'+
            '</fieldset>'+
            '{{nice_day}}'+
            '<div class="col-sm-1">'+
                '<button @click="submit200" class="btn btn-success">'+
                    '200'+ 
                '</button>'+
            '</div>'+
            '<div class="col-sm-1">'+
                '<button @click="submit500" class="btn btn-success">'+
                    '500'+ 
                '</button>'+
            '</div>'+
        '</div>',
        methods: {
            submit200: function() {
                console.log(200);
            },
            submit500: function() {
                console.log(500);
            }
        }
    }
)