const LESSONS = [
  { FaName: "مقدمه", EnName: '', FaDate: "1404/08/11", href: './1_Intro/lesson_1.html' }
]
const html = document.documentElement;
const body = document.getElementsByTagName('body')
function mainPage(language = 'Fa') {
  LESSONS.forEach((element, index) => {
    let Fa = { name: element.FaName, date: element.FaDate }
    let En = { name: element.EnName, date: element.FaDate }
    let lang = language === 'Fa' ? Fa : En;
    body[0].insertAdjacentHTML('beforeend', `<a href="${element.href}" target="_blank">
    <div>
      <h2>${index++}: ${lang.name}</h2>
      <p>${lang.date}</p>
    </div>
  </a>`)
  })
};
mainPage('Fa');