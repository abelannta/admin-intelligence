export interface BankSoalDetail {
  endsAt: Date;
  startsAt: Date;
  bs_slug: string;
  bs_summary: string;
  bs_title: string;
}

export interface PostContentBankSoalDetail {
  type: number;
  mapel: number;
  content: string;
  answers: string[];
  correctAns: string;
}
