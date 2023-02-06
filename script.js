const getElement = name => document.querySelector(name);

const allMovies = [
  {
    name: 'Como perder um homem em 10 dias',
    imageURL: 'https://i.ytimg.com/vi/3IDeifYOCvM/maxresdefault.jpg',
    link: 'https://www.primevideo.com/region/na/dp/amzn1.dv.gti.a4ac5766-5720-adbb-a2e3-abaae36c7277/ref=atv_pr_sw_sc?autoplay=0',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
  },
  {
    name: 'Amor com data marcada',
    imageURL: 'https://i.ytimg.com/vi/hPRCcjMU5J4/maxresdefault.jpg',
    link: 'https://www.netflix.com/title/81034553',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
  },
  {
    name: '10 coisas que eu odeio em você',
    imageURL:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FCCA599068457179DED2857E0D6056E24DE45AF62F05D88A9AE293C5E8468222',
    link: 'https://www.disneyplus.com/movies/10-things-i-hate-about-you/10OzquDiTIJB',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
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
    name: 'Para todos os garotos que já amei',
    imageURL:
      'https://akamai.sscdn.co/uploadfile/letras/playlists/4/e/c/4/4ec416c969fe4421bbd96f7260808567.jpg',
    link: 'https://www.netflix.com/title/80203147',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
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
    name: 'Invocação do mal',
    imageURL:
      'https://hbomax-images.warnermediacdn.com/images/GXdu2RQKDmpuAuwEAADZ2/tileburnedin?size=1280x720&partner=hbomaxcom&v=3592a74a84701fd38a93e24088406671&host=art-gallery.api.hbo.com&language=pt-br',
    link: 'https://play.hbomax.com/page/urn:hbo:page:GXdu2RQKDmpuAuwEAADZ2:type:feature?source=googleHBOMAX&action=open',
    genre: 'Action',
    element: getElement('.thriller'),
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
    name: 'Vingadores: Ultimato',
    imageURL:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4BA82B57752DD611917C0EAAD80F74137B7A0C2C492896604410A499F3EF7400',
    link: 'https://www.disneyplus.com/movies/marvel-studios-avengers-endgame/aRbVJUb2h2Rf',
    genre: 'Fantasy',
    element: getElement('.fantasy'),
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
    name: 'Scarface',
    imageURL:
      'https://1.bp.blogspot.com/-YpzjXSoPew4/YGD9I-PkQBI/AAAAAAAAMck/gl3EqA_Kygg0fs_pKrLfu845aHdu0ayIQCLcBGAsYHQ/s1000/scarface.png',
    link: 'https://www.starplus.com/movies/scarface/1CrUa9DMnwXY',
    genre: 'Action',
    element: getElement('.action'),
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
    name: 'A Vida Depois',
    imageURL:
      'https://proxymedia.woopic.com/api/v1/images/331%2FTHEFALLOUTXW0185853_BAN1_2424_NEWTV_HD.jpg',
    link: 'https://play.hbomax.com/page/urn:hbo:page:GYc3xuwu2x5rCFgEAAALb:type:feature?source=googleHBOMAX&action=play',
    genre: 'Drama',
    element: getElement('.drama'),
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
    name: 'Por Lugares Incríveis',
    imageURL:
      'https://uploads.spiritfanfiction.com/historias/capas/202110/por-lugares-incriveis-23138358-181020212050.jpg',
    link: 'https://www.netflix.com/title/80208802',
    genre: 'Drama',
    element: getElement('.drama'),
  },
  {
    name: 'Stardust - O Mistério da Estrela',
    imageURL:
      'https://occ-0-4492-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdt-ojGlMtfpfPfrVfe-iknPapESZx3u-pHDIoDzranGGiJlRepWJ9Ed2JeEDu-959VZ-Y9pYUfl4ldPS6-mnLUoVYxt4ZxshTM.webp?r=62e',
    link: 'https://www.netflix.com/title/70054920',
    genre: 'Adventure',
    element: getElement('.adventure'),
  },
  {
    name: 'O Aventureiro: A Maldição da Caixa de Midas',
    imageURL:
      'http://occ-0-4492-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABewIU3mVtmlbtrdRDie2Cv-s5PlS258QGsS5uUXh0E9PJpeHIMsmnIDK3zNREcPlUdaQQTGKqXXB28wEmMopN1hEOs3ZuJh-hS4.webp?r=087',
    link: 'https://www.netflix.com/title/70297088',
    genre: 'Adventure',
    element: getElement('.adventure'),
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
    name: 'O Casamento do Meu Melhor Amigo',
    imageURL:
      'http://occ-0-4492-3851.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTaWrvAq82XVAEqL9mKmt1tMP8lFLJYIuRYPj3s-NUM4dd3gpBPvBUiEjF9ErgfERfKgdTR91XDMbEgTpqftJphOro_CEZAlqSM.webp',
    link: 'https://www.netflix.com/title/1154359',
    genre: 'Romantic Comedy',
    element: getElement('.romantic-comedy'),
  },
  {
    name: 'Friends',
    imageURL:
      'https://hbomax-images.warnermediacdn.com/images/GXdbR_gOXWJuAuwEAACVH/tileburnedin?size=1280x720&partner=hbomaxcom&v=6a409f09891f75549fdb8d07dc969b63&host=art-gallery.api.hbo.com',
    link: 'https://play.hbomax.com/series/urn:hbo:series:GXdbR_gOXWJuAuwEAACVH?source=googleHBOMAX&action=play',
    genre: 'Comedy',
    element: getElement('.comedy'),
  },
];

const addMovie = ({ element, link, imageURL }) => {
  element.innerHTML += `
  <a href=${link} target="_blank"> <img src=${imageURL} class="image-card"></a>`;
};

allMovies.forEach(movie => addMovie(movie));
