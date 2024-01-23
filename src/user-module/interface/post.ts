import { UUID } from 'crypto';

export interface Post {
  id: UUID;
  title: string;
  description: string;
  user_id: UUID;
  comment_ids: UUID[];
  created_at: Date;
}
