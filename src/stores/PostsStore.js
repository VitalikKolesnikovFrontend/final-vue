import { defineStore } from "pinia";

export const usePostsStore = defineStore("postsStore", {
  state: () => ({
    posts: [
      {
        id: 1,
        slug: "lorem-ipsum",
        url: "https://jsonplaceholder.org/posts/lorem-ipsum",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content:
          "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at. Ipsum molestie phasellus euismod sagittis mauris, erat ut. Gravida morbi, sagittis blandit quis ipsum mi mus semper dictum amet himenaeos. Accumsan non congue praesent interdum habitasse turpis orci. Ante curabitur porttitor ullamcorper sagittis sem donec, inceptos cubilia venenatis ac. Augue fringilla sodales in ullamcorper enim curae; rutrum hac in sociis! Scelerisque integer varius et euismod aenean nulla. Quam habitasse risus nullam enim. Ultrices etiam viverra mattis aliquam? Consectetur velit vel volutpat eget curae;. Volutpat class mus elementum pulvinar! Nisi tincidunt volutpat consectetur. Primis morbi pulvinar est montes diam himenaeos duis elit est orci. Taciti sociis aptent venenatis dui malesuada dui justo faucibus primis consequat volutpat. Rhoncus ante purus eros nibh, id et hendrerit pellentesque scelerisque vehicula sollicitudin quam. Hac class vitae natoque tortor dolor dui praesent suspendisse. Vehicula euismod tincidunt odio platea aenean habitasse neque ad proin. Bibendum phasellus enim fames risus eget felis et sem fringilla etiam. Integer.",
        image:
          "https://americanmind.org/wp-content/uploads/2023/03/GettyImages-1429150390.jpg",
        thumbnail:
          "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "04/02/2023 13:25:21",
        updatedAt: "14/03/2023 17:22:20",
        userId: 1,
        author: "User1",
      },
      {
        id: 2,
        slug: "condimentum.",
        url: "https://jsonplaceholder.org/posts/condimentum.",
        title:
          "Quisque non ligula laoreet, volutpat velit cursus, condimentum arcu.",
        content:
          "Placerat erat consectetur mauris sollicitudin facilisis praesent nam nascetur! Semper odio est condimentum sollicitudin fames orci porttitor consequat platea urna. Sit faucibus luctus sollicitudin, purus euismod. Volutpat habitasse molestie magnis tempus tempus conubia! Quam fringilla vitae, lacus tortor fusce. Ante enim pretium proin nec, bibendum tempus ipsum porta. Hac nunc nunc pretium! Mauris consectetur, nulla taciti class. Porttitor, nulla rutrum integer torquent accumsan magnis? Morbi condimentum senectus pulvinar duis; himenaeos adipiscing. Lacus facilisi ad scelerisque vestibulum nisl. Mi torquent curae; gravida molestie sagittis imperdiet habitasse aenean mus. Nibh nibh nisl parturient odio eros lorem suspendisse blandit torquent cum elementum. Nibh feugiat metus cursus rutrum feugiat lacinia suspendisse suscipit mollis dolor eget nisl. Adipiscing ullamcorper lobortis in. Tellus taciti fames elit consectetur laoreet pulvinar. Potenti tristique a mus, eget pharetra! Viverra.",
        image:
          "https://americanmind.org/wp-content/uploads/2023/03/GettyImages-1429150390.jpg",
        thumbnail:
          "https://dummyimage.com/200x200/08110f/condimentum..png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "25/12/2022 13:10:07",
        updatedAt: "19/01/2023 08:25:17",
        userId: 2,
        author: "User1",
      },
      {
        id: 3,
        slug: "morbi-dictum",
        url: "https://jsonplaceholder.org/posts/morbi-dictum",
        title: "Morbi dictum dui vel bibendum ultrices.",
        content:
          "Et ullamcorper, litora integer taciti suspendisse. Sociosqu hac bibendum elit quisque et porta in viverra sagittis conubia luctus himenaeos. Tempus ultricies egestas tempus aliquet commodo netus ultricies semper montes turpis eros dis. Scelerisque torquent enim ac pellentesque primis congue consectetur varius congue erat curae;! Scelerisque nunc condimentum class erat ultrices. Fringilla eros vulputate quisque platea aptent vivamus porta natoque. Laoreet vehicula aliquam, integer ornare interdum magna. Molestie facilisi volutpat platea primis aptent facilisi etiam ut vestibulum dis sagittis. Fames elit tincidunt id. Ante id tempus sollicitudin platea. Sagittis id fermentum litora placerat ligula primis consectetur dictum. Ligula orci facilisi dis, egestas tempus urna sollicitudin laoreet turpis tincidunt elementum imperdiet. Lobortis convallis natoque dictum dapibus enim accumsan diam pulvinar fusce. Proin nullam duis pretium hac hac dictum purus neque eget rutrum. Suspendisse sodales libero cum felis. Porta curabitur lobortis libero mollis at tempus egestas luctus erat sapien!",
        image:
          "https://americanmind.org/wp-content/uploads/2023/03/GettyImages-1429150390.jpg",
        thumbnail:
          "https://dummyimage.com/200x200/5e917f/morbi-dictum.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "06/02/2023 10:19:53",
        updatedAt: "16/01/2023 07:25:47",
        userId: 3,
        author: "User1",
      },
      {
        id: 4,
        slug: "feugiat",
        url: "https://jsonplaceholder.org/posts/feugiat",
        title: "Duis bibendum augue et feugiat imperdiet.",
        content:
          "Primis conubia vivamus vestibulum curabitur! Pellentesque ad vitae cras mollis morbi elementum. Quisque gravida arcu vehicula morbi scelerisque curae; mi sapien. Elementum cum interdum senectus dolor vulputate. Pulvinar ultricies mauris arcu primis aenean arcu sagittis. Vulputate mollis fermentum luctus magnis convallis pellentesque commodo montes ut suspendisse turpis. Fermentum dapibus mattis sociosqu condimentum aliquam. Ut magna vel lacinia dis luctus tincidunt dapibus montes ligula dictumst potenti duis. Lobortis lorem litora auctor parturient mollis vel etiam fusce euismod pretium? Integer per faucibus netus fringilla. Libero mi rhoncus est aliquam? Montes ultricies consequat hac fusce tempus lacinia taciti. Sagittis; luctus vestibulum mus libero eleifend. Tempor arcu gravida bibendum quam aptent. Ad scelerisque lectus volutpat semper, luctus urna magnis duis vitae aliquam. Ut iaculis magna nullam vivamus sociis cubilia maecenas accumsan. Inceptos proin montes ultricies nunc bibendum vestibulum lorem. Fames curae; lectus tempor lacus? Habitant nullam imperdiet eleifend sem odio tempor sit! Purus ornare dui, erat dictumst maecenas turpis penatibus. Cursus tellus congue luctus etiam pharetra potenti sagittis consequat odio. Integer gravida habitasse duis cum metus sociosqu aenean aliquet commodo cubilia imperdiet? Ante litora sapien rutrum sodales tortor odio tempor cubilia mus erat nascetur! Senectus natoque vehicula dui gravida.",
        image:
          "https://dummyimage.com/800x430/81b563/feugiat.png&text=jsonplaceholder.org",
        thumbnail:
          "https://dummyimage.com/200x200/81b563/feugiat.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "13/01/2023 15:18:26",
        updatedAt: "23/01/2023 10:53:55",
        userId: 4,
        author: "User2",
      },
      {
        id: 5,
        slug: "integer",
        url: "https://jsonplaceholder.org/posts/integer",
        title: "Integer molestie metus eu felis facilisis venenatis.",
        content:
          "Taciti proin leo faucibus montes parturient cursus quis sodales hac magna dui cursus. Neque aliquam dolor mollis commodo primis. Quisque suscipit proin pharetra nascetur quisque litora cubilia arcu. Cursus, mattis venenatis ullamcorper fringilla donec dictumst. Eros pulvinar eu nibh sodales tincidunt leo turpis justo purus facilisi. Cum vitae suscipit aenean cum lorem etiam molestie viverra condimentum. Proin cursus hac elit eros. Est risus vitae eu sociis magnis, malesuada rutrum. Sodales non cras ridiculus venenatis malesuada dui quam parturient cubilia tristique. Non elementum mollis turpis conubia velit semper natoque ac magnis. Hendrerit tortor ridiculus, fusce nec. Vel interdum condimentum semper fringilla nunc per lobortis senectus condimentum maecenas. Litora tristique, aliquet laoreet amet. Aptent cubilia libero quam dignissim urna. Orci donec morbi blandit pellentesque aptent ac blandit montes ultrices dignissim suspendisse. Class lacus egestas in eu ac condimentum cras.",
        image:
          "https://dummyimage.com/800x430/10421c/integer.png&text=jsonplaceholder.org",
        thumbnail:
          "https://dummyimage.com/200x200/10421c/integer.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "22/12/2022 14:53:38",
        updatedAt: "16/01/2023 21:56:46",
        userId: 5,
        author: "User2",
      },
      {
        id: 6,
        slug: "elementum",
        url: "https://jsonplaceholder.org/posts/elementum",
        title:
          "Nam vehicula risus non sapien tincidunt, sit amet elementum turpis posuere.",
        content:
          "Risus nascetur sodales gravida hendrerit posuere primis feugiat. Eget sodales eget non odio nostra. Montes platea hac inceptos parturient diam elementum auctor luctus. Habitasse odio tempus ut ornare sagittis curae; lobortis sed sapien sit in dictum? Nascetur conubia dictumst netus diam nec nisi integer proin. Suspendisse egestas platea semper sagittis neque nec nulla diam habitasse lacinia. Luctus egestas litora, nisi porta posuere curabitur. Ante, ridiculus nisi egestas urna ad suscipit a arcu leo. Vulputate dignissim commodo montes placerat mattis, faucibus gravida porta erat erat natoque. Luctus velit duis, nec quis senectus nulla fusce habitant arcu. Etiam phasellus egestas nostra dignissim. Lacus scelerisque pretium taciti quam venenatis habitasse. Eget sociis rhoncus dolor nascetur magnis ornare nibh. Aenean inceptos justo vivamus primis. Inceptos curabitur auctor pharetra id ornare dictum mollis ipsum nam aliquet purus. In ultrices facilisis facilisi. At curae; sem non fringilla vestibulum porttitor faucibus! Sapien curae;, scelerisque suspendisse nisi vehicula. Blandit a fusce quis feugiat cursus. Tempor tortor bibendum sodales. Ultrices sed egestas lectus? Varius placerat a primis libero quam ultricies laoreet.",
        image:
          "https://americanmind.org/wp-content/uploads/2023/03/GettyImages-1429150390.jpg",
        thumbnail:
          "https://dummyimage.com/200x200/010504/elementum.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "31/01/2023 14:09:34",
        updatedAt: "11/03/2023 18:50:19",
        userId: 6,
        author: "User3",
      },
      {
        id: 7,
        slug: "rutrum",
        url: "https://jsonplaceholder.org/posts/rutrum",
        title: "Vivamus accumsan orci eget rutrum eleifend.",
        content:
          "Elementum accumsan feugiat condimentum tortor lacus enim? Iaculis litora maecenas quisque aenean ridiculus per, senectus cum parturient condimentum. Mattis fames fermentum nec taciti porta. Eros ridiculus natoque suspendisse potenti feugiat neque! Cum, lobortis porta iaculis vulputate vestibulum. Facilisis quis ligula interdum quis euismod taciti magna dui porttitor, hendrerit senectus! Pellentesque viverra ipsum luctus amet curabitur himenaeos adipiscing mi arcu lectus duis. Egestas enim praesent bibendum lobortis habitasse. Sit ac sodales sodales vestibulum ligula nostra imperdiet amet inceptos rutrum? Dolor placerat orci ipsum luctus eros lobortis volutpat. Nibh tortor sociosqu lorem senectus viverra platea quis in. Congue iaculis hac pretium vehicula accumsan lobortis fusce netus. Consectetur vel dapibus molestie tempus, euismod curabitur egestas platea malesuada. Consectetur leo elementum elit est egestas dignissim quam scelerisque, nunc taciti eleifend et! Augue curabitur aenean bibendum hac auctor mollis. Tempor, taciti posuere lacinia euismod condimentum pharetra egestas nostra suscipit tortor mi. Ipsum ipsum cras leo, ac cum rutrum natoque.",
        image:
          "https://dummyimage.com/800x430/8ba09c/rutrum.png&text=jsonplaceholder.org",
        thumbnail:
          "https://dummyimage.com/200x200/8ba09c/rutrum.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "10/11/2022 19:23:45",
        updatedAt: "08/02/2023 22:42:11",
        userId: 7,
        author: "User1",
      },
      {
        id: 8,
        slug: "consectetur",
        url: "https://jsonplaceholder.org/posts/consectetur",
        title:
          "Aliquam mollis lectus a nibh sagittis, vel facilisis est consectetur.",
        content:
          "Cubilia commodo fermentum magnis ultrices orci tincidunt vivamus aliquet condimentum, odio massa fermentum. Eleifend at aliquet porta nostra taciti lectus donec molestie sapien. Pellentesque aptent interdum nam ultricies parturient sem lacus nunc fringilla pretium. Posuere senectus aliquam vitae cum pulvinar suscipit ridiculus morbi odio tempor purus vestibulum! Nascetur massa dolor facilisis urna volutpat penatibus mi magna torquent nullam eget. Eros platea pharetra magna magna sociosqu ridiculus! Est condimentum ante sem orci nullam. Sagittis mollis pellentesque lobortis natoque nibh feugiat facilisi. Libero convallis leo taciti dis nisi sapien placerat dui vel inceptos enim vel. Justo feugiat risus imperdiet cras, mattis per scelerisque. Blandit vitae nunc ut tristique nisi ultricies nullam ut! Habitasse dui nisi cum eros lacinia dictum condimentum lectus dapibus quisque habitant penatibus. Eros ornare sociosqu velit maecenas habitasse himenaeos cubilia netus mauris consequat luctus. Lectus himenaeos sapien integer? Consequat himenaeos, torquent ultricies quisque fusce porta. Nascetur cras massa nascetur.",
        image:
          "https://dummyimage.com/800x430/9e3256/consectetur.png&text=jsonplaceholder.org",
        thumbnail:
          "https://dummyimage.com/200x200/9e3256/consectetur.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "11/12/2022 20:02:05",
        updatedAt: "11/03/2023 12:50:47",
        userId: 8,
        author: "User4",
      },
      {
        id: 9,
        slug: "eleifend",
        url: "https://jsonplaceholder.org/posts/eleifend",
        title:
          "Nullam maximus nibh non justo efficitur, tempus ultrices leo eleifend.",
        content:
          "Fringilla ultrices duis gravida morbi montes nec penatibus mus! Potenti luctus porttitor dis. Massa inceptos dignissim metus posuere faucibus cum in rhoncus habitasse aliquam eros. Nostra vestibulum vivamus potenti bibendum etiam sodales litora hac elementum platea egestas? Cubilia tristique sapien magna. Nascetur mi morbi lacus pretium nascetur fusce neque cursus amet class. Ligula vehicula purus sit etiam hac? Orci scelerisque malesuada metus interdum dignissim id dignissim ultrices maecenas ornare. Nec orci hendrerit orci dignissim nisl eros lacinia netus. Elementum at leo condimentum. Faucibus mollis cras ullamcorper congue nec, morbi nulla. Quis tincidunt consectetur dui vestibulum adipiscing integer adipiscing adipiscing gravida tristique nisi. Semper rhoncus, tortor hac class luctus donec velit quam aliquet. Tincidunt suspendisse purus turpis nisl maecenas sagittis id conubia. Dignissim sit ornare elementum senectus. Tortor dapibus ullamcorper senectus dignissim purus potenti faucibus. Lacinia justo hendrerit quis ultricies conubia eu sollicitudin. Fringilla vitae justo dictumst suscipit dictum torquent. Felis quisque quam netus faucibus neque per at lectus.",
        image:
          "https://dummyimage.com/800x430/83a339/eleifend.png&text=jsonplaceholder.org",
        thumbnail:
          "https://dummyimage.com/200x200/83a339/eleifend.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "31/01/2023 11:41:09",
        updatedAt: "19/03/2023 10:09:17",
        userId: 9,
        author: "User2",
      },
      {
        id: 10,
        slug: "suspendisse",
        url: "https://jsonplaceholder.org/posts/suspendisse",
        title:
          "Suspendisse hendrerit enim sit amet turpis posuere dignissim id consectetur eros.",
        content:
          "Id aliquet convallis sodales mi arcu fusce. Congue praesent vitae pretium mattis cras integer mi, metus gravida laoreet. Mi montes leo vulputate magnis est duis. Euismod ligula cubilia eu ipsum, nibh neque! Venenatis vitae netus pellentesque duis pharetra diam. Netus habitasse magna fusce viverra dapibus facilisis molestie fermentum. Lobortis hendrerit gravida volutpat cursus cum phasellus sit vitae, ultrices fringilla. Mi natoque condimentum quam. A faucibus varius commodo luctus sociosqu etiam ornare senectus.",
        image:
          "https://dummyimage.com/800x430/753b01/suspendisse.png&text=jsonplaceholder.org",
        thumbnail:
          "https://dummyimage.com/200x200/753b01/suspendisse.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "22/11/2022 18:56:23",
        updatedAt: "30/01/2023 18:50:17",
        userId: 10,
        author: "User5",
      },
      {
        id: 11,
        slug: "vestibulum",
        url: "https://jsonplaceholder.org/posts/vestibulum",
        title: "Vestibulum placerat urna non cursus placerat.",
        content:
          "Cras rutrum, fringilla egestas. Eros mattis posuere augue cras est adipiscing pharetra? Eros laoreet sociosqu non donec ultricies vitae enim mi, condimentum felis. Rutrum adipiscing erat turpis? Bibendum pulvinar senectus viverra leo non erat eleifend vehicula urna integer suscipit. Sociosqu mi neque ultrices aptent orci, turpis quam venenatis. Dignissim cubilia litora vestibulum elementum cubilia conubia cum facilisi class. Facilisis eu fusce fringilla netus tempor felis ad mi pellentesque tellus primis curabitur. Dictum aliquet, habitasse quis? Primis arcu platea sit dignissim accumsan ipsum vestibulum dapibus. Mi laoreet, eleifend mi sapien turpis eu placerat. Cubilia felis nisl amet bibendum purus egestas dictumst. Elementum facilisis maecenas, posuere tempor maecenas ut. Faucibus eleifend natoque.",
        image:
          "https://dummyimage.com/800x430/18996c/vestibulum.png&text=jsonplaceholder.org",
        thumbnail:
          "https://dummyimage.com/200x200/18996c/vestibulum.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "11/02/2023 14:52:19",
        updatedAt: "27/01/2023 10:32:45",
        userId: 11,
        author: "User3",
      },
      {
        id: 12,
        slug: "etiam-congue",
        url: "https://jsonplaceholder.org/posts/etiam-congue",
        title: "Etiam congue leo ut urna tempor venenatis.",
        content:
          "Fames volutpat est posuere. Mattis semper blandit dictum felis pellentesque elit aliquet id! Senectus sagittis euismod turpis. Velit torquent mi iaculis vel blandit sollicitudin lectus lectus dapibus justo. Phasellus et ipsum sed nisi litora neque. Amet aptent facilisi lobortis quam metus et placerat elit cum nisl per vivamus. Porttitor vitae lectus ridiculus maecenas tempor porttitor et risus. Inceptos imperdiet aptent integer pharetra montes porta. Accumsan laoreet integer consequat magnis. Sem etiam potenti proin consequat sodales ridiculus luctus etiam nunc. Aenean nam integer vulputate tortor blandit accumsan laoreet erat non nam lacinia orci. Sollicitudin porttitor id dictum eget vitae magnis nisl magna. Gravida fermentum volutpat ultricies feugiat nam dui magna risus ornare. Pulvinar, sagittis interdum dictumst placerat morbi. Pharetra nisl semper aliquam velit sociis enim pellentesque facilisis fusce malesuada. Ipsum eros ultricies convallis scelerisque mauris imperdiet feugiat porta placerat nisl integer? Cras feugiat morbi libero donec phasellus nullam cubilia luctus purus tempus. Suspendisse scelerisque praesent pharetra platea class nibh maecenas. Congue nunc bibendum diam sapien et condimentum placerat nulla turpis! In himenaeos ut ridiculus et. Inceptos urna dictumst mattis natoque augue odio platea sagittis. Dolor, aliquet non donec torquent quis elementum donec pellentesque. Sagittis blandit vestibulum sollicitudin.",
        image:
          "https://dummyimage.com/800x430/5d6355/etiam-congue.png&text=jsonplaceholder.org",
        thumbnail:
          "https://dummyimage.com/200x200/5d6355/etiam-congue.png&text=jsonplaceholder.org",
        status: "published",
        category: "lorem",
        publishedAt: "19/01/2023 16:25:41",
        updatedAt: "02/02/2023 12:46:28",
        userId: 12,
        author: "User4",
      },
    ],
  }),
});
