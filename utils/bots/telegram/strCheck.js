var isChkKrtext = function(text) {
   const regexp = /^[ㄱ-ㅎ|가-힣|\*]+$/

   const text2 = regexp.test(text);
   if (text2) return true;

   return false;
}

module.exports = {
    isChkKrtext:isChkKrtext
}