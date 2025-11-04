import header, { head, paragraph, link } from '../Auto_Create_Pages.js';
const html = document.documentElement;
head(html, 'How to Learn?');
const body = document.getElementById('body');
const title = ["مدت زمان مورد نیاز برای یادگیری و روش های یادگیری؟", 'How to Learn?'];
const texts = [{
  time: { header: 'چقدر طول میکشه یادبگیرم؟', paragraph: '4 تا 6 ماه طول میگشد تا از حالت آماتوری بیرون بیای.', attention: 'اگر شما به آن حوضه علاقه، استعداد و پیشزمینه ای از برنامه نویسی و زبان انگلیسی داشته باشید سریعتر به نتیجه برسید.' },
  bestMethod: { header: 'بهترین روش یادگیری؟', p: 'بستگی به تیپ شخصیتی خود دارد که ببینی با چه چیزی بهتر یادمیگیری (ویدئویی - کتاب - حضوری - کتاب الکترونیک)' },
  typeOfCourse: { header: 'دوره ویدئویی یا کلاس حضوری؟', p: 'پیشنهاد میکنم ویدئویی باشه و به صورت خودآموز یاد بگیرید چون که هم ارزان تر هست، کمتر وقت میگیرد، بروزتر هستند.' },
  hour: { header: 'چیند ساعت وقت بزاریم؟', p1: 'هرچقدر که توان دارید زمان براش بزارید، حتی اگر شده از صبح تا شب.', p2: 'حد اقل 4 ساعت زمان در روز باید براش بزارید.', point: 'استمرار از ساعات مطالعه مهم تر است و باید هر روز بخشی از زمانتون را براش بزارید.' },
  whatShouldLearn: { header: 'چی یادبگیرم؟', link: 'roadmap.sh', p: 'شاخه مورد نظر و یا زبان مورد نظر را انتخواب می کنی و مسیر یادگیری آن را بهت میگه و اینکه منابعی و توضیحاتی را هم در باره تک تک مراحل یادگیریش میده.' }
}, {
  time: { header: '', paragraph: '', attention: '' },
  bestMethod: { header: '', p: '' },
  typeOfCourse: { header: '', p: '' },
  hour: { header: '', p1: '', p2: '', point: '' },
  whatShouldLearn: { header: '', link: '', p: '' }
}];
// FUNCTIONS
function Page(language) {
  let lang = language === 'Fa' ? 0 : 1;
  header(body, 1, title[lang]);
  // time
  header(body, 2, texts[lang].time.header);
  paragraph(body, texts[lang].time.paragraph);
  paragraph(body, texts[lang].time.attention, 'attention');
  // best method
  header(body, 2, texts[lang].bestMethod.header);
  paragraph(body, texts[lang].bestMethod.p);
  // hour
  header(body, 2, texts[lang].hour.header);
  paragraph(body, texts[lang].hour.p1);
  paragraph(body, texts[lang].hour.p2);
  paragraph(body, texts[lang].hour.point, 'point');
  // what Should I Learn?
  header(body, 2, texts[lang].whatShouldLearn.header);
  link(body, texts[lang].whatShouldLearn.link);
  paragraph(body, texts[lang].whatShouldLearn.p);
};
Page('Fa');