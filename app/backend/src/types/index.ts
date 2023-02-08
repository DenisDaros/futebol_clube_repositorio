export interface Ilogin {
  email: string,
  password: string,
}

export interface Itoken {
  token:string,
  type:string,
}

export interface Ivalid {
  email: string
}

export interface Irole {
  role:string
}

export interface Icreatem {
  homeTeamId: string,
  awayTeamId: string,
  homeTeamGoals: string,
  awayTeamGoals: string,
}

export interface Imatch {
  id?:number,
  homeTeamId: number,
  homeTeamGoals:number,
  awayTeamId:number,
  awayTeamGoals:number,
  inProgress: boolean,
}

export interface Ifind {
  findAllTeams(): Promise<object>
}
