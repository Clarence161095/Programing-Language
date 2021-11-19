import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const schema = new mongoose.Schema({
  id: Number,
  postId: Number,
  name: String,
  email: String,
  body: String,
})

schema.plugin(aggregatePaginate);

export const PaginateModel = mongoose.model('Paginate_Test', schema)