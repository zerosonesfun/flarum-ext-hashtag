import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import ReplaceHashTag from './ReplaceHashTag';

app.initializers.add('zerosonesfun/flarum-ext-hashtag', () => {
  extend(CommentPost.prototype, ['oncreate', 'onupdate'], ReplaceHashTag);
});