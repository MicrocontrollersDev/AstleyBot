module.exports = {
  name: 'spoongboob',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:spoongboob:747685461107015691>');
  },
};
