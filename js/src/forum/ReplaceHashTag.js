import app from 'flarum/app';

export default function () {

  const regex = /(?<!https?:\/\/\S*)#[^\s!@#$%^&*()=+.\/,\[{\]};:'"?><]+/g;
  const p = this.$('.Post-body');
  const baseurl = app.forum.attribute('baseUrl');

  //rimuoviamo il carattere # utilizzando match.slice nel link
  p.html = p.html(
    p.html().replace(regex, (match) => `<a href="${baseurl}/?q=${match.slice(1)}" class="hasht" title="Search this hashtag into Flarum">${match}</a>`)
  );
}
