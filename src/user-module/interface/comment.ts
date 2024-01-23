import { UUID } from 'crypto';

export interface Comment {
  id: UUID;
  comment: string;
  post_id: UUID;
  user_id: UUID;
  created_at: Date;
}
