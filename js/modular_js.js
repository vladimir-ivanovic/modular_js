/*

Some ground rules:

- Self-contained module
    - everything to do with my module is in my module
    - no global variable
    - if a module manages more than one think it should be slit up
- sepration of concerns
- DRY code: Don't Repeat Yourself
- efficient DOM usage
    - very few $(selections)
- no memory leaks
- all events can be unbound

*/


/*** Example of spaghetti code ***/

var people = [];
var template = $('#people-template').html();

$('#peopleModule').find('button').on('click', function () {
    people.push($('#peopleModule').find('input').val());
    $('#peopleModule').find('input').val('');

    var data = {
        people:people,
    };
    $('#peopleModule').find('ul').html(Mustache.render(template, data));
});

$('#peopleModule').find('ul').delegate('i.del', 'click', function (e) {
   var $remove = $(e.target).closest('li');
   var i = $('#peopleModule').find('ul').find('li').index($remove);

   $remove.remove();

   people.splice(i, 1);
});




//object literal
//  !!! My API has two methods
// The methods that you expose to other modules the things that allow modules to do actions are called your API.
// So currently my API has two methods, it has sayName and it has set name, so I could actually hack this.
// To hide some of these thinks (modul methods) away to where nobody else can access them only the module itself can access them.
// That's kind of the modular pattern !!!




var myModule = {
    name : 'Will',
    age: 34,
    sayName : function () {
        alert(this.name);
    },
    setName : function (newName) {
        this.name = newName;
    }
}

myModule.setName('Pero');
myModule.sayName();

