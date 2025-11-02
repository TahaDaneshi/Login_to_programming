// Frame work
const place = document.getElementById('taha')
function header(place, text) {
  place.insertAdjacentHTML('beforeend', `<h1>${text}<h1>`)
}
function unorderedList(place, text) {
  place.insertAdjacentHTML('beforeend', `<p class="paragraph">${text}<p>`)
}
module.exports = {
  header,
  unorderedList
}