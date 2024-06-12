export enum WaitListStatusTypes {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  LEAD = "LEAD",
}

export interface TableDataTypes {
  id: number;
  created_On: string;
  payer: string;
  status: string;
  email: string;
  payer_phone: string;
  services: string;
  scheduled: string;
}
