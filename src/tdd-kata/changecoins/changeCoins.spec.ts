import {changeCoins, Wallet} from "./changeCoins";

/* There are four types of common coins in US currency:
        dimes (10 cents)
        nickels (5 cents)
        pennies (1 cent)
    There are 6 ways to make change for 15 cents:
        A dime and a nickel;
        A dime and 5 pennies;
        3 nickels;
        2 nickels and 5 pennies;
        A nickel and 10 pennies;
        15 pennies.

    How many ways are there to make change for a dollar using these common coins? (1 dollar = 100 cents).

 */

describe('Change coins possibilities determination', () => {

    it('should determine all possibilities of changing a coin', () => {
        expectCoins(0, buildWallet(0, 0, 0));
        expectCoins(1, buildWallet(0, 0, 1));
        expectCoins(5, buildWallet(0, 1, 0),
            buildWallet(0, 0, 5));
        expectCoins(10,
            buildWallet(1, 0, 0),
            buildWallet(0, 2, 0),
            buildWallet(0, 1, 5),
            buildWallet(0, 0, 10));
        expectCoins(15,
            buildWallet(1, 1, 0),
            buildWallet(1, 0, 5),
            buildWallet(0, 3, 0),
            buildWallet(0, 2, 5),
            buildWallet(0, 1, 10),
            buildWallet(0, 0, 15));
    });

    const expectCoins = (amount: number, ...coins: Wallet[]) => {
        expect(changeCoins(amount)).toEqual(coins);
    };

    const buildWallet = (dime: number, nickels: number, pennies: number) =>
        ({dime, nickels, pennies});
});

