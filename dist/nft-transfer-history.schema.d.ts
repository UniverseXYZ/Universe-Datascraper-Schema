import { Document } from 'mongoose';
export declare class NFTTransferHistory {
    contractAddress: string;
    blockNum: number;
    hash: string;
    logIndex: number;
    from: string;
    to: string;
    tokenId: string;
    value: string;
    erc721TokenId: string;
    erc1155Metadata: any;
    cryptopunks: any;
    category: string;
    timeLastUpdated: string;
}
declare type NFTTransferHistoryDocument = NFTTransferHistory & Document;
declare const NFTTransferHistorySchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
export { NFTTransferHistoryDocument, NFTTransferHistorySchema, };
