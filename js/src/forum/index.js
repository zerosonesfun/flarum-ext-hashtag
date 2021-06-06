import app from 'flarum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/components/CommentPost';
import ReplaceHashTag from './ReplaceHashTag';

app.initializers.add('justoverclock/flarum-ext-hashtag', () => {
  extend(CommentPost.prototype, ['oncreate', 'onupdate'], ReplaceHashTag);
});
