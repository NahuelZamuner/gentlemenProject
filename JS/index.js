const $buttonMenu = document.getElementById('buttonMenu')
const $hiddenMenu = document.getElementById('hiddenMenu')
const $pageMenu = document.getElementById('page__menu')

$buttonMenu.addEventListener('click', () => {
    $buttonMenu.classList.add('cover__page--menuHidden')
    $hiddenMenu.classList.remove('cover__page--hidden')
    $pageMenu.classList.remove('page__menuHidden')
    $pageMenu.classList.add('page__menu--item')
})


$hiddenMenu.addEventListener('click', () => {
  $hiddenMenu.classList.add('cover__page--hidden')
  $buttonMenu.classList.remove('cover__page--menuHidden')
  $pageMenu.classList.add('page__menuHidden')
  $pageMenu.classList.remove('page__menu--item')

})