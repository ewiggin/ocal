import { Timestamp } from "./timestamp.d.ts";

export interface Store {
  company: string;
  description?: string | null | undefined;
  rate: number;
  currency: string;
  timestamps: Timestamp[];
}
