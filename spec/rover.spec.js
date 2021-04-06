const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

it("constructor sets position and default values for mode and generatorWatts", function() {
 let rover = new Rover(1234);
  expect (rover.position).toEqual(1234);
  expect (rover.mode).toEqual("NORMAL");
  expect (rover.generatorWatts).toEqual(110);
});

it("response returned by receiveMessage contains name of message", function() {
  let commands = [new Command('STATUS_CHECK'), new Command('MOVE', 20)];
  let message = new Message('Another message!', commands);
  let rover = new Rover(1234);
  let roverMessage = rover.receiveMessage(message);
  expect(roverMessage.message).toEqual(message.name)
});

it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  let commands = [new Command('STATUS_CHECK'), new Command('MOVE', 20)];
  let message = new Message('Another message!', commands);
  let rover = new Rover(1234);
  expect (rover.receiveMessage(message).results.length).toEqual(2)
});

it('responds correctly to status check command', function() {
  let commands = new Command('STATUS_CHECK');
  let message = new Message('Another message!', commands);
  let rover = new Rover(1234);
  let response = rover.receiveMessage(message);
  expect (response.results).toEqual({completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 1234}})
})
 
});
