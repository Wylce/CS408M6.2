import {reportWord} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test('make sure the reportWord function reports the given word', function(assert) {
        console.log("hello test");
        var result = reportWord('hello');
        assert.equal(result, 'hello');
    });


});
