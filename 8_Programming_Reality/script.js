import header, { head, paragraph, solidUnorderedList } from '../Auto_Create_Pages.js';
const html = document.documentElement;
head(html, 'Programming Reality');
const body = document.getElementById('body');
const title = ["واقعیت های دنیای برنامه نویسی", "Programming Reality"];

const ul = {
  title: ["واقعیت های برنامه نویسی:", "Programming Reality"], texts: [[["صبر و پشتکار:", "برنامه نویسی صبر و پشتکار زیادی نیاز دارد چونکه قراره در روند یادگیری و کارت کلی مشکل توی پروژه هات به وجود بیاد."], ["آزمون و خطا:", "برای حل کردن مشکلات پرژت آزمون و خطاهای زیادی باید انجام دهید تا مشکل برترف شود."], ["سبک زندگی:", "نمیشه به عنوان شغل دوم به برنامه نویسی نگاه کرد چون که پیچیدگی و گستردگی زیادی هست و نمیشه تفریحی رفت سمتش."]],
  [["", ""], ["", ""], ["", ""]]]
};
const attention = ["بنامه نویسی یک شغل است مثل باقی شغل ها و خیلی عجیب و غریب نیست.", ""];
const goldenSentence = ["باد آورده را باد میبرد: هرچه سخت تر چیزی را به دست بیاوری سخت تر ازدست میدهی.", ""];
const ulBook = {
  title: ['کتاب های توسعه فردی:', ''], bookNames: [['اثرمرکب', 'ترزفکر', 'کار عمیق', 'بی حدومرز', 'چگونه کمالگرا نباشیم'],
  ['', '', '', '', '']]
};
const instagramAddress = ["ادرس اینستاگرام معلم: ebadi.dev", "Teacher instagram address: ebadi.dev"];

//  FUNCTIONS

function Page(language) {
  let lang = language === 'Fa' ? 0 : 1;
  header(body, 1, title[lang]);
  solidUnorderedList(body, ul.title[lang], ul.texts[lang]);
  paragraph(body, attention[lang], 'attention');
  paragraph(body, goldenSentence[lang], 'golden');
  solidUnorderedList(body, ulBook.title[lang], ulBook.bookNames[lang]);
  paragraph(body, instagramAddress[lang]);
}
Page("Fa");