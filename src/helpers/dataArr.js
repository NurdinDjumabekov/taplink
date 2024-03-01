import { generationDate } from "./generationDate";

export const listAdres = [
  {
    codeid: 1,
    coordinatesX: 42.8746,
    coordinatesY: 74.5998,
    addres: "Ж/м Кок-Жар, ул. Новая 22",
    schedule: "10:00 - 22:00",
    contacts1: "0555555555",
    contacts2: "0505131324",
  },
  {
    codeid: 2,
    coordinatesX: 42.8746,
    coordinatesY: 74.5998,
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts1: "0700754454",
    contacts2: "0502024964",
  },
  {
    codeid: 3,
    coordinatesX: 42.8998,
    coordinatesY: 74.7998,
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts1: "0700754454",
    contacts2: "0502024964",
  },
  {
    codeid: 4,
    coordinatesX: 42.8746,
    coordinatesY: 74.5998,
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts1: "0700754454",
    contacts2: "0502024964",
  },
  {
    codeid: 5,
    coordinatesX: 42.8746,
    coordinatesY: 74.5998,
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts1: "0700754454",
    contacts2: "0502024964",
  },
  {
    codeid: 6,
    coordinatesX: 42.8746,
    coordinatesY: 74.5998,
    addres: "Ул. Жайылма, дом 19",
    schedule: "10:00 - 22:00",
    contacts1: "0700754454",
    contacts2: "0502024964",
  },
];

export const listSpecialist = [
  {
    id: 1,
    codeid_addres: 3,
    name: "Дубанаева Элнура",
    logo: "https://masterpiecer-images.s3.yandex.net/66a2136c7c8911eeb26cbadf81d486ab:upscaled",
    rating: 5,
    schedule: ["ВТ", "СР", "ЧТ", "Пт"],
    countSchel: 5,
    desc: "Дубанаева Элнура является опытным backend разработчиком, а на данный момент она изучает frontend и успешко , с очень быстрым прогрессом делает сайты!",
  },
  {
    id: 2,
    codeid_addres: 3,
    name: "Эмилбеков Айжан",
    logo: "https://masterpiecer-images.s3.yandex.net/5fc98bf5ad510b6:upscaled",
    rating: 5,
    schedule: ["ВТ", "СР", "ЧТ", "Пт"],
    countSchel: 15,
    desc: "Айжан является опытынм стилистом и в нащем салоне она работает больше 2х лет, за это время она стала очень опытным чач-тарачем и сейчас она вынуждена уйти с работа, т.к. она случайно забеременела и на днях уже родит мальчика, счастья ей и долгих лет жизни ей и ее ребёнку)))",
  },
  {
    id: 3,
    codeid_addres: 3,
    name: "Алиева Баатыра",
    logo: "data:image/jpeg;base64,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",
    rating: 5,
    schedule: ["ВТ", "СР", "ЧТ", "Пт"],
    countSchel: 15,
    desc: "Айжан является опытынм стилистом и в нащем салоне она работает больше 2х лет, за это время она стала очень опытным чач-тарачем и сейчас она вынуждена уйти с работа, т.к. она случайно забеременела и на днях уже родит мальчика, счастья ей и долгих лет жизни ей и ее ребёнку)))",
  },
];

