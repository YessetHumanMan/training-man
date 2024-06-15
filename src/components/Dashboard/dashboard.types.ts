import { EnumStatus } from "../../types/dataClient"


export interface ICard {
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