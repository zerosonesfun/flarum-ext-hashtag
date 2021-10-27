import app from 'flarum/forum/app';

export default function () {
  const regex = /(^|\s)#(\p{L}*\p{S}*\p{M}*)/gu;
  const p = this.$('p');
  const discussionsUrl = app.route('index');
  const tooltip = app.translator.trans('justoverclock-hashtag.forum.post.hashtag_link_tooltip');

  p.each((index, element) => {
    $(element).html(
      $(element)
        .html()
        .replace(regex, (match) => ` <a href="${discussionsUrl}?q=${match.replace(/#/g,'').trim()}" class="hasht" title="${tooltip}">${match.trim()}</a>`)
    );
    setTimeout(() => {
      $(element)
        .find('a.hasht')
        .click((e) => {
          if (e.ctrlKey || e.metaKey || e.which === 2) return;
          e.preventDefault();
          m.route.set(e.target.href);
        });
    }, 1);
  });
}
