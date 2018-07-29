var stats = (function () {
    var people = 0;

    //cache dom
    var $stats = $('#statsModule');
    var template = $('#stats-template').html();



    _render();

    function _render() {
        $stats.html(Mustache.render(template, {people:people}));
    }

    function setPeople(newPeople) {
        people = newPeople;
        _render();
    }

    function destroy() {
        $stats.remove();
        events.off('peopleChanged', setPeople);
    }

    return{
        setPeople: setPeople
    };
})();