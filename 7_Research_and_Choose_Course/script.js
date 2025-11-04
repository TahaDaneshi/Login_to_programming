import header, { head, paragraph, solidUnorderedList } from '../Auto_Create_Pages.js';
const html = document.documentElement;
head(html, 'Research and Choose Curse');
const body = document.getElementById('body');
const title = ['چه دوره آموزشی را ببینیم؟ ریسرچر بودن یعنی چی؟', 'Research and Choose Curse'];
const list = [{ title: "ویژگی های دوره آموزشی:", texts: ['طولانی نباشد اما جامع باشه و تمام مباحث اصلی را پوشش دهد.', 'پروژه محور باشد: برای آموزش هاش پروژه بزنه', 'تجربی باشه: مدرس باید تجربه کا در بازار را داشته باشه و فقط مدرس نباشه.'] }, { title: '', texts: ['', '', ''] }];
const researcher = [{ title: 'ریسرچر بودن یا محقق بودن به چه معناست؟', p: 'هر سوالی یا مشکلی داری بری توی اینترنت بگردی و یا از هوش مصنوعی سوال بپرسی و باید بتونی خودت مشکلاتت را حل کنید.', point: 'مسائل اصلی را به صورت انگلیسی سرچ کنید در اینترنت چون منابع فارسی کمی وجود دارد.' }, { title: '', p: '', point: '' }];
// FUNCTIONS
function Page(language) {
  let lang = language === 'Fa' ? 0 : 1;
  header(body, 1, title[lang]);
  // list
  solidUnorderedList(body, list[lang].title, list[lang].texts);
  // researcher
  header(body, 2, researcher[lang].title);
  paragraph(body, researcher[lang].p);
  paragraph(body, researcher[lang].point, 'point');
};
Page('Fa');