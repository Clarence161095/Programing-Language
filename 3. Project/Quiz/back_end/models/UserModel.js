import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const schema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photoURL: String,
    role: {
      type: String,
      required: true,
      default: 'normal',
    },
    del_fg: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

schema.plugin(aggregatePaginate);

export const UserModel = mongoose.model('User', schema);
