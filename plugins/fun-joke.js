// by mznking (https://github.com/mznking)
const _0x5dbb22=_0x1f4e;(function(_0x413a28,_0x5bf56e){const _0x390bc4=_0x1f4e,_0x53a5a5=_0x413a28();while(!![]){try{const _0x26725e=parseInt(_0x390bc4(0x157))/0x1+-parseInt(_0x390bc4(0x168))/0x2+parseInt(_0x390bc4(0x153))/0x3*(-parseInt(_0x390bc4(0x14d))/0x4)+parseInt(_0x390bc4(0x151))/0x5*(parseInt(_0x390bc4(0x16a))/0x6)+parseInt(_0x390bc4(0x163))/0x7*(parseInt(_0x390bc4(0x166))/0x8)+-parseInt(_0x390bc4(0x15b))/0x9*(parseInt(_0x390bc4(0x162))/0xa)+parseInt(_0x390bc4(0x152))/0xb*(parseInt(_0x390bc4(0x16b))/0xc);if(_0x26725e===_0x5bf56e)break;else _0x53a5a5['push'](_0x53a5a5['shift']());}catch(_0x42de66){_0x53a5a5['push'](_0x53a5a5['shift']());}}}(_0x1dab,0x3c0ba));import _0x4dc69a from'axios';const jokeApi=_0x5dbb22(0x158),supportedCategories=[_0x5dbb22(0x169),_0x5dbb22(0x15f),'knock-knock',_0x5dbb22(0x167)];function _0x1dab(){const _0x31fa8e=['https://some-joke-api.com/api/jokes/','\x20programming*','joke','1377333LqTXgR','error','help','data','programming','tags','⚠️\x20*Unsupported\x20category.\x20Please\x20choose\x20from:\x20','30zrivdF','53368MaWwAs','join','includes','288spxxZX','dad','280342ZauXxU','general','6JXSgBk','204Sktoab','slice','231096UpfuQt','command','.\x0aExample:\x20','⛔\x20*An\x20error\x20occurred:\x20','2377060ohaxvm','119713fyKrhZ','6jrWSsb','chat','get','toUpperCase','25889cEgMwm'];_0x1dab=function(){return _0x31fa8e;};return _0x1dab();}let handler=async(_0x5963a9,{text:_0x20530f,conn:_0x3c4aac,usedPrefix:_0xd61e87,command:_0x277190})=>{const _0x5417f7=_0x5dbb22;try{if(!_0x20530f)throw'❓\x20*Please\x20specify\x20a\x20category\x20for\x20the\x20joke.\x20Supported\x20categories:\x20'+supportedCategories[_0x5417f7(0x164)](',\x20')+_0x5417f7(0x14f)+(_0xd61e87+_0x277190)+_0x5417f7(0x159);const _0x3d1074=_0x20530f['toLowerCase']();if(!supportedCategories[_0x5417f7(0x165)](_0x3d1074))throw _0x5417f7(0x161)+supportedCategories['join'](',\x20')+'.*';const _0xdf488c=await _0x4dc69a[_0x5417f7(0x155)](''+jokeApi+_0x3d1074),_0x43958=_0xdf488c[_0x5417f7(0x15e)],_0x264cde='😄\x20*Random\x20'+(_0x3d1074['charAt'](0x0)[_0x5417f7(0x156)]()+_0x3d1074[_0x5417f7(0x14c)](0x1))+'\x20Joke:*\x0a'+_0x43958['joke'];_0x3c4aac['reply'](_0x5963a9[_0x5417f7(0x154)],_0x264cde,_0x5963a9);}catch(_0x475b4e){console[_0x5417f7(0x15c)](_0x475b4e),_0x5963a9['reply'](_0x5417f7(0x150)+_0x475b4e+'*');}};handler[_0x5dbb22(0x15d)]=[_0x5dbb22(0x15a)],handler[_0x5dbb22(0x160)]=['fun'],handler[_0x5dbb22(0x14e)]=[_0x5dbb22(0x15a)];function _0x1f4e(_0x3fbddf,_0x321d5c){const _0x1dab60=_0x1dab();return _0x1f4e=function(_0x1f4e27,_0x25eb67){_0x1f4e27=_0x1f4e27-0x14c;let _0xf46c61=_0x1dab60[_0x1f4e27];return _0xf46c61;},_0x1f4e(_0x3fbddf,_0x321d5c);}export default handler;
