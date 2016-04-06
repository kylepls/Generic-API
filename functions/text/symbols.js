exports.path = '/:text';

exports.doc = {
  params: {
    text: PARAMS.STRING
  },
  desc: 'Convert a string to ascii symbols',
  example: '/kyle%20is%20god'
};

exports.handle = function(req, res, cb) {
  var text = req.params.text;
  var newText = '';
  var charsetIndex = Math.floor(Math.random()*charsets.length);
  
  for(var i in text) {
    var char = text[i];
    var index = key.indexOf(char.toLowerCase());
    
    if(index == -1) {
      newText += char;
    } else {
      newText += charsets[charsetIndex][index];
    }
  }
  
  cb(newText);
}


var key = 'abcdefghijklmnopqrstuvwxyz';

var charsets = [
  '@♭¢ⅾℯḟ❡ℌḯנкʟмᾔ◎ρⓠґ﹩⊥üṽẘ✄ƴẕ∀ℬ☾ÐℰℱḠ♓ℑⒿḰℒℳИ☮ℙℚℝϟ✞ÜṼ₩卐¥☡',
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'αв¢∂єƒgнιנкℓмησρqяѕтυνωχуzαв¢∂єƒgнιנкℓмησρqяѕтυνωχуz',
  'ΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZ',
  'ÁßČĎĔŦĞĤĨĴĶĹMŃŐPQŔŚŤÚVŴЖŶŹÁßČĎĔŦĞĤĨĴĶĹMŃŐPQŔŚŤÚVŴЖŶŹ',
  'äbċdëfġhïjklmnöpqrstüvwxÿżäbċdëfġhïjklmnöpqrstüvwxÿż',
  'ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬאץzค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬאץz',
  'åß¢Ðê£ghïjklmñðþqr§†µvwx¥zÄßÇÐÈ£GHÌJKLMñÖþQR§†ÚVW×¥Z',
  '丹乃匚刀モ下ム卄工ＪＫㄥ爪れ口ㄗＱ尺ち匕∪∨山メㄚ乙丹乃匚刀モ下ム卄工ＪＫㄥ爪れ口ㄗＱ尺ち匕∪∨山メㄚ乙',
  'ɐqɔpǝɟƃɥıɾʞlɯuobdɹsʇuʌʍxʎzɐqɔpǝɟƃɥıɾʞlɯuobdɹsʇuʌʍxʎz',
  '∀BɔDƎℲ⅁HIſ⋊⅂WᴎOԀΌᴚS⊥∩ᴧMX⅄Z∀BɔDƎℲ⅁HIſ⋊⅂WᴎOԀΌᴚS⊥∩ᴧMX⅄Z',
  '48(d3f9h!jk1mn0pqr57uvwxy248(d3f9h!jk1mn0pqr57uvwxy2',
  'ɐbɔdǝɟbɥıƪʞ1ɯndbɹsʇnʌʍxʎzɐbɔdǝɟbɥıƪʞ1ɯndbɹsʇnʌʍxʎz',
  '@฿ςÐΞךּĝĦ¡∂қĺmמθÞΘя§‡טעשּׂЖצּζ@฿ςÐΞךּĝĦ¡∂қĺmמθÞΘя§‡טעשּׂЖצּζ',
  'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
  'ﻪъ८ժεքցհﻨյĸlოռթզгรէսνա〤կչεﻪъ८ժεքցհﻨյĸlოռթզгรէսνա〤կչε',
  'નЪ૮ԁ૯ԲցસіڙқԼறהଇϷ૧Я૬ҬμνயϰϓｚનЪ૮ԁ૯ԲցસіڙқԼறהଇϷ૧Я૬Ҭμνயϰϓｚ',
  'αЪċđэךּġЋїפֿқľmήŏÞףřšŧŭνώאַỶżαЪċđэךּġЋїפֿқľmήŏÞףřšŧŭνώאַỶż',
  'ԹՅՇԺȝԲԳɧɿʝƙʅʍՌρφՐՏԵՄעաՃՎՀΙԹՅՇԺȝԲԳɧɿʝƙʅʍՌρφՐՏԵՄעաՃՎՀΙ',
  'ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁᎾᏢqᏒsᏆuᏉᎳxᎽᏃᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁᎾᏢqᏒsᏆuᏉᎳxᎽᏃ',
  'ÅƁƆƊƎƑƓǶȉǰǨĻɱȠȮȹϤГƧƬȔƱƜϗɣŻÅƁƆƊƎƑƓǶȉǰǨĻɱȠȮȹϤГƧƬȔƱƜϗɣŻ',
  'ᏗᏰፈᎴᏋᎦᎥᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎥᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ',
  'ᏜℬᏟᗬ℮ℱℊዞℹᎫʞᎱmɲ⋆℘ɸℛᏕʈʉʋᎳℵᎽᏃᏜℬᏟᗬ℮ℱℊዞℹᎫʞᎱmɲ⋆℘ɸℛᏕʈʉʋᎳℵᎽᏃ',
  'αвς∂єfgнιנкℓмиσρףяѕтυνωאָуzαвς∂єfgнιנкℓмиσρףяѕтυνωאָуz',
  'ɑɓɔɗəʃɡɦɪɟϰɭʍήʘρφʀϚʇϋϑШχϔʑɑɓɔɗəʃɡɦɪɟϰɭʍήʘρφʀϚʇϋϑШχϔʑ',
  'ለbርծΣfցዠijkረወռፀpզշsէሀvሠxվչለbርծΣfցዠijkረወռፀpզշsէሀvሠxվչ',
  'ªb¢ÞÈF૬ɧÎjΚĻмηǷƍrS⊥µ√w×ýzıªb¢ÞÈF૬ɧÎjΚĻмηǷƍrS⊥µ√w×ýzı',
  'බƀčdƎƒƓƕƖjƘᒺmƝƠÞƣƦ꒚tƯvШ꒼ꐯƵබƀčdƎƒƓƕƖjƘᒺmƝƠÞƣƦ꒚tƯvШ꒼ꐯƵ',
  'მჩეძპfცhἶქκlოῆῶρგΓჰནυὗwჯყzმჩეძპfცhἶქκlოῆῶρგΓჰནυὗwჯყz',
  'Дþ¢Ð3ƒgђîjkℓм₪ÞQЯ§†û√w×¥žДþ¢Ð3ƒgђîjkℓм₪ÞQЯ§†û√w×¥ž',
  'ᗩ♭ᑥđĕſƓꀌĨĵƘŁɱƝōƤƢᖆƧŢᑌƔŵ྾ŶŹᗩ♭ᑥđĕſƓꀌĨĵƘŁɱƝōƤƢᖆƧŢᑌƔŵ྾ŶŹ',
  'ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊ',
  'aвcdeғgнιjĸlмnopqrѕтυvwхyzaвcdeғgнιjĸlмnopqrѕтυvwхyz',
  'ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאzค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאz',
  'åвcDêfgнljκlmnоpqяSтuvшχyzåвcDêfgнljκlmnоpqяSтuvшχyz',
  'ªƁƈƊǝƑǤhƗjkŁ៣Ɲᢩ‽ƣƦsŧuvƜ※yẔªƁƈƊǝƑǤhƗjkŁ៣Ɲᢩ‽ƣƦsŧuvƜ※yẔ',
  '∀b¢D∃£gΩ¡jㅏlmດΦpφrsΤρνwΧ¥շ∀b¢D∃£gΩ¡jㅏlmດΦpφrsΤρνwΧ¥շ',
  'αв¢∂єƒgнιנкℓмησρqяѕтυνωχуzαв¢∂єƒgнιנкℓмησρqяѕтυνωχуz',
  'ᾀᏰᏨᕍ⁅ᖴgᏲḭᏧḳ℄ḾṈṎᑬQᖇຮtᙈvᏔჯẙẔᾀᏰᏨᕍ⁅ᖴgᏲḭᏧḳ℄ḾṈṎᑬQᖇຮtᙈvᏔჯẙẔ',
  'Ωbҫ₫ҼҒᏩӈأᏧҠӀ₥ӣoҎգԻֆҭմ∨ഢҲұℤΩbҫ₫ҼҒᏩӈأᏧҠӀ₥ӣoҎգԻֆҭմ∨ഢҲұℤ',
  'äbċdëfġhïjklmnöpqrstüvwxÿżäbċdëfġhïjklmnöpqrstüvwxÿż',
  'ǞвटDęբg৸ijκlɱПРqЯsƮЦvЩжყւ1ǞвटDęբg৸ijκlɱПРqЯsƮЦvЩжყւ1',
  'ΔҌﾧdﾼԲɢￃΙۆӃﾤϺﾢﾷϸϘЯଌȚȗѵ￦ҲעŻΔҌﾧdﾼԲɢￃΙۆӃﾤϺﾢﾷϸϘЯଌȚȗѵ￦ҲעŻ',
  'αßςdεƒghïζκιmη⊕pΩrš†u∀ωxψzαßςdεƒghïζκιmη⊕pΩrš†u∀ωxψz',
  'ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ',
  'ᕱც꒝Ꭰꂅꊰg♅ᎥϳКլოՈ☻ᎵգᏒᏕϮuᏉᎳꊼᎩᏃᕱც꒝Ꭰꂅꊰg♅ᎥϳКլოՈ☻ᎵգᏒᏕϮuᏉᎳꊼᎩᏃ',
  'ḀḃḉḊḕḟḠḧḭjḲḶṁṆṏṖqṙṠṮṳṼẇẌẏẒḀḃḉḊḕḟḠḧḭjḲḶṁṆṏṖqṙṠṮṳṼẇẌẏẒ',
  'ඹദඋd౯ቱ൭իiժḳໄጦn0ᎵqṛގᎢᏌކ௰ץYՁඹദඋd౯ቱ൭իiժḳໄጦn0ᎵqṛގᎢᏌކ௰ץYՁ',
  'ĄƄƆƊƏƑǧhȊjƘlmƝƟƥǬƦƧƮǙvŴxŸŻĄƄƆƊƏƑǧhȊjƘlmƝƟƥǬƦƧƮǙvŴxŸŻ',
  'ก⊾₡Ꭰe℉GᖺIᙴkL₥₦࿋ཥqའᔓ₮u⊽௶᙭yzก⊾₡Ꭰe℉GᖺIᙴkL₥₦࿋ཥqའᔓ₮u⊽௶᙭yz',
  'ᗋ฿℃ᗠЄҒԌӉіјҠしᗰท◎թҨГՏҬԱᗐᗯӼүՀᗋ฿℃ᗠЄҒԌӉіјҠしᗰท◎թҨГՏҬԱᗐᗯӼүՀ',
  'ÁßČĎĔŦĞĤĨĴĶĹМŃŐРQŔŚŤÚVŴЖŶŹÁßČĎĔŦĞĤĨĴĶĹМŃŐРQŔŚŤÚVŴЖŶŹ',
  'คb¢ĘFĠħįĵĶĿmŊ¤pQŖ§tŪvŴ×Ψžคb¢ĘFĠħįĵĶĿmŊ¤pQŖ§tŪvŴ×Ψž',
  'ᏰᏨᕍḕᖴgᏲḭᏧḳl๓n๏ᑬqᖇຮtᙈvᏔჯẙẔᎯᏰᏨᕍḕᖴgᏲḭᏧḳl๓n๏ᑬqᖇຮtᙈvᏔჯẙẔ',
  'ĂбĈĎÊҒĜĤĨĴҚĹMŇÕPØŘŜŤŨVŴҲŶŽĂбĈĎÊҒĜĤĨĴҚĹMŇÕPØŘŜŤŨVŴҲŶŽ',
  'ᎺᏏcᑺꆭfᏳᏂiᒎkᏝᔿnoᎮqrᔖᎿuvᏇᕽꐟzᎺᏏcᑺꆭfᏳᏂiᒎkᏝᔿnoᎮqrᔖᎿuvᏇᕽꐟz',
  'ᗑቄ￠꒯ﾼ￡ﻯꎧｴ｣ｋ꒒⋔ℕꑙℙ℺ℜ꒚ￓ꒤꒷꒳꒽ꐮẔᗑቄ￠꒯ﾼ￡ﻯꎧｴ｣ｋ꒒⋔ℕꑙℙ℺ℜ꒚ￓ꒤꒷꒳꒽ꐮẔ',
  'ДßĊÐξ∫ĠĦł∂ҚĿMЙØPףЯ∫†ŲעΨЖУζДßĊÐξ∫ĠĦł∂ҚĿMЙØPףЯ∫†ŲעΨЖУζ',
  'ΛϦϲdϵϝgӇΐϳϞlϻnϕϸϱɌϩϮuϑϣﬠאּzΛϦϲdϵϝgӇΐϳϞlϻnϕϸϱɌϩϮuϑϣﬠאּz',
  '@฿©ᖱ⺕Ⅎᕥ♄ꀧวkᘂ๓₦፨℗q®ᔓ꓄มvฟxຯʐ@฿©ᖱ⺕Ⅎᕥ♄ꀧวkᘂ๓₦፨℗q®ᔓ꓄มvฟxຯʐ',
  'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ',
  'ΛBᄃDΣFGΉIJΚᄂMПӨPQЯƧƬЦVЩXΥZΛBᄃDΣFGΉIJΚᄂMПӨPQЯƧƬЦVЩXΥZ'
];