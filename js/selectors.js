// If you take a look at js/selectors.js, you'll notice we don't have a document ready. Because we're just going to practice writing selectors, and not using the selectors to do anything quite yet, we don't need to worry about browser interaction.
// Write a function paragraphSelector that does not accept any parameters. The function should use an element selector to select the p tags in index.html and return those elements. (Note that we're using the plural because the selector will always return an array when used with tags, even if there's only one!)
function paragraphSelector(){
  return $('p')
}
// Write a function lastImageSelector that does not accept any parameters. The function should use the last jQuery selector to return the last image in index.html.
function lastImageSelector(){
  return $('img:last')
}
// Write a function ninjaBabySelector that does not accept any parameters. The function should use an ID selector to return the ninja baby image.
function ninjaBabySelector(){
  return  $('#baby-ninja')
}
// Write a function divSelector that does not accept any parameters. The function should use a class selector to return the two divs with the class pics.
function divSelector() {
  return $('.pics')
}
// Write a function firstListItem that does not accept any parameters. The function should use a first-child selector to return the first list item in the ul with the ID pic-list.
function firstListItem() {
  return $('#pic-list li:first-child')
}
