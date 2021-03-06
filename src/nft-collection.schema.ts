import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { SupportedTokenTypes } from "./types";

@Schema({ timestamps: true, collection: "nft-collections" })
export class NFTCollection {
  @Prop({ required: true, trim: true, unique: true })
  public contractAddress: string;

  @Prop({ required: true, trim: true, enum: SupportedTokenTypes })
  public tokenType: string;

  @Prop()
  public createdAtBlock: number;

  @Prop()
  public ignoreForRetrieveCreatedAtBlock: boolean;

  @Prop()
  public firstProcessedBlock: number;

  @Prop()
  public lastProcessedBlock: number;

  @Prop()
  public targetBlock: number;

  @Prop()
  public sentAt: Date;

  @Prop()
  public isProcessing: boolean;

  @Prop()
  public name: string;

  @Prop()
  public symbol: string;

  @Prop()
  public owner: string;

  @Prop()
  public vip: boolean;
}

type NFTCollectionDocument = NFTCollection & Document;

const NFTCollectionSchema = SchemaFactory.createForClass(NFTCollection);

NFTCollectionSchema.index({ contractAddress: 1 });
// NFTCollectionSchema.index({ tokenType: 1 });

export {
  NFTCollectionDocument,
  NFTCollectionSchema,
}
