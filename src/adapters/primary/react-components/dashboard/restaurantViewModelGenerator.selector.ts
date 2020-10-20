import {AppState} from "../../../../redux/appState.interface";

export const getRestaurantInfo = (state: AppState) => {
    const restaurant = state.restaurant;
    console.log(restaurant);
    return {
        restaurant: {
            name: insertSpaceBeforeEachUppercase(restaurant!.name),
            pictureUrl: 'http://wealsushi.jpg',
            address: '4 rue du Nem 75001 Paris',
            schedule: {
                start: '12:00',
                end: '14:00'
            }
        },
        articles: {
            id: '123abc',
            name: 'RIZ TARTARE',
            pictureUrl: 'http://riztartare.jpg'
        }
    };
}

const insertSpaceBeforeEachUppercase = (str: string) =>
    str.replace(/([A-Z])/g, ' $1').trim();