// export const listDate = [
//   {
//     codeid: 1,
//     timeList: [
//       { id: 80, time: '09:00', check: false, time1: '2024-02-27 09:00:00.000' },
//       { id: 79, time: '09:30', check: false, time1: '2024-02-27 09:30:00.000' },
//       { id: 78, time: '10:00', check: false, time1: '2024-02-27 10:00:00.000' },
//       { id: 77, time: '10:30', check: false, time1: '2024-02-27 10:30:00.000' },
//       { id: 76, time: '11:00', check: false, time1: '2024-02-27 11:00:00.000' },
//       { id: 75, time: '11:30', check: false, time1: '2024-02-27 11:30:00.000' },
//       { id: 74, time: '12:00', check: false, time1: '2024-02-27 12:00:00.000' },
//       { id: 73, time: '12:30', check: false, time1: '2024-02-27 12:30:00.000' },
//       { id: 72, time: '13:00', check: false, time1: '2024-02-27 13:00:00.000' },
//       { id: 71, time: '13:30', check: false, time1: '2024-02-27 13:30:00.000' },
//       { id: 70, time: '14:00', check: false, time1: '2024-02-27 14:00:00.000' },
//       { id: 69, time: '14:30', check: false, time1: '2024-02-27 14:30:00.000' },
//       { id: 68, time: '15:00', check: false, time1: '2024-02-27 15:00:00.000' },
//       { id: 67, time: '15:30', check: false, time1: '2024-02-27 15:30:00.000' },
//       { id: 66, time: '16:00', check: false, time1: '2024-02-27 16:00:00.000' },
//       { id: 65, time: '16:30', check: false, time1: '2024-02-27 16:30:00.000' },
//       { id: 64, time: '17:00', check: false, time1: '2024-02-27 17:00:00.000' },
//       { id: 63, time: '17:30', check: false, time1: '2024-02-27 17:30:00.000' },
//       { id: 62, time: '18:00', check: false, time1: '2024-02-27 18:00:00.000' },
//       { id: 61, time: '18:30', check: false, time1: '2024-02-27 18:30:00.000' },
//       { id: 60, time: '19:00', check: false, time1: '2024-02-27 19:00:00.000' },
//       { id: 59, time: '19:30', check: false, time1: '2024-02-27 19:30:00.000' },
//       { id: 58, time: '20:00', check: false, time1: '2024-02-27 20:00:00.000' },
//       { id: 57, time: '20:30', check: false, time1: '2024-02-27 20:30:00.000' },
//       { id: 56, time: '21:00', check: false, time1: '2024-02-27 21:00:00.000' },
//     ],
//   },
//   {
//     codeid: 2,
//     timeList: [
//       { id: 80, time: '09:00', check: false, time1: '2024-02-28 09:00:00.000' },
//       { id: 79, time: '09:30', check: false, time1: '2024-02-28 09:30:00.000' },
//       { id: 78, time: '10:00', check: false, time1: '2024-02-28 10:00:00.000' },
//       { id: 77, time: '10:30', check: false, time1: '2024-02-28 10:30:00.000' },
//       { id: 76, time: '11:00', check: false, time1: '2024-02-28 11:00:00.000' },
//       { id: 75, time: '11:30', check: false, time1: '2024-02-28 11:30:00.000' },
//       { id: 74, time: '12:00', check: false, time1: '2024-02-28 12:00:00.000' },
//       { id: 73, time: '12:30', check: false, time1: '2024-02-28 12:30:00.000' },
//       { id: 72, time: '13:00', check: false, time1: '2024-02-28 13:00:00.000' },
//       { id: 71, time: '13:30', check: false, time1: '2024-02-28 13:30:00.000' },
//       { id: 70, time: '14:00', check: false, time1: '2024-02-28 14:00:00.000' },
//       { id: 69, time: '14:30', check: false, time1: '2024-02-28 14:30:00.000' },
//       { id: 68, time: '15:00', check: false, time1: '2024-02-28 15:00:00.000' },
//       { id: 67, time: '15:30', check: false, time1: '2024-02-28 15:30:00.000' },
//       { id: 66, time: '16:00', check: false, time1: '2024-02-28 16:00:00.000' },
//       { id: 65, time: '16:30', check: false, time1: '2024-02-28 16:30:00.000' },
//       { id: 64, time: '17:00', check: false, time1: '2024-02-28 17:00:00.000' },
//       { id: 63, time: '17:30', check: false, time1: '2024-02-28 17:30:00.000' },
//       { id: 62, time: '18:00', check: false, time1: '2024-02-28 18:00:00.000' },
//       { id: 61, time: '18:30', check: false, time1: '2024-02-28 18:30:00.000' },
//       { id: 60, time: '19:00', check: false, time1: '2024-02-28 19:00:00.000' },
//       { id: 59, time: '19:30', check: false, time1: '2024-02-28 19:30:00.000' },
//       { id: 58, time: '20:00', check: false, time1: '2024-02-28 20:00:00.000' },
//       { id: 57, time: '20:30', check: false, time1: '2024-02-28 20:30:00.000' },
//       { id: 56, time: '21:00', check: false, time1: '2024-02-28 21:00:00.000' },
//     ],
//   },
//   {
//     codeid: 3,
//     timeList: [
//       { id: 80, time: '09:00', check: false, time1: '2024-02-29 09:00:00.000' },
//       { id: 79, time: '09:30', check: false, time1: '2024-02-29 09:30:00.000' },
//       { id: 78, time: '10:00', check: false, time1: '2024-02-29 10:00:00.000' },
//       { id: 77, time: '10:30', check: false, time1: '2024-02-29 10:30:00.000' },
//       { id: 76, time: '11:00', check: false, time1: '2024-02-29 11:00:00.000' },
//       { id: 75, time: '11:30', check: false, time1: '2024-02-29 11:30:00.000' },
//       { id: 74, time: '12:00', check: false, time1: '2024-02-29 12:00:00.000' },
//       { id: 73, time: '12:30', check: false, time1: '2024-02-29 12:30:00.000' },
//       { id: 72, time: '13:00', check: false, time1: '2024-02-29 13:00:00.000' },
//       { id: 71, time: '13:30', check: false, time1: '2024-02-29 13:30:00.000' },
//       { id: 70, time: '14:00', check: false, time1: '2024-02-29 14:00:00.000' },
//       { id: 69, time: '14:30', check: false, time1: '2024-02-29 14:30:00.000' },
//       { id: 68, time: '15:00', check: false, time1: '2024-02-29 15:00:00.000' },
//       { id: 67, time: '15:30', check: false, time1: '2024-02-29 15:30:00.000' },
//       { id: 66, time: '16:00', check: false, time1: '2024-02-29 16:00:00.000' },
//       { id: 65, time: '16:30', check: false, time1: '2024-02-29 16:30:00.000' },
//       { id: 64, time: '17:00', check: false, time1: '2024-02-29 17:00:00.000' },
//       { id: 63, time: '17:30', check: false, time1: '2024-02-29 17:30:00.000' },
//       { id: 62, time: '18:00', check: false, time1: '2024-02-29 18:00:00.000' },
//       { id: 61, time: '18:30', check: false, time1: '2024-02-29 18:30:00.000' },
//       { id: 60, time: '19:00', check: false, time1: '2024-02-29 19:00:00.000' },
//       { id: 59, time: '19:30', check: false, time1: '2024-02-29 19:30:00.000' },
//       { id: 58, time: '20:00', check: false, time1: '2024-02-29 20:00:00.000' },
//       { id: 57, time: '20:30', check: false, time1: '2024-02-29 20:30:00.000' },
//       { id: 56, time: '21:00', check: false, time1: '2024-02-29 21:00:00.000' },
//     ],
//   },
// ];

