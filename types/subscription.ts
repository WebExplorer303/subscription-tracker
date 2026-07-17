export type Subscription = {
  id: string;
  userId: string;
  name: string;
  cost: number;
  cycle: "monthly" | "yearly" | string;
  nextRenewal: string | Date;
};