export declare global {
    type TProduct = {
        id: string;
        product_name:string,
        product_image: string,
        sumary_description: string,
        star_rating: 3.2,
        price: string
    }
    type User = {
        id:string;
        role: string;
        username: string;
        password: string;
    }

    type UserList = Array<User>;
    type CartItems = {
        id: string;
        product_id: string;
        user_id: string;
        quantity: number;
    }

    type CartProduct = {
        id: string;
        product_id: string;
        user_id: string;
        quantity: number;
        product_name:string,
        product_image: string,
        sumary_description: string,
        price: string
    }
}