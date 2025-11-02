const LESSONS = [
  { lesson: 1, name: "مقدمه", Date: "1404/08/11", href: './1_Intro/lesson_1.html' }
]
const body = document.getElementsByTagName('body')

LESSONS.forEach(element => {
  body[0].insertAdjacentHTML('beforeend', `<a href="${element.href}" target="_blank">
    <div>
      <h2>${element.lesson}: ${element.name}</h2>
      <p>${element.Date}</p>
    </div>
  </a>`)
});