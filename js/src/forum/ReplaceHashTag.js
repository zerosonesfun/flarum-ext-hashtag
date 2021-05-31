import app from 'flarum/app';

export default function () {

  const regex = /((?!([\S]))[\S\s])#(\p{L}+)/gu;
  const p = this.$('.Post-body');
  const baseurl = app.forum.attribute('baseUrl');

  p.html = p.html(p.html().replace(regex, match => `<a href="${baseurl}/?q=$3" class="hashlink" title="Find more post with this hashtag">${match}</a>`))

}
