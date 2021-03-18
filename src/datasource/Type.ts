export interface School {
  name: string;
  size: number;
}

export interface Student {
  name?: string;
  age?: number;
  school?: School;
}
