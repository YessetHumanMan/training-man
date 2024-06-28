export interface IBaseField {
 $createdAt: string
 $id: string
}

export interface IDataClient extends IBaseField {
 age: number
 height: number
 weight: number
 email: string
}

export enum EnumStatus {
  'to-do' = 'to-do',
  'in-progress' = 'in-progress',
  'done' = 'done'
}

export interface IDeal extends IBaseField {
name: string
dataClient: IDataClient
status: EnumStatus
trainingGoal: string
price: number
}