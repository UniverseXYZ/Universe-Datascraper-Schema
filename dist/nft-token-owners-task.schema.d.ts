/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
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
declare const NFTTokenOwnersTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, {}, {}, any>;
export { NFTTokenOwnersTaskDocument, NFTTokenOwnersTaskSchema, };
