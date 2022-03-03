import app from 'flarum/forum/app';

export default function () {
  const regex = /(^|\s)#(\p{L}*\p{S}*\p{M}*)/gu;
  const p = this.$('p');
  const discussionsUrl = app.route('index');

  p.each((index, element) => {
    $(element).html(
      $(element)
        .html()
        .replace(regex, (match) => ` <a href="${discussionsUrl}?q=${match.replace(/#/g,'').trim()}" class="hashtag">${match.trim()}</a>`)
    );
  });
}