let $buttons = $('.menu > svg')
let $images = $('#images')

bindEvents()

$buttons.eq(0).addClass('active')

function bindEvents() {
  $('#menu').on('click', 'svg', function (ev) {
    let $button = $(ev.currentTarget)
    let index = $button.index()
    console.log(index)
    goToSlide(index)
    $buttons.removeClass('active')
    $button.addClass('active')
  })
}

function goToSlide(index) {
  $images.css({ transform: `translateX(${-(index) * 920}px)` })
}
