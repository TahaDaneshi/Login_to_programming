import header, { head, paragraph } from '../Auto_Create_Pages.js';
const html = document.documentElement;
head(html, 'How to Learn?');
const body = document.getElementById('body');
const title = ["مدت زمان مورد نیاز برای یادگیری و روش های یادگیری؟", 'How to Learn?'];
const texts = [{
  time: { header: 'چقدر طول میکشه یادبگیرم؟', paragraph: '4 تا 6 ماه طول میگشد تا از حالت آماتوری بیرون بیای.', attention: 'اگر شما به آن حوضه علاقه، استعداد و پیشزمینه ای از برنامه نویسی و زبان انگلیسی داشته باشید سریعتر به نتیجه میرسید.' },
  bestMethod: { header: 'بهترین روش یادگیری؟', p: 'بستگی به تیپ شخصیتی خود دارد که ببینی با چه چیزی بهتر یادمیگیری (ویدئویی - کتاب - حضوری - کتاب الکترونیک' },
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
function Page() {

};
Page();