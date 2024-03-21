// Die types
export type DieType = 2 | 4 | 6 | 8 | 10 | 12 | 20 | 100;

export interface DieStateType {
    dieType: DieType,
    rolls?: number
};

export type DieHistoryType = {
    type: 'roll',
    dieType: DieType,
    value: number
} |
{
    type: 'modifier',
    value: number
};