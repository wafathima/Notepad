import mongoose, { Schema, model, models, Document, Types } from "mongoose";

export interface INote extends Document {
  title: string;
  content: string;
  images: string[]; 
  owner: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new Schema<INote>(
  {
    title: { type: String, required: true, trim: true, maxlength: 150 },
    content: { type: String, default: "", maxlength: 20000 },
    images: { type: [String], default: [] },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  },
  { timestamps: true }
);

const Note = models.Note || model<INote>("Note", NoteSchema);

export default Note as mongoose.Model<INote>;
