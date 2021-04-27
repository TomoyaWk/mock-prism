
    const getRandomInt = (min:number, max:number): number => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }

export const ExpenseSeed = [
    {
        date: `${new Date(2021, 5, 1)}`,
        price: getRandomInt(100, 2500),
        title: "支出データテスト",
        memo: "testtest",
    },
    {
        date: `${new Date(2021, 5, 2)}`,
        price: getRandomInt(100, 2500),
        title: "支出データテスト",
        memo: "testtest",
        
    },
    {
        date: `${new Date(2021, 5, 3)}`,
        price: getRandomInt(100, 2500),
        title: "支出データテスト",
        memo: "testtest",
    },
    {
        date: `${new Date(2021, 5, 4)}`,
        price: getRandomInt(100, 2500),
        title: "支出データテスト",
        memo: "testtest",
    },
    {
        date: `${new Date(2021, 5, 5)}`,
        price: getRandomInt(100, 2500),
        title: "支出データテスト",
        memo: "testtest",
    },
    {
        date: `${new Date(2021, 5, 6)}`,
        price: getRandomInt(100, 2500),
        title: "支出データテスト",
        memo: "testtest",
    },
    {
        date: `${new Date(2021, 5, 7)}`,
        price: getRandomInt(100, 2500),
        title: "支出データテスト",
        memo: "testtest",
    },
    {
        date: `${new Date(2021, 5, 8)}`,
        price: getRandomInt(100, 2500),
        title: "支出データテスト",
        memo: "testtest",
    },
];
