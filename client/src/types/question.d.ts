

export interface Question<O, A, U extends string> {
    type: U;
    question: string;
    options: O;
    answer: A;
    image?: string;
}

export type MultipleChoice = Question<string[], number[], 'multiple-choice'>;

export type Associate = Question< { names: string[], list: string[] }, { [key: string ]: string }, 'associate'>;

export type Order = Question<string[], string[], 'order'>;
