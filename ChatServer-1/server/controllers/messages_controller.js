var messages = [];                          //Create an array to hold the messages.
var id = 0;                                 //Create a variable that will keep track of what id to assign to messages. The id should start at 0 and increment after every creation.

module.exports = {                          //Export an object with methods to create, read, update, and delete messages. Each with two prameters req and res.
    create: ( req, res ) => {
        const { text, time } = req.body;    //Create a new message object using text and time from the request body and also the global id variable.
        messages.push({ id, text, time });  //It should then push this new messsage object into the messages array.
        id++;                               //Increment id by one.
        res.status(200).send( messages );   //Send the updated messages array.
    },
    read: ( req, res ) => {
        res.status(200).send( message );    //The read method should return the entire messages array.
    },
    update: ( req, res ) => {
        const { text } = req.body;          //Update the text property of a message using the text value from the request body. 
        const updateID = req.params.id;     //determine which message to update based on the value of id from the request url parameters.
        const messageIndex = messages.findIndex( messages => messages.id == updateID );  //We can use .findIndex to get the index where the ids match.
        let messages = messages[ messageIndex ];  //We can then get the object using the index and update the object. 

        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send( messages );   //Then we can return the updated messages array.
    },
    delete: ( req, res ) => {

    }
}
