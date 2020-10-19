export interface Wallet {
    dime: number;
    nickels: number;
    pennies: number;
}

export const changeCoins = (amount: number): Wallet[] => {
    const changes: Wallet[] = [];
    const DIME = 10;
    const NICKEL = 5;
    const dimes = Math.round(amount / DIME);
    for (let h = 0; h <= dimes; h++) {
        const currentDimes = dimes - h;
        const remainingPennies = amount - DIME * currentDimes;
        const remainingNickels = Math.round(remainingPennies / NICKEL);
        for (let i = 0; i <= remainingNickels; i++) {
            const currentNickels = remainingNickels - i;
            changes.push({
                dime: currentDimes,
                nickels: currentNickels,
                pennies: remainingPennies - NICKEL * currentNickels
            });
        }
    }
    return changes;
}
