var isIncludeKrtext = function(text) {
   var regexp =/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*/gi;
   var text2 = text.match(regexp);

   if (text2 != null) {
      for (i=0; i < text2.length ; i++) {
         if(text2[i]) return true // 한글 포함되어 있으면 true 반환
      }
   }
   return false
}

module.exports = {
    isIncludeKrtext: isIncludeKrtext
}