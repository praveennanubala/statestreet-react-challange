export const getTransactionsData = async () => {
    const response = await fetch('./data/data.json');
    return response.json();
}
