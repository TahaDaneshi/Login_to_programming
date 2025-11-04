// Frame work
export default function header(place, num = 1, text) {
  place.insertAdjacentHTML('beforeend', `<h${num}>${text}</h${num}>`)
}
export function head(html, title = 'string') {
  html.innerHTML = `
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="../style.css">
  <script type="module" defer src="./script.js"></script>
  </head>
  <body id="body"><body>`;
}
export function solidUnorderedList(place, title = 'sring', array = []) {
  let li = '';
  array.forEach(element => {
    if (Array.isArray(element)) {
      li += `<li><h3>${element[0]}</h3><p>${element[1]}</p></li>`
    } else { li += `<li>${element}</li>` }

  });
  place.insertAdjacentHTML("beforeend", `
    <ul>
      <h2>${title}</h2>
      ${li}
    </ul>`);
};
export function paragraph(place, text = 'string', type = 'paragraph') {
  place.insertAdjacentHTML('beforeend', `<p class="${type}">${text}<p>`)
}; // defatult= paragraph / definition / point / attention / golden /
export function link(place, link = 'string', text = link) {
  place.insertAdjacentHTML('beforeend', `
    <a href="${link}" target="_blank">${text}</a>
    `)
}
// EVENTS
