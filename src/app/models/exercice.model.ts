export interface Exercice {
  id: number;
  denomination: string;
  year: number;
  started_on: string;
  ended_on: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}

export interface ListExerciceResponse {
  data: Exercice[];
}

export interface ExerciceResponse {
  data: Exercice;
}
