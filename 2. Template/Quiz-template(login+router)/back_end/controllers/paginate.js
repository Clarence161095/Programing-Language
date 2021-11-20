import { PaginateModel } from '../models/PaginateModel.js';

export const getPagination = async (req, res) => {
  try {
    const { page, limit, order, field, keySearch } = req.body;

    // Validate data
    const options = {
      page: page || 1,
      limit: limit || 10,
    };

    let myAggregate;

    // Sort
    if (order && field) {
      const operatorSort = {};
      operatorSort[field] = order === 'ascend' ? 'asc' : 'desc';
      if (keySearch) {
        const searchRgx = new RegExp(`.*${keySearch}.*`);
        myAggregate = PaginateModel.aggregate([
          {
            $match: {
              $or: [
                { name: { $regex: searchRgx, $options: 'i' } },
                { email: { $regex: searchRgx, $options: 'i' } },
              ],
            },
          },
        ]).sort(operatorSort);
      } else {
        myAggregate = PaginateModel.aggregate().sort(operatorSort);
      }
    } else {
      if (keySearch) {
        const searchRgx = new RegExp(`.*${keySearch}.*`);
        myAggregate = PaginateModel.aggregate([
          {
            $match: {
              $or: [
                { name: { $regex: searchRgx, $options: 'i' } },
                { email: { $regex: searchRgx, $options: 'i' } },
              ],
            },
          },
        ]);
      } else {
        myAggregate = PaginateModel.aggregate();
      }
    }

    PaginateModel.aggregatePaginate(myAggregate, options)
      .then(function (results) {
        res.status(200).json(results);
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    console.log(
      '🚀 ~ file: paginate.js ~ line 53 ~ getPagination ~ error',
      error,
    );
    res.status(500).json({ error: err });
  }
};
