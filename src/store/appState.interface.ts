export interface AppState {
    cart: string[];
    restaurant: { id: string, articles: { id: string }[]} | null
}
