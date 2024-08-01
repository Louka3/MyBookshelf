import { Document } from "mongoose";
export interface BookData extends Document {
  volumeId: string;
  rating?: number;
  comment?: string;
}
