(function () {

    var people = {

        people:['will', 'Laura'],
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function () {
            this.$el = $('#peopleModule'); //$ sign - for objects where is stored jQuery wrapped object
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html();
        },
        bindEvents: function () {
            this.$button.on('click', this.addPerson.bind(this));//The bind() method was deprecated in version 3.0. Use the on() method instead.
        },
        render: function () {
            var data = {
                people: this.people
            };
            this.$ul.html(Mustache.render(this.template, data));
        },
        addPerson: function () {
            this.people.push(this.$input.val());
            this.render();


            /**************
             !!!!!! 13 - ti minut
             !!!!!! 13 - ti minut
            !!!!!! 13 - ti minut
             **********/
        }
    };

    people.init();
})()
//
//     var people = [];
//     var template = $('#people-template').html();
//
//     $('#peopleModule').find('button').on('click', function () {
//         people.push($('#peopleModule').find('input').val());
//         $('#peopleModule').find('input').val('');
//
//         var data = {
//             people:people,
//         };
//         $('#peopleModule').find('ul').html(Mustache.render(template, data));
//     });
//
//     $('#peopleModule').find('ul').delegate('i.del', 'click', function (e) {
//        var $remove = $(e.target).closest('li');
//        var i = $('#peopleModule').find('ul').find('li').index($remove);
//
//        $remove.remove();
//
//        people.splice(i, 1);
//     });
//


var template = 'wrwerwerwerewr'
