import { WaitListStatusTypes } from "@/types/tableTypes";

export const getWaitListEnum = (value: string): WaitListStatusTypes => {
  switch (value) {
    case "Lead":
      return WaitListStatusTypes.LEAD;
    case "Active":
      return WaitListStatusTypes.ACTIVE;
    case "Inactive":
      return WaitListStatusTypes.INACTIVE;
    default:
      return WaitListStatusTypes.LEAD;
  }
};
