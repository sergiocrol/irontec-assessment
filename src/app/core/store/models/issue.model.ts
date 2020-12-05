export class Issue {
  id: string;
  number: number;
  url: string;
  comments_url: string;
  title: string;
  state: string;
  locked: boolean;
  comments: number;
  created_at: string;
  user: {
    login: string;
    avatar_url: string
  }
}