const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: [
    'ϰ��ƽ',
    'ë��'
  ],
  disallowIPList: [
    '8.8.8.8',
    '4.4.4.4'
  ],
  async postSave(comment) {
    //do what ever you want after save comment
  }
});