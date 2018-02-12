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

    },
    update: ( req, res ) => {

    },
    delete: ( req, res ) => {

    }
}
