import logo from './logo'
import slideshow from './slideshow'

document.addEventListener('DOMContentLoaded', start)
if (document.readyState === "complete") start()

function start() {
  logo()
  slideshow('#home .slideshow')
}
