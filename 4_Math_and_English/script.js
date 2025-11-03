import header, { head, paragraph } from '../Auto_Create_Pages.js';
const html = document.documentElement;
head(html, 'Math and English');
const body = document.getElementById('body');
const title = ['ریاضی و زبان انگلیسی', 'Math and English']
const English = [{
  header: 'انگلیسی در حد آیلتس؟ خیر',
  generalSentence:
    'در کل شاخه های برنامه نویسی تمام کد هایی که مینویسید به زبان انگلیسی است و باید انگلیسی تایپ کنید و شما اگر درکی از زبان انگلیسی داشته باشید مفهوم کد هایی که مینویسید را بیشتر درک میکنید - مثلا ما کدی داریم به نام پرینت و اگر شما بدونید که معنی پرینت میشه چاپ کردن راحت تر میتونید به کاربرد کدش که نمایشو چاپ کردن محتویاتشه پی ببرید.',
  aboutLearning:
    'با یادگیری زبان نگلیسی به بینهایت دوره پیشرفته و جدید دسترسی پیدا میکنید چون که توسعه دهندگان مقالات خود را با زبان انگلیسی انتشار میدهند'
}, {
  header: '',
  generalSentence: '',
  aboutLearning: ''
}]
const Math = [{ header: 'ریاضی در حد المپیاد؟ خیر', generalSentence: 'ریاضی در حد راهنمایی بلد باشی برای خیلی از شاخه های برنامه نویسی کافیه مثل حوضه وبسایت سازی اما در برخی از حوضه های دیگه مصل هوش مصنوعی خیلی کاربردیه و باید در برخی از موضوعات ریاضی محارت داشته باشی اما در کل هرچه ریاضی شما بهتر باشی در تمام شاخه های برنامه نویسی موفقی.' }, { header: '', generalSentence: '' }]
const goldenSentence = ['اگر یک زبان بلد باشی یک نفری ولی اگر دو زبان بلد باشی دو نفری و اگر سه زبان بلد باشی سه نفری.', '']
// FUNCTIONS
function Fa() {
  header(body, 1, title[0]);
  header(body, 2, English[0].header);
  paragraph(body, English[0].generalSentence);
  paragraph(body, English[0].aboutLearning);
  paragraph(body, goldenSentence[0], 'golden');
  header(body, 2, Math[0].header);
  paragraph(body, Math[0].generalSentence);
}
Fa();