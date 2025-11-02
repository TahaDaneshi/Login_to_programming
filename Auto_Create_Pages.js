// Frame work
export default function headerOne(place, text) {
  place.insertAdjacentHTML('beforeend', `<h1>${text}</h1>`)
}
export function solidParagraph(place, text) {
  place.insertAdjacentHTML('beforeend', `<p class="paragraph">${text}<p>`)
}
export function solidUnorderedList(place, title = 'sring', array = []) {
  let li = '';
  array.forEach(element => {
    li += `<li>${element}</li>`
  });
  place.insertAdjacentHTML("beforeend", `
    <ul>
      <h2>${title}</h2>
      ${li}
    </ul>`);
}
export function definitionParagraph(place, text = 'string') {
  place.insertAdjacentHTML('beforeend', `
    <p class="definition">${text}</p>
    `)
}
export function pointParagraph(place, text = 'string') {
  place.insertAdjacentHTML('beforeend', `
    <p class='point'>${text}</p>
    `)
}
// EVENTS
