import headerOne, { solidParagraph, solidUnorderedList } from '../Auto_Create_Pages.js';
const body = document.getElementById('body');
const h1 = ['مقدمه', 'intro']
const pOne = ['وقتی یک شخص می گوید که میخواهد برنامه نویس شود مثل اینه که بگه میخواد ورزشکار شود و باید ببینیم که در چه شاخه ای از ورزش یا برنامه نوسی هست', '']
const descritpionItems = [[
  'این دوره برای افرادیه که میخواهند برنامه نوسی شوند',
  'پیش نیاز های برنامه نویسی',
  'شاخه های تخصصی برنامه نویسی',
  'آینده شغلی برنامه نویسی',
  'روشی های درامدزایی از برنامه نویسی',
  'معرفی درآمد هر یک از شاخه های برنامه نویسی',
  'ویژگی و محارت های عمومی یک برنامه نویس',
  'مدت زمانی که برای برنامه نویس شدن لازمه',
  'معرفیی روش های برنامه نوسی',
  'استفاده از هوشی مصنوعی به عنوان یک منتور برای روان شدن یادگیری',
  'چه دوره هایی راباید ببینید و چه دوره هایی را نباید ببینید', 'دانشگاه برای برنامه نویسان',
  'نوع مطالعه برنامه نویسی در دانشگاه'
], []]
function Fa() {
  headerOne(body, h1[0]);
  solidParagraph(body, pOne[0]);
  solidUnorderedList(body, 'توضیحات اولیه:', descritpionItems[0])
}
Fa();
function En() {
  headerOne(body, "Intro");
  solidParagraph(body, 'when');
}
// EVENTS
