//TODO: Name e2e test files the same as the component that they are testing, 
//with the suffix .e2e-spec
describe('Google demo test for Mocha', function() {

	describe('with Nightwatch', function() {

		before(function(client, done) {
			// runs before all tests in this block
			console.log('Do this before all test suites');
			done();
		});

		after(function(client, done) {
			client.end(function() {
				// runs after all tests in this block
				console.log('Do this after all test suites');
				done();
			});
		});

		afterEach(function(client, done) {
			// runs before each test in this block
			console.log('Do this before each test suite');
			done();
		});

		beforeEach(function(client, done) {
			// runs after each test in this block
			console.log('Do this after each test suite');
			done();
		});

		//sample successful test case
		it('uses BDD to run the Acme-Supermarket simple test', function(client) {
			client
				.url('http://localhost:4200/items')
				.expect.element('body').to.be.present.before(1000);

			client.assert.title('Angular QuickStart');
			client.end();
		});
	});
});