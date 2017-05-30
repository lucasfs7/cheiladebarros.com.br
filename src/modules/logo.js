export default function () {
  const logo = document.querySelector('.logo')
  const logoTop = logo.offsetTop - logo.offsetHeight
  window.addEventListener('scroll', (e) => {
    const scrollTop = document.body.scrollTop
    if (scrollTop <= logoTop) {
      logo.classList.remove('fixed')
    } else {
      logo.classList.add('fixed')
    }
  })
}
