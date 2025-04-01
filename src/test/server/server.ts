import {setupServer} from 'msw/node';

import {postCommentHandlers} from './PostComment/postCommentHandler';

export const server = setupServer(...postCommentHandlers);
