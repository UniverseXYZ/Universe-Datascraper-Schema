import { Document } from 'mongoose';
export declare class NFTCollectionAttributes {
    contractAddress: string;
    attributes: any;
}
export declare type NFTCollectionAttributesDocument = NFTCollectionAttributes & Document;
export declare const NFTCollectionAttributesrSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
