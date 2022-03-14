import { Document } from 'mongoose';
export declare class AlternativeMediaFile {
    url: string;
    type: string;
}
export declare class NFTToken {
    contractAddress: string;
    tokenId: string;
    tokenType: string;
    externalDomainViewUrl: string;
    metadata: any;
    firstOwner: string;
    metadataFetchError: string;
    processingSentAt: Date;
    sentAt: Date;
    sentForMediaAt: Date;
    alternativeMediaFiles: AlternativeMediaFile[];
    needToRefresh: boolean;
    source: string;
}
export declare type NFTTokensDocument = NFTToken & Document;
export declare const NFTTokensSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
