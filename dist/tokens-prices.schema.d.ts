import { Document } from 'mongoose';
export declare class TokensPrices {
    name: string;
    price: number;
}
export declare type TokensPricesDocument = TokensPrices & Document;
export declare const TokensPricesSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
