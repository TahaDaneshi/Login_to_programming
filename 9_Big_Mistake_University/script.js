import header, { head, paragraph, solidUnorderedList } from '../Auto_Create_Pages.js';
const html = document.documentElement;
head(html, 'Big Mistake University');
const body = document.getElementById('body');
const title = ['بزرگ ترین اشتباه تازه کار ها! داشنگاه بریم یا نریم؟', "Big Mistake University"];
const bigMistake = {
  title: ["بزرگترین اشتباح:", "Big Mistake:"], texts: [
    ["بپر بپر روی شاخه های مختلف.", "قبل از شروع یک شاخه یه تحقیق جامعی روش انجام بده و یک شاخه ازش رو انتخواب کن و حد عقل ۴ تا ۶ ماه عدامش بده و بعد اگر نپسندیدی اونوقت عوضش کن.", "وقتی شما یک شاخه برنامه نویسی را از حالت آماتوری خارج بشید وقتی که وارد حوضه های دیگه برنامه نویسی بشید خیلی سریعتر اونو یاد میگیرید."],
    ["", "", ""]]
};

const university = { title: ["دانشگاه بریم یا نریم؟", ""], text: ["حتما دانشگاه برید! اما نه انکه فکر کنید دانشگاه باعث میشه که شما متخصص بشید فقط ۱۵ درصد از مطالب دانشگاه ممکنه که توی کارت تاثیر داشته باشه و فقط برای انکه جو دانشگاه شمارا پخته تر کنه و مدرک تحصیلی شما بالاتر از دیپلم بره این کار را کنید و ممکنه توی دانشگاه هم بتونید تیم تشکیل بدید اگر داشنگاه در زمینه برنامه نویسی انتخواب کنید ولی اگر رشتتون هم مرتبط با برنامه نویسی نبود هم مشکلی نداره و مهم اینه که یک مدرک دانشگاهی داشته باشید.", ""], attention: ["مراقب باشید که دانشگاهی که میرید جو مخربی نداشته باشه.", ""] };

//  FUNCTIONS
function Page(language) {
  let lang = language === "Fa" ? 0 : 1;
  header(body, 1, title[lang]);
  header(body, 2, bigMistake.title[lang]);
  university.text[lang].array.forEach(element => {
    paragraph(body, element);
  });
  header(body, 2, university.title[lang]);
  paragraph(body, university.text[lang]);
  paragraph(body, university.attention[lang], 'attention');
};
Page('Fa');