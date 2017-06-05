import arrayFrom from './arrayFrom'

export default function (slideshowSelector) {
  const slideshow = document.querySelector(slideshowSelector)
  const items = arrayFrom(slideshow.querySelectorAll('.photo'))
  const urls = items.map(el => el.getAttribute('data-image'))
  const callback = (index, url) => {
    items[index].style.backgroundImage = `url(${url})`
    items[index].classList.add('loaded')
  }

  urls.forEach((url, index) => {
    const img = document.createElement('img')
    img.onload = callback.bind(null, index, url)
    img.src = url
  })
}
