type Category = {
    id: number;
    name: string;
    calculators: Calculator[];
};

type Calculator = {
    id: number;
    name: string;
    shortName: string;
    description: string;
    url: string;
};