const start = 9;
const end = 21;
export const listDate = [
  {
    codeid: 1,
    timeList: generationDate(0, start, end), // сегодня
  },
  {
    codeid: 2,
    timeList: generationDate(1, start, end), // завтра
  },
  {
    codeid: 3,
    timeList: generationDate(2, start, end), // послезавтра
  },
  {
    codeid: 4,
    timeList: generationDate(3, start, end),
  },
  {
    codeid: 5,
    timeList: generationDate(4, start, end),
  },
];

export const listService = [
  {
    codeid: 1,
    logo: "https://i.pinimg.com/736x/2c/86/95/2c869539df5e67ed046105b10b0dff25.jpg",
    sum: "799",
    title: "Бикини глубокое шугаринг и еще что-то ",
    descr: "Руки полностью шугаринг, Руки полностью шугаринг",
    time: 30,
  },
  {
    codeid: 2,
    logo: "https://static.baza.farpost.ru/v/1663231068923_bulletin",
    sum: "539",
    title:
      "Маникюр укрепление ногтей гелем, покрытие ногтей лаком, покрытие ногтей лаком френч",
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
    // timeBusy: 40,
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
      description: "КПЦ! Божественный мастер!",
    },
  ],
};

export const listCertificate = [
  {
    codeid: 1,
    sum: "1500",
    count: 0,
  },
  {
    codeid: 2,
    sum: "4000",
    count: 0,
  },
  {
    codeid: 3,
    sum: "5000",
    count: 0,
  },
  {
    codeid: 4,
    sum: "15000",
    count: 0,
  },
  {
    codeid: 5,
    sum: "20000",
    count: 0,
  },
];
