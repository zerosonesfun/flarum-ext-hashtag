import app from 'flarum/app';

export default function () {

  const regex = /#(\w*[0-9a-zA-Z]+\w*[0-9a-zA-Z])/g;
  const p = this.$('p');
  const baseurl = app.forum.attribute('baseUrl');

  // rimuoviamo il carattere # utilizzando match.slice nel link
  // thanks to Nearata for this fix
  p.each((index, element) => {
    $(element).html(
      $(element).html().replace(regex, (match) => `<a href="${baseurl}/?q=${match.slice(1)}" class="hasht" title="Search this hashtag into Flarum">${match}</a>`)
    );
  });
}
