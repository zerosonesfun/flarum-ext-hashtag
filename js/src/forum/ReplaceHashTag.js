import app from 'flarum/forum/app';

export default function () {
  const regex = /(?<=\s|^)#(\w*[A-Za-z_]+\w*)/g;
  const p = this.$('p');
  const discussionsUrl = app.route('index');
  const tooltip = app.translator.trans('justoverclock-hashtag.forum.post.hashtag_link_tooltip');

  // rimuoviamo il carattere # utilizzando match.slice nel link
  // thanks to Nearata for this fix
  p.each((index, element) => {
    $(element).html(
      $(element)
        .html()
        .replace(regex, (match) => `<a href="${discussionsUrl}/?q=${match.slice(1)}" class="hasht" title="${tooltip}">${match}</a>`)
    );
  });
}
