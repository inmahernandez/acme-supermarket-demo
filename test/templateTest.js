//TODO: Name test files the same as the component that they are testing, 
//with the suffix .spec
var chai = require('chai');
var should = chai.should();

describe('templateTest', function() {

	before('Before hook', function() {
		// runs before all tests in this block
		console.log('Do this before all test suites');
	});

	after('After hook', function() {
		// runs after all tests in this block
		console.log('Do this after all test suites');
	});

	beforeEach('Before-each hook', function() {
		// runs before each test in this block
		console.log('Do this before each test suite');
	});

	afterEach('After-each hook', function() {
		// runs after each test in this block
		console.log('Do this after each test suite');
	});

	// test suite
	describe('successful sample test', function() {
		//test case
		it('should return -1 when the value is not present', function() {
			[ 1, 2, 3 ].indexOf(5).should.equal(-1);
			[ 1, 2, 3 ].indexOf(0).should.equal(-1);
		});
	});

	// test suite
	describe('failed sample test', function() {
		//test case
		it('should return -1 when the value is not present', function() {
			[ 1, 2, 3 ].indexOf(1).should.equal(-1);
		});
	});

	//add delay
	setTimeout(function() {
		// do some setup

		describe('delayed sample test - 5 secs', function() {
			return true;
		});

		run();
	}, 5000);
});