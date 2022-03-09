const title = document.querySelector('main h2');
const imageArticles = document.querySelectorAll('.image-article');
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    links.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');

    const tag = e.target.dataset.tag;
    title.innerHTML = tag;
    imageArticles.forEach(article => article.hidden = !article.dataset.tags.split(' ').includes(tag));
  });
});
