export const listAdres = [
  {
    codeid: 1,
    coordinates: { x: 42.8746, y: 74.5998 },
    addres: "Ж/м Кок-Жар, ул. Новая 22",
    listPoint: [{ id: 1, geometry: [42.8746, 74.6] }],
    schedule: "10:00 - 22:00",
    contacts: ["0555555555", "050513132"],
  },
  {
    codeid: 2,
    coordinates: { x: 42.8746, y: 74.5998 },
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts: ["0700754454", "0502024964"],
    listPoint: [
      { id: 1, geometry: [42.8746, 74.6] },
      { id: 2, geometry: [42.8776, 74.605] },
      { id: 3, geometry: [42.8766, 74.625] },
    ],
  },
  {
    codeid: 3,
    coordinates: { x: 42.8998, y: 74.7998 },
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts: ["0700754454", "0502024964"],
    listPoint: [{ id: 1, geometry: [42.8998, 74.7998] }],
  },
  {
    codeid: 4,
    coordinates: { x: 42.8746, y: 74.5998 },
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts: ["0700754454", "0502024964"],
    listPoint: [{ id: 1, geometry: [42.8746, 74.6] }],
  },
  {
    codeid: 5,
    coordinates: { x: 42.8746, y: 74.5998 },
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts: ["0700754454", "0502024964"],
    listPoint: [{ id: 1, geometry: [42.8746, 74.6] }],
  },
  {
    codeid: 6,
    coordinates: { x: 42.8746, y: 74.5998 },
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts: ["0700754454", "0502024964"],
    listPoint: [{ id: 1, geometry: [42.8746, 74.6] }],
  },
  // {
  //   codeid: 5,
  //   coordinates: { x: 42.8746, y: 74.5998 },
  //   addres: 'Ул. Жайылма, дом 19',

  //   listPoint: [{ id: 1, geometry: [42.8746, 74.6] }],
  // },
  // {
  //   codeid: 6,
  //   coordinates: { x: 42.8746, y: 74.5998 },
  //   addres: 'Ул. Жайылма, дом 19',

  //   listPoint: [{ id: 1, geometry: [42.8746, 74.6] }],
  // },
];

export const listSpecialist = [
  {
    id: 1,
    name: "Дубанаева Элнура",
    logo: "https://masterpiecer-images.s3.yandex.net/66a2136c7c8911eeb26cbadf81d486ab:upscaled",
    rating: 5,
    schedule: ["ВТ", "СР", "ЧТ", "Пт"],
    countSchel: 5,
    desc: "Дубанаева Элнура является опытным backend разработчиком, а на данный момент она изучает frontend и успешко , с очень быстрым прогрессом делает сайты!",
  },
  {
    id: 2,
    name: "Эмилбеков Айжан",
    logo: "https://masterpiecer-images.s3.yandex.net/5fc98bf5ad510b6:upscaled",
    rating: 5,
    schedule: ["ВТ", "СР", "ЧТ", "Пт"],
    countSchel: 15,
    desc: "Айжан является опытынм стилистом и в нащем салоне она работает больше 2х лет, за это время она стала очень опытным чач-тарачем и сейчас она вынуждена уйти с работа, т.к. она случайно забеременела и на днях уже родит мальчика, счастья ей и долгих лет жизни ей и ее ребёнку)))",
  },
];

