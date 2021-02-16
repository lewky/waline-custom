const Application = require('@waline/vercel');

module.exports = Application({
  async postSave(comment, pComment) {
	console.log(`comment ${comment.objectId} has been saved! Now send mail...`);
    await mailto({
      mail: pComment.mail,
      text: `${comment.nick} replied your comment!`
    });
  }
});