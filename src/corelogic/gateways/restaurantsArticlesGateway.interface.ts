export interface RestaurantGateway {
    retrieve(): Promise<{ id: string; articles: { id: string }[] } | null>
}
