import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';
export declare class NFTTokenOwnersTask {
    contractAddress: string;
    tokenId: string;
    priority: number;
    isProcessing: boolean;
    taskId: string;
    tokenType: SupportedTokenTypes;
    sentAt: Date;
    errorMessage: string;
}
declare type NFTTokenOwnersTaskDocument = NFTTokenOwnersTask & Document;
declare const NFTTokenOwnersTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
export { NFTTokenOwnersTaskDocument, NFTTokenOwnersTaskSchema, };
