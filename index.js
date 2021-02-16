const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: [
    'Ï°½üÆ½',
    'Ã«Ôó¶«'
  ]
});

module.exports = Waline({
  disallowIPList: [
    '8.8.8.8',
    '4.4.4.4'
  ]
});

module.exports = Waline({
  async postSave(comment, pComment) {
	console.log(`comment ${comment.objectId} has been saved! Now send mail...`);
    await mailto({
      mail: pComment.mail,
      text: `${comment.nick} replied your comment!`
    });
  }
});