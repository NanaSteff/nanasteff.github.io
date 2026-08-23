window.addEventListener('load', () => {
  const hash = location.hash;
  const element = document.querySelectorAll("a[href*='" + hash + "']" );
  if (element.length > 0) {
    showContent(hash.replace('#', ''));
  }
});

function showContent(name) {
    const page = document.getElementsByClassName('content');
    const bg = document.getElementById('status-bg')
    for (let i = 0; i < page.length; i++) {
        if (page[i].id == name) {
            if (page[i].classList.contains('d-none')) {
                page[i].classList.remove('d-none')
                if (name == "status") {
                    if (bg.classList.contains("d-none")) {
                        bg.classList.remove("d-none")
                    }
                }
                else {
                    if (!bg.classList.contains("d-none")) {
                        bg.classList.add("d-none")
                    }
                }
            }
        }
        else {
            if (!page[i].classList.contains('d-none')) {
                page[i].classList.add('d-none')
            }
        }
    }
}
