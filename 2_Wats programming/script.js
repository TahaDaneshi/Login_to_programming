import headerOne, { head, solidParagraph, definitionParagraph, pointParagraph } from '../Auto_Create_Pages.js';
const html = document.documentElement;
head(html, 'Whats Programming?'); // craete head and body tags
const body = document.getElementById('body');
const h1 = ['برنامه نویسی چسیت؟', 'Whats Programming?']
const paragraphs = {
  starter: ['تازمانی که وارد کار برنامه نویسی نشده اید نمی توانید به معنای واقعی ان پی ببرید', ''],
  theGeneralConceptOfProgramming: ['مفهوم کلی برنامه نویسی اینه که برنامه ای را بنویسید.', ''],
  definitionOfProgramming: ['تعریف برنامه نویسی: اجرای دستورالعمل هایی که مرتب اجرامیشن و یک خروجی به ما میدهند.', ""],
  pointOfProgrammingIsPrecise: ['نکته: برنامه باید خیلی دقیق باشد چون که کامپیوتر و سخت افزارها هوش ندارند و فقط کاری که ما گفتیم انجام میدهند نه کمتر و نه بیشتر.', ''],
  teaMaker: [
    "چای ساز یه برنامه براش نوشته شده که تازمانی که دما آب به این مقدار نرسیده گرم میشود و بعد از اینکه مثلا به دمای ۱۰۰ درجه رسید دیگه گرمتر نمیشه و زمانی که دماش به ۸۵ درجه رسید دوباره گرم میشود.", ''],
  washingMachine: ['لباسشویی که ما درجه و مدت زمان را مشخص میکنیم و دکمه شورع را که میزنیم فقط دستورات مارا انجام میدهد', ''],
  mostElectricalAppliances: ['در دنیای واقعی اکثر مواردی که با برق کار میکنند از تکنولوژی های مختلف برنامه نویسی استفاده میکنند مثل: کامپیوتر و ماشین و وسایل آشپزخانه برقی و پزشکی و هوافضا...', '']
}
// FUNCTIONS
function Fa() {
  headerOne(body, h1[0]);
  solidParagraph(body, paragraphs.starter[0]);
  solidParagraph(body, paragraphs.theGeneralConceptOfProgramming[0]);
  definitionParagraph(body, paragraphs.definitionOfProgramming[0]);
  pointParagraph(body, paragraphs.pointOfProgrammingIsPrecise[0]);
  solidParagraph(body, paragraphs.teaMaker[0]);
  solidParagraph(body, paragraphs.washingMachine[0]);
  solidParagraph(body, paragraphs.mostElectricalAppliances[0]);
};
Fa();
function En() {

};