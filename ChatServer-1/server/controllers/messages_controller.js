var messages = [];  //Create an array to hold the messages.
var id = 0;         //Create a variable that will keep track of what id to assign to messages. The id should start at 0 and increment after every creation.

module.exports = {  //Export an object with methods to create, read, update, and delete messages. Each with two prameters req and res.
    create: ( req, res ) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        i++;
        res.status(200).send( messages );
    },
    read: ( req, res ) => {

    },
    update: ( req, res ) => {

    },
    delete: ( req, res ) => {

    }
}
