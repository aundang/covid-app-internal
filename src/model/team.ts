// export interface TeamList extends Array<TeamMate> {}

export interface TeamList {
  employeeId: string;
  fullName: string;
  latestDate: string;
  MISDepartment: string;
  workLocation: string;
  personalStatus: string;
  travelStatus: string;
}

export interface CloseContactPersonal {
  employeeId: string,
  fullName: string,
  phoneNumber: string,
  email: string
}

export enum TeamActions {
  SET_TEAMLIST = 'SET_TEAMLIST'
}

interface TeamActionType<T, P> {
  type: T;
  payload: P;
}

export type TeamAction = 
  | TeamActionType<typeof TeamActions.SET_TEAMLIST, TeamList>;
