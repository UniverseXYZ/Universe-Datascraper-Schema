import { Document } from 'mongoose';
export declare class NFTTokenOwner {
    contractAddress: string;
    tokenId: string;
    address: string;
    blockNum: number;
    logIndex: number;
    transactionHash: string;
    value: string;
    tokenType: string;
    tokenName: string;
}
declare type NFTTokenOwnerDocument = NFTTokenOwner & Document;
declare const NFTTokenOwnerSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
export { NFTTokenOwnerDocument, NFTTokenOwnerSchema, };
