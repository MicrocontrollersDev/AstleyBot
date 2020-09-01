module.exports = {
  name: '<emoji name>',
  //Set this to the argument you want to use to call this emoji.
  execute(message, args) {
    message.delete();
    message.channel.send('<emoji ID here>');
    /*Set this to the emoji ID. The easiest way to find this is to send a message containing the emoji,
    and then edit the message with a backslash (\) directly infront of the first colon (:).
    You need to paste in everything, including the <>.

    To be completely honest you can put anything in there, even links to images on the internet if you'd like,
    and the bot will simply say whatever is between the quotes.
    (if you wish to have a single quote in the message make sure to add a backslash directly infront or else you'll get an error.)*/
  },
};
