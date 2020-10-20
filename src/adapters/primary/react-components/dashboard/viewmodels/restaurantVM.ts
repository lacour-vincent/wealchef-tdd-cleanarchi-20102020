export interface RestaurantVM {
    name: string;
    pictureUrl: string;
    address: string;
    schedule: {
        start: string;
        end: string;
    }
}
