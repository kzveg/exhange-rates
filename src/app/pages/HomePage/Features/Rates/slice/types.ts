/* --- STATE --- */
export interface RatesState {
  success: boolean;
  timestamp: number | null;
  base: any;
  date: string | null;
  rates: Record<string, number> | null;
}

export type ContainerState = RatesState;
