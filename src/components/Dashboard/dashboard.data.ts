import { EnumStatus } from "../../types/dataClient";
import { IColumn } from "./dashboard.types";

export const DASHBOARD_DATA: IColumn[] = [
  {
  id: EnumStatus["to-do"],
  name: "To do",
  items: []
},
{
  id: EnumStatus['in-progress'],
  name: "In progress",
  items: []
},
{
  id: EnumStatus.done,
  name: "Done",
  items: []
},

]
