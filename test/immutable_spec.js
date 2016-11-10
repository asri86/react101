import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability' , () => {

	describe('immutable number test' , () => {

		function increment(currentState){
			return currentState + 1;
		}

		it('is immutable', () => {
			let state = 42;
			let nextState = increment(state);

			expect(nextState).to.equal(43);
			expect(state).to.equal(42);
		});
	});

	describe('immutable list test', () => {

		function addMovie(currentState, movie){
			return currentState.push(movie);
		}

		it('is immutable list' , () => {

			let state = List.of('Trainspotting', '28 days of later');
			let nextState =  addMovie(state, 'sunshine');

			expect(nextState).to.equal(List.of('Trainspotting', '28 days of later','sunshine'));

			expect(state).to.equal(List.of('Trainspotting', '28 days of later'));

		});
	});

	describe('immutable map test' , () => {
       function addMovie(currentState,movie){
       	return currentState.set('movies', currentState.get('movies').push(movie));
       }

       it( 'is immutable map' , () => {
       	let state = Map({movies : List.of('Trainspotting', '28 days of later')});
       	let nextState = addMovie(state,'sunshine');

       	expect(nextState).to.equal(Map({movies : List.of('Trainspotting', '28 days of later','sunshine')}));
       	expect(state).to.equal(Map({movies : List.of('Trainspotting', '28 days of later')}));
	});


	});


});