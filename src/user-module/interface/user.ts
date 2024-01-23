import { UUID } from 'crypto';
import { Post } from './post';

export interface User {
  id: UUID;
  name: string;
  email: string;
  post: Post[];
  comment: Comment[];
  createdAt: Date;
}