export const listDate = [
  {
    codeid: 1,
    date: "19.02.2024",
    codeUser: 1,
    nameUser: "Дубанаева Элнура",
    logo: "https://masterpiecer-images.s3.yandex.net/66a2136c7c8911eeb26cbadf81d486ab:upscaled",
    rating: 5,
    countSchel: 5,
    timeList: [
      {
        id: 1,
        time: "09:00",
        check: false,
      },
      {
        id: 2,
        time: "09:30",
        check: true,
      },
      {
        id: 3,
        time: "10:00",
        check: true,
      },
      {
        id: 4,
        time: "10:30",
        check: true,
      },
      {
        id: 5,
        time: "11:00",
        check: false,
      },
      {
        id: 6,
        time: "11:30",
        check: false,
      },
      {
        id: 7,
        time: "12:00",
        check: false,
      },
    ],
  },
  {
    codeid: 2,
    date: "20.02.2024",
    codeUser: 5,
    nameUser: "Эмилбеков Айжан",
    logo: "https://masterpiecer-images.s3.yandex.net/66a2136c7c8911eeb26cbadf81d486ab:upscaled",
    rating: 3,
    countSchel: 15,
    timeList: [
      {
        id: 1,
        time: "09:00",
        check: false,
      },
      {
        id: 2,
        time: "09:30",
        check: false,
      },
      {
        id: 3,
        time: "10:00",
        check: false,
      },
      {
        id: 4,
        time: "10:30",
        check: false,
      },
      {
        id: 5,
        time: "11:00",
        check: false,
      },
      {
        id: 6,
        time: "11:30",
        check: false,
      },
      {
        id: 7,
        time: "12:00",
        check: false,
      },
    ],
  },
  {
    codeid: 3,
    date: "21.02.2024",
    codeUser: 3,
    name: "Эмилбеков Айжан",
    logo: "https://masterpiecer-images.s3.yandex.net/5fc98bf5ad510b6:upscaled",
    rating: 4,
    countSchel: 55,
    timeList: [
      { id: 1, time: "09:00", check: false },
      { id: 2, time: "09:30", check: false },
      { id: 3, time: "10:00", check: false },
      { id: 4, time: "10:30", check: false },
      { id: 5, time: "11:00", check: false },
      { id: 6, time: "11:30", check: false },
      { id: 7, time: "12:00", check: false },
      { id: 8, time: "12:30", check: false },
      { id: 9, time: "13:00", check: false },
      { id: 10, time: "13:30", check: false },
      { id: 11, time: "14:00", check: false },
      { id: 12, time: "14:30", check: false },
      { id: 13, time: "15:00", check: false },
      { id: 14, time: "15:30", check: false },
      { id: 15, time: "16:00", check: false },
      { id: 16, time: "16:30", check: false },
      { id: 17, time: "17:00", check: false },
      { id: 18, time: "17:30", check: false },
      { id: 19, time: "18:00", check: false },
      { id: 20, time: "18:30", check: false },
      { id: 21, time: "19:00", check: false },
      { id: 22, time: "19:30", check: false },
      { id: 23, time: "20:00", check: false },
      { id: 24, time: "20:30", check: false },
      { id: 25, time: "21:00", check: false },
    ],
  },
];

