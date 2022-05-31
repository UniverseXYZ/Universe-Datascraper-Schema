import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'tokens-prices' })
export class TokensPrices {
  @Prop({ required: true })
  public name: string;

  @Prop({ required: true })
  public price: number;
}

export type TokensPricesDocument = TokensPrices & Document;

export const TokensPricesSchema =
  SchemaFactory.createForClass(TokensPrices);
