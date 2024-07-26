

interface Question<O, A, U extends string> {
    type: U;
    question: string;
    options: O;
    answer: A;
    image?: string;
}

type MultipleChoice = Question<string[], number[], 'multiple-choice'>;

type Associate = Question< { names: string[], list: string[] }, { [key: string ]: string }, 'associate'>;

type Order = Question<string[], string[], 'order'>;










const q1: Associate = {
    type: 'associate',
    question: 'Associate the names with the list',
    options: {
        names: ['John', 'Doe'],
        list: ['A', 'B']
    },
    answer: {
        John: 'A',
        Doe: 'B'
    }
}