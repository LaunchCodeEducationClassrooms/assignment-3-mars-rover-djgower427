class Rover {
   constructor (position, mode = "NORMAL", generatorWatts = 110){
     this.position = position;
     this.mode = mode;
     this.generatorWatts = generatorWatts;
   }

  receiveMessage(message){
    
    let results = [];
    
    for (let i = 0; i< message.commands.length; i++){
      results.push(message.commands[i])
    };
    
    return {
      message: message.name,
      results: results 
    }
  }

}

module.exports = Rover;