import { Document } from "mongoose";
export declare class NFTCollection {
    contractAddress: string;
    tokenType: string;
    createdAtBlock: number;
    ignoreForRetrieveCreatedAtBlock: boolean;
    firstProcessedBlock: number;
    lastProcessedBlock: number;
    targetBlock: number;
    sentAt: Date;
    isProcessing: boolean;
    name: string;
    symbol: string;
    owner: string;
    vip: boolean;
    source: string;
    attributesUpdated: boolean;
    lastRefresh: Date;
}
declare type NFTCollectionDocument = NFTCollection & Document;
declare const NFTCollectionSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
export { NFTCollectionDocument, NFTCollectionSchema };
