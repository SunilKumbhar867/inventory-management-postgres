const db = require("../models");
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial models eg: Users
exports.create = async (models, payloads) => {
  try {
    const data = await models.create(payloads);
    return data;
  } catch (err) {
    return err;
  }

  //   models
  //     .create(payloads)
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while creating the Tutorial.",
  //       });
  //     });
};

exports.findById = async (models, params = undefined, attributes = []) => {
  if (params!== undefined) {
    const data = await models.findOne({
      where: params
    });
    return data;
  } else {
    const data = await models.findOne({
      where: params,
      //attributes: ['foo', 'bar'],
      attributes: attributes,
    });
    return data;
  }
};

exports.findAll = async (models,params) => {
  const data = await models.findAll({
    where: {
      id: params,
    },
    //attributes: ['foo', 'bar'],
    attributes: attributes,
  });
  return data;
};

// exports.findAll = async (models) => {
//   const data = await models.findAll({
//     where: {
//       id: id,
//     },
//     //attributes: ['foo', 'bar'],
//     attributes: attributes,
//   });
//   return data;
// };

exports.deleteById = async (models, id) => {
  const data = models.destroy({
    where: {
      // authorId: {
      //   [Op.or]: [12, 13],
      // },
      id: id,
    },
  });
  return data;
};

exports.delete = async (models) => {
  const data = models.destroy();
  return data;
};

exports.update = async (models, payload) => {
  const data = models.update(
    { payload: payload },
    {
      where: {
        lastName: null,
      },
    }
  );
  return data;
};