export const listService = [
  {
    codeid: 1,
    logo: "https://i.pinimg.com/736x/2c/86/95/2c869539df5e67ed046105b10b0dff25.jpg",
    sum: "799",
    title: "Бикини глубокое шугаринг",
    descr: "Руки полностью шугаринг, Руки полностью шугаринг",
    time: 30,
  },
  {
    codeid: 2,
    logo: "https://static.baza.farpost.ru/v/1663231068923_bulletin",
    sum: "539",
    title: "Руки до локтя шугаринг",
    descr: "Руки полностью шугаринг, Руки полностью шугаринг",
    time: 40,
  },
  {
    codeid: 3,
    logo: "https://media.istockphoto.com/id/1208819242/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%BE%D0%BB%D0%BE%D1%81-%D1%83-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D0%BE%D0%B9-%D1%8D%D0%BF%D0%B8%D0%BB%D1%8F%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=siLpGJhu8AUmiii1m4MnWzDkUGZciu2zLfr1i3itFFA=",
    sum: "539",
    title: "Руки до локтя шугаринг",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates autem rerum consequatur repellendus sequi, obcaecati ad eveniet tempore, quas, assumenda perspiciatis! Nulla itaque sequi alias placeat eius reiciendis quia necessitatibus praesentium earum velit nostrum numquam illo delectus consequatur hic, animi, dolores doloribus voluptatibus esse quisquam sit architecto amet! Debitis.",
    time: 80,
  },
  {
    codeid: 4,
    logo: "https://i.pinimg.com/736x/2c/86/95/2c869539df5e67ed046105b10b0dff25.jpg",
    sum: "799",
    title: "Бикини глубокое шугаринг",
    descr: "Руки полностью шугаринг, Руки полностью шугаринг",
    time: 20,
  },
  {
    codeid: 5,
    logo: "https://static.baza.farpost.ru/v/1663231068923_bulletin",
    sum: "539",
    title: "Руки до локтя шугаринг",
    descr: "Руки полностью шугаринг, Руки полностью шугаринг",
    time: 20,
  },
  {
    codeid: 6,
    logo: "https://media.istockphoto.com/id/1208819242/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%BE%D0%BB%D0%BE%D1%81-%D1%83-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D0%BE%D0%B9-%D1%8D%D0%BF%D0%B8%D0%BB%D1%8F%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=siLpGJhu8AUmiii1m4MnWzDkUGZciu2zLfr1i3itFFA=",
    sum: "539",
    title: "Руки до локтя шугаринг",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates autem rerum consequatur repellendus sequi, obcaecati ad eveniet tempore, quas, assumenda perspiciatis! Nulla itaque sequi alias placeat eius reiciendis quia necessitatibus praesentium earum velit nostrum numquam illo delectus consequatur hic, animi, dolores doloribus voluptatibus esse quisquam sit architecto amet! Debitis.",
    time: 40,
  },
  {
    codeid: 7,
    logo: "https://media.istockphoto.com/id/1208819242/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%BE%D0%BB%D0%BE%D1%81-%D1%83-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D0%BE%D0%B9-%D1%8D%D0%BF%D0%B8%D0%BB%D1%8F%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=siLpGJhu8AUmiii1m4MnWzDkUGZciu2zLfr1i3itFFA=",
    sum: "539",
    title: "Руки до локтя шугаринг",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates autem rerum consequatur repellendus sequi, obcaecati ad eveniet tempore, quas, assumenda perspiciatis! Nulla itaque sequi alias placeat eius reiciendis quia necessitatibus praesentium earum velit nostrum numquam illo delectus consequatur hic, animi, dolores doloribus voluptatibus esse quisquam sit architecto amet! Debitis.",
    time: 40,
  },
  {
    codeid: 8,
    logo: "https://media.istockphoto.com/id/1208819242/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%BE%D0%BB%D0%BE%D1%81-%D1%83-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D0%BE%D0%B9-%D1%8D%D0%BF%D0%B8%D0%BB%D1%8F%D1%86%D0%B8%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=siLpGJhu8AUmiii1m4MnWzDkUGZciu2zLfr1i3itFFA=",
    sum: "539",
    title: "Руки до локтя шугаринг",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates autem rerum consequatur repellendus sequi, obcaecati ad eveniet tempore, quas, assumenda perspiciatis! Nulla itaque sequi alias placeat eius reiciendis quia necessitatibus praesentium earum velit nostrum numquam illo delectus consequatur hic, animi, dolores doloribus voluptatibus esse quisquam sit architecto amet! Debitis.",
    time: 40,
  },
];

export const listComments = {
  codeid: 1,
  name: "Эмилбеков Айжан",
  logo: "https://masterpiecer-images.s3.yandex.net/5fc98bf5ad510b6:upscaled",
  rating: 5,
  schedule: ["ВТ", "СР", "ЧТ", "Пт"],
  countSchel: 15,
  descr:
    "Приятная девушка. Быстро, чисто и аккуратно все сделала! Приятная девушка. Быстро, чисто и аккуратно все сделала! Приятная девушка. Быстро, чисто и аккуратно все сделала!",
  arrComm: [
    {
      id: 1,
      name: "Амираева Зулкумар",
      date: "23.02.2024",
      description:
        "В легкие руки попала )) спасибо большое вам,очень быстро работу выполнила",
    },
    {
      id: 2,
      name: "Османова Бегимай",
      date: "23.02.2024",
      description:
        "В легкие руки попала )) спасибо большое вам,очень быстро работу выполнила",
    },
  ],
};
