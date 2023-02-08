const getElement = name => document.querySelector(name);
const mybutton = getElement('.myBtn');
const btn = getElement('.btn');
// const cards = document.querySelectorAll('.cards');
// convert node list to array

const biaflix = [
  {
    name: 'Como perder um homem em 10 dias',
    imageURL: 'https://i.ytimg.com/vi/3IDeifYOCvM/maxresdefault.jpg',
    link: 'https://www.primevideo.com/region/na/dp/amzn1.dv.gti.a4ac5766-5720-adbb-a2e3-abaae36c7277/ref=atv_pr_sw_sc?autoplay=0',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
  },
  {
    name: 'Encontro de Amor',
    imageURL: 'https://i.ytimg.com/vi/L-Yakt5udHY/maxresdefault.jpg',
    link: 'https://www.netflix.com/title/60024936',
    genre: 'Romance',
    element: getElement('.romance'),
  },
  {
    name: 'Amor com data marcada',
    imageURL: 'https://i.ytimg.com/vi/hPRCcjMU5J4/maxresdefault.jpg',
    link: 'https://www.netflix.com/title/81034553',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
  },
  {
    name: 'Emily em Paris',
    imageURL: 'https://ntvb.tmsimg.com/assets/p18761121_b_h8_am.jpg',
    link: 'https://www.netflix.com/title/81037371',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
  },
  {
    name: 'Continência ao Amor',
    imageURL:
      'https://rollingstone.uol.com.br/media/uploads/poster-continencia-ao-amor-foto-divulgacao-netflix.jpg',
    link: 'https://www.netflix.com/title/81043665',
    genre: 'Romance',
    element: getElement('.romance'),
  },
  {
    name: 'A proposta',
    imageURL:
      'https://play-lh.googleusercontent.com/wqSUib5v6VfdYSdhHItCT7M0Q6jtubYCFO59kFl8DEf8y7FsA_oqPLg39KtVRVCJi1ClLg=w600-h300-pc0xffffff-pd',
    link: 'https://www.starplus.com/movies/the-proposal/iuM9ZBVHqcY7',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
  },
  {
    name: 'Bridgerton',
    imageURL: 'https://img.quizur.com/f/img63d91398ba6e49.12272352.jpg',
    link: 'https://www.netflix.com/title/80232398',
    genre: 'Romance',
    element: getElement('.romance'),
  },
  {
    name: 'Jane, a Virgem',
    imageURL:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/Jane-the-Virgin-Cast-Guide.jpg',
    link: 'https://www.netflix.com/title/80027158',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
  },
  {
    name: 'Oxigênio',
    imageURL:
      'https://i0.wp.com/lugarnenhum.net/wp-content/uploads/2021/05/oxigenio-netflix.jpg',
    link: 'https://www.netflix.com/title/81277610',
    genre: 'Sci-fi',
    element: getElement('.sci-fi'),
  },
  {
    name: 'Perdidos no Espaço',
    imageURL:
      'https://sobresagas.com.br/wp-content/uploads/2021/12/perdidos-no-espaco.jpg',
    link: 'https://www.netflix.com/title/80104198',
    genre: 'Sci-fi',
    element: getElement('.sci-fi'),
  },
  {
    name: 'Harry Potter Prisioneiro de Azkaban',
    imageURL:
      'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/01/27886-aleni.jpg',
    link: 'https://play.hbomax.com/page/urn:hbo:page:GXssObwqZrVVGwwEAAABI:type:feature?source=googleHBOMAX&action=open',
    genre: 'Fantasy',
    element: getElement('.fantasy'),
  },
  {
    name: 'Spiderhead',
    imageURL:
      'https://cafecomnerd.com.br/wp-content/uploads/2022/05/Spiderhead-Trailer-Netflix-Filme-inspirado-no-conto-de-George-Saunders-com-Chris-Hemsworth.jpg',
    link: 'https://www.netflix.com/title/80210767',
    genre: 'Sci-fi',
    element: getElement('.sci-fi'),
  },
  {
    name: 'Footloose',
    imageURL:
      'https://akamai.sscdn.co/uploadfile/letras/fotos/2/a/7/0/2a70a1955a7030a6aa1da0d1488d44b1.jpg',
    link: 'https://www.netflix.com/title/70178624',
    genre: 'Musical',
    element: getElement('.musical'),
  },
  {
    name: 'Invocação do mal',
    imageURL:
      'https://hbomax-images.warnermediacdn.com/images/GXdu2RQKDmpuAuwEAADZ2/tileburnedin?size=1280x720&partner=hbomaxcom&v=3592a74a84701fd38a93e24088406671&host=art-gallery.api.hbo.com&language=pt-br',
    link: 'https://play.hbomax.com/page/urn:hbo:page:GXdu2RQKDmpuAuwEAADZ2:type:feature?source=googleHBOMAX&action=open',
    genre: 'Thriller',
    element: getElement('.thriller'),
  },
  {
    name: 'Dark',
    imageURL: 'https://usefors.com.br/wp-content/uploads/2020/07/dark.jpg',
    link: 'https://www.netflix.com/title/80100172',
    genre: 'Sci-fi',
    element: getElement('.sci-fi'),
  },
  {
    name: 'Batman - O Cavaleiro Das Trevas',
    imageURL:
      'https://hbomax-images.warnermediacdn.com/images/GXdkpqAvyDaXCPQEAADdn/tileburnedin?size=1280x720&partner=hbomaxcom&v=7f7f8054cb4fe42c3e93d57de2eb0dfb&host=art-gallery.api.hbo.com&language=pt-br',
    link: 'https://play.hbomax.com/page/urn:hbo:page:GXdkpqAvyDaXCPQEAADdn:type:feature?source=googleHBOMAX&action=play',
    genre: 'Action',
    element: getElement('.action'),
  },
  {
    name: 'Virgin River',
    imageURL:
      'https://chronicallystreaminghome.files.wordpress.com/2022/08/screen-shot-2022-08-01-at-6.57.46-am-e1659368844726.png',
    link: 'https://www.netflix.com/title/80240027',
    genre: 'Romance',
    element: getElement('.romance'),
  },
  {
    name: 'Stranger Things',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png',
    link: 'https://www.netflix.com/title/80057281',
    genre: 'Sci-fi',
    element: getElement('.sci-fi'),
  },
  {
    name: 'Vingadores: Ultimato',
    imageURL:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4BA82B57752DD611917C0EAAD80F74137B7A0C2C492896604410A499F3EF7400',
    link: 'https://www.disneyplus.com/movies/marvel-studios-avengers-endgame/aRbVJUb2h2Rf',
    genre: 'Adventure',
    element: getElement('.adventure'),
  },
  {
    name: 'Querido John',
    imageURL:
      'https://i0.wp.com/mundoemocionante.com/wp-content/uploads/2018/08/querido-john_filme.jpg',
    link: 'https://www.netflix.com/title/70117302',
    genre: 'Romance',
    element: getElement('.romance'),
  },
  {
    name: 'The Witcher',
    imageURL:
      'https://static.displate.com/857x1200/displate/2022-06-01/d45c30759431a68846acca42987466e2_c830748a127d5c5c17a9f5ad2c76ada5.jpg',
    link: 'https://www.netflix.com/title/80189685',
    genre: 'Fantasy',
    element: getElement('.fantasy'),
  },
  {
    name: 'Sombra e Ossos',
    imageURL:
      'https://1.bp.blogspot.com/-H5O9VS9OyU0/YIxnCOWyWEI/AAAAAAABL8w/TE8AsEXoziMHzB2IoTavQ3T9xLD-zJRCACLcBGAsYHQ/s1200/Shadow-and-Bone-Netflix.jpg',
    link: 'https://www.netflix.com/title/80236319',
    genre: 'Fantasy',
    element: getElement('.fantasy'),
  },
  {
    name: 'Ela Dança, Eu Danço 5: Tudo ou Nada',
    imageURL:
      'https://occ-0-3647-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQfIhppre9ZQlQfZhe_E0P5kiUdOfZytumYdIKogDikCa_Q2_Jegq-ivTC4gWU6O0D0KuP_A8U6e74DGwyvkFRRcjQK3zfiOb3tz.jpg',
    link: 'https://www.netflix.com/title/70301474',
    genre: 'Musical',
    element: getElement('.musical'),
  },
  {
    name: 'Lista Negra',
    imageURL:
      'https://pipocasclub.com.br/wp-content/uploads/2023/02/alista.jpg',
    link: 'https://www.netflix.com/title/70281312',
    genre: 'Action',
    element: getElement('.action'),
  },
  {
    name: 'Top Gun: Maverick',
    imageURL:
      'https://www.minhaoperadora.com.br/wp-content/uploads/2022/11/Top-Gun-Maverick-filme-com-Tom-Cruise-ja-tem-data-para-estrear-no-streaming-confira.jpg',
    link: 'https://www.primevideo.com/detail/0SSXASJCFFG34TN8CBQFM0TN90/ref=atv_sr_fle_c_Tn74RA_1_1_1?pageTypeId=B0B5PSBKLQ&pageTypeIdSource=ASIN&qid=1675462835740&language=pt_BR&sr=1-1',
    genre: 'Action',
    element: getElement('.action'),
  },
  {
    name: 'A Saga Crepúsculo: Amanhecer - Parte 2',
    imageURL:
      'https://akamai.sscdn.co/uploadfile/letras/playlists/5/a/c/6/5ac6d13d7d6a4f0d8e18b652e86d76b7.jpg',
    link: 'https://www.netflix.com/title/70206632',
    genre: 'Fantasy',
    element: getElement('.fantasy'),
  },
  {
    name: 'As Branquelas',
    imageURL: 'https://i.ytimg.com/vi/rvYCn0_9ta8/maxresdefault.jpg',
    link: 'https://www.netflix.com/title/60034587',
    genre: 'Comedy',
    element: getElement('.comedy'),
  },
  {
    name: 'O Caçador e a Rainha do Gelo',
    imageURL: 'https://i.ytimg.com/vi/pAyGIlGEK00/maxresdefault.jpg',
    link: 'https://www.netflix.com/title/80085316',
    genre: 'Fantasy',
    element: getElement('.fantasy'),
  },
  {
    name: 'High School Musical',
    imageURL: 'https://costazul.fm/wp-content/uploads/2022/09/scale.jpg',
    link: 'https://www.disneyplus.com/movies/high-school-musical/1Wh1xI8luhe4',
    genre: 'Musical',
    element: getElement('.musical'),
  },
  {
    name: 'Brooklyn Nine-Nine',
    imageURL:
      'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/05/13141215/Brooklyn-Nine-Nine-Confira-5-quest%C3%B5es-sociais-abordadas-na-s%C3%A9rie.jpg',
    link: 'https://www.netflix.com/title/70281562',
    genre: 'Comedy',
    element: getElement('.comedy'),
  },
  {
    name: 'Hannah Montana: O Filme',
    imageURL:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4BB97D76B1D1BD2F364A6689DA76E7B2C78531A6000EE9DB28AF6326CDF1994',
    link: 'https://www.disneyplus.com/movies/hannah-montana-o-filme/6RW9feUDUGUB',
    genre: 'Musical',
    element: getElement('.musical'),
  },
  {
    name: 'Atypical',
    imageURL:
      'https://desaniversarios.com.br/wp-content/uploads/2021/04/98825.jpg',
    link: 'https://www.netflix.com/title/80117540',
    genre: 'Comedy',
    element: getElement('.comedy'),
  },
  {
    name: 'Big Bang: A Teoria',
    imageURL: 'https://cdn-images.rtp.pt/EPG/imagens/31933_36817_23276.jpg',
    link: 'https://play.hbomax.com/page/urn:hbo:page:GXdRsewUPO5uAuwEAABEI:type:series?source=googleHBOMAX&action=play',
    genre: 'Comedy',
    element: getElement('.comedy'),
  },
  {
    name: 'Ponto Cego',
    imageURL:
      'https://occ-0-778-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRS5umRu72x24bdKrfg0gatDn48feBVij6hqe__WbTTZZUTGm7hVcKtFOZ2wuc7L6JXmMVzNtm4bgdLGgFxhGGM-UNhJWTfk82z9.jpg',
    link: 'https://www.netflix.com/title/80058486',
    genre: 'Action',
    element: getElement('.action'),
  },
  {
    name: 'A Vida Depois',
    imageURL:
      'https://proxymedia.woopic.com/api/v1/images/331%2FTHEFALLOUTXW0185853_BAN1_2424_NEWTV_HD.jpg',
    link: 'https://play.hbomax.com/page/urn:hbo:page:GYc3xuwu2x5rCFgEAAALb:type:feature?source=googleHBOMAX&action=play',
    genre: 'Drama',
    element: getElement('.drama'),
  },
  {
    name: 'Tropa de Elite',
    imageURL:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/ED0065E47DE500D531BED7C6F7CFA8263DF3D6057F39F22B633583D707EA9468',
    link: 'https://www.starplus.com/movies/elite-squad/6MJRS5Rnjh6z',
    genre: 'Action',
    element: getElement('.action'),
  },
  {
    name: 'Olhar Indiscreto',
    imageURL: 'https://i.ytimg.com/vi/9_u7qsHROsc/maxresdefault.jpg',
    link: 'https://www.netflix.com/title/81252980',
    genre: 'Thriller',
    element: getElement('.thriller'),
  },
  {
    name: 'Camp Rock',
    imageURL:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/428B009C01D35F1C226547796DEACAF11E5465B17A646205681CE8C718651C88',
    link: 'https://www.disneyplus.com/movies/camp-rock/7B1VpYuCyO71',
    genre: 'Musical',
    element: getElement('.musical'),
  },
  {
    name: 'Um Lugar Bem Longe Daqui',
    imageURL:
      'https://hbomax-images.warnermediacdn.com/images/GY0oj9g84pJSYugEAAAEu/tileburnedin?size=1280x720&partner=hbomaxcom&v=b8cb17ada80a5e216a61676991506ac2&host=art-gallery.api.hbo.com&language=pt-br',
    link: 'https://play.hbomax.com/page/urn:hbo:page:GY0oj9g84pJSYugEAAAEu:type:feature?source=googleHBOMAX&action=open',
    genre: 'Drama',
    element: getElement('.drama'),
  },
  {
    name: 'A Mulher na Janela',
    imageURL:
      'https://www.agenciaprimaz.com.br/wp-content/uploads/2021/05/2021-05-24_A-mulher-na-janela.jpg',
    link: 'https://www.netflix.com/title/81092222',
    genre: 'Thriller',
    element: getElement('.thriller'),
  },
  {
    name: 'O Milagre',
    imageURL:
      'https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABakDu_y8M9k7_accuiYOQz0-qv-j_EpzmWJ5vC90g6Ct6pSSbErvhoivUv9C0FWlvAqbPlLAkPIVHx-AjPJtrvBruTPEfkLMH9BxxUHE5a0s4gyeQ0ThsFyB_Que5lE0u0fznA.jpg',
    link: 'https://www.netflix.com/title/81426931',
    genre: 'Drama',
    element: getElement('.drama'),
  },
  {
    name: 'À Procura da Felicidade',
    imageURL:
      'https://hbomax-images.warnermediacdn.com/images/GYGa0uQNhd1XCeQEAAADj/tileburnedin?size=1280x720&partner=hbomaxcom&v=eab89dfd952d5d18072ee302f9f1b01d&host=art-gallery.api.hbo.com&language=pt-br',
    link: 'https://www.netflix.com/title/70044605',
    genre: 'Drama',
    element: getElement('.drama'),
  },
  {
    name: 'Stardust - O Mistério da Estrela',
    imageURL:
      'https://occ-0-4492-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdt-ojGlMtfpfPfrVfe-iknPapESZx3u-pHDIoDzranGGiJlRepWJ9Ed2JeEDu-959VZ-Y9pYUfl4ldPS6-mnLUoVYxt4ZxshTM.webp',
    link: 'https://www.netflix.com/title/70054920',
    genre: 'Adventure',
    element: getElement('.adventure'),
  },
  {
    name: 'A Garota no Trem',
    imageURL:
      'https://cinepop.com.br/wp-content/uploads/2016/10/garotanotrem_3.jpg',
    link: 'https://www.netflix.com/watch/81092222?source=35',
    genre: 'Thriller',
    element: getElement('.thriller'),
  },
  {
    name: 'O Projeto Adam',
    imageURL:
      'https://imgix.prensa.li/https%3A%2F%2Fstatic.prensa.li%2Fstories%2F80%2F51%2F0e%2F60%2F80510e60-deec-4a88-9e5e-5fbd05ebf68c.jpg?fit=crop&max-h=450&mh=450&w=800&s=92e16eb5400bb645def176e34895084f',
    link: 'https://www.netflix.com/title/81309354',
    genre: 'Adventure',
    element: getElement('.adventure'),
  },
  {
    name: 'Por Lugares Incríveis',
    imageURL:
      'https://uploads.spiritfanfiction.com/historias/capas/202110/por-lugares-incriveis-23138358-181020212050.jpg',
    link: 'https://www.netflix.com/title/80208802',
    genre: 'Drama',
    element: getElement('.drama'),
  },
  {
    name: 'Amor e Monstros',
    imageURL:
      'http://occ-0-4492-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaYe_GQQDcfyOCEs0lApJk0-CKtYr_m2ww_-vmJOYEF97cBADxgEroWW7f0R2n7QGego5e23qwPiGoLq9_o87GMW5JeCN_8z6YuZhrOhU-hVRdMVV6VSOdCWbVlZ40VSftRj.jpg?r=dca',
    link: 'https://www.netflix.com/title/81277430',
    genre: 'Adventure',
    element: getElement('.adventure'),
  },
  {
    name: 'Naquele Fim de Semana',
    imageURL: 'https://ntvb.tmsimg.com/assets/p21561617_v_h8_aa.jpg',
    link: 'https://www.netflix.com/title/81283586',
    genre: 'Thriller',
    element: getElement('.thriller'),
  },
  {
    name: 'Friends',
    imageURL:
      'https://hbomax-images.warnermediacdn.com/images/GXdbR_gOXWJuAuwEAACVH/tileburnedin?size=1280x720&partner=hbomaxcom&v=6a409f09891f75549fdb8d07dc969b63&host=art-gallery.api.hbo.com',
    link: 'https://play.hbomax.com/series/urn:hbo:series:GXdbR_gOXWJuAuwEAACVH?source=googleHBOMAX&action=play',
    genre: 'Comedy',
    element: getElement('.comedy'),
  },
  {
    name: 'A Escola do Bem e do Mal',
    imageURL:
      'https://occ-0-32-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWF4OXucnrOFi5jdW26ynDEVRSRxi9NIrjgqKAWgxMXmNbyZlx0VHgemTXJmYm4_sPj7h3ZAdYc4aZdUFJzquXGEEBZG5ZzsynSCz2cXHveEq2VXCCErPyHmi4kU1qLP7oirwA.jpg',
    link: 'https://www.netflix.com/title/80218885',
    genre: 'Adventure',
    element: getElement('.adventure'),
  },
];

const addMovie = ({ element, link, imageURL }) => {
  element.innerHTML += `
  <a href=${link} target="_blank"> <img src=${imageURL} class="image-card"></a>`;
};

biaflix.forEach(movie => addMovie(movie));

// const inputSearch = event => {
//   event.preventDefault();
//   let inputValue = getElement('.form-control').value;
//   inputValue = inputValue.toLowerCase();

//   biaflix.forEach(({ name }) => {
//     if (!name.toLowerCase().includes(inputValue)) {
//       cards.style.display = 'none';
//     } else {
//       cards.style.display = 'list-item';
//     }
//   });
// };

btn.addEventListener('click', inputSearch);

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};

window.onscroll = () => {
  scrollFunction();
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

mybutton.addEventListener('click', topFunction);
