var Benchmark = require('benchmark');
const {
    num1,
    num2
} = require("../src/fn")
var suite = new Benchmark.Suite;

// suite.add('parseInt转换', function () {
//         num1("1234")
//     })
//     .add('Number转换', function () {
//         num2("1234")
//     })
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     // run async
//     .run({
//         'async': true
//     });

suite.add('RegExp#test', function () {
        /o/.test('Hello World!');
    })
    .add('String#indexOf', function () {
        'Hello World!'.indexOf('o') > -1;
    })
    .add('String#match', function () {
        !!'Hello World!'.match(/o/);
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({
        'async': true
    });