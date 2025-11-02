const LESSONS = [
  { name: "What is programming", Date: "1404/08/11", href: '' }
]
const body = document.getElementsByTagName('body')

LESSONS.forEach(element => {
  body[0].insertAdjacentHTML('beforeend', `<a href="${element.href}" target="_blank">
    <div>
      <h2>${element.name}</h2>
      <p>${element.Date}</p>
    </div>
  </a>`)
});