import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OwnerDocument = Owner & Document;

@Schema()
export class Owner {

    @Prop()
    id: string
    @Prop({ required: true })
    firstName: string
    @Prop({ required: true })
    lastName: string
    @Prop()
    email: string
    @Prop()
    mobile: number
    @Prop()
    refrenceNo: number
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);