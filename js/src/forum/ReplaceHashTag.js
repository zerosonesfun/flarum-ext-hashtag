import app from 'flarum/app';

export default function () {
  const regex = /<\/?\w+((\s+\w+(\s*=\s*(?:\".*?"|'.*?'|[^'\">\s]+))?)+\s*|\s*)\/?>#[^\s!@#$%^&*()=+.\/,\[{\]};:'"?><]+/g;

  const p = this.$('.Post-body');
  const baseurl = app.forum.attribute('baseUrl');

  //rimuoviamo il carattere # utilizzando match.slice nel link
  p.html = p.html(
    p.html().replace(regex, (match) => `<a href="${baseurl}/?q=${match.slice(4)}" class="hasht" title="Search this hashtag into Flarum">${match}</a>`)
  );
}
