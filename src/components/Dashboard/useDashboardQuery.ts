import { useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_DEALS } from "../../appwrite.const";
import { DB } from "../../utils/appwrite";
import { DASHBOARD_DATA } from "./dashboard.data";
import { IColumn } from "./dashboard.types";
import { IDeal } from "../../types/dataClient";



export function useDashboardQuery()  {
 return useQuery({
   queryKey: ['dashboard'],
   queryFn: () => 
     DB.listDocuments(DB_ID, COLLECTION_DEALS),
     select(data) {
      const NewBoard: IColumn[] = DASHBOARD_DATA.map(column => ({
        ...column,
        items:[]
      }))
      const deals = data.documents as unknown as IDeal[]

      for(const deal of deals) {
        const column = NewBoard.find(column => column.id === deal.status)
        if(column) {
          column.items.push({
            $createdAt: deal.$createdAt,
            id: deal.$id,
            name: deal.name,
            status: deal.status,
            trainingMethod: deal.dataClient.trainingGoal,
          })
        }
      }
     }
   
 })
} 