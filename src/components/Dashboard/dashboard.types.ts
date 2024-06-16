import { EnumStatus } from "../../types/dataClient"


export interface ICard {
  $id: string
  name: string
  trainingMethod: string
  $createdAt: string
  status: string
}

export interface IColumn {
  id: EnumStatus
  name: string
  items: ICard[]
}