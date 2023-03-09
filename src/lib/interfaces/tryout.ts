export interface TryoutDetail {
  endsAt: Date;
  startsAt: Date;
  to_slug: string;
  to_summary: string;
  to_title: string;
}

export interface PostContentTryoutDetail {
  type: number;
  mapel: number;
  content: string;
  answers: string[];
  correctAns: string;
}
