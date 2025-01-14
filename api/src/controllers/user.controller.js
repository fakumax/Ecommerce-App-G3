const { User, Order } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require("passport");
// const Op = require("sequelize").Op;

const getAllUsers = async (req, res, next) => {
  try {
    const dbUsers = await User.findAll();
    res.status(200).json(dbUsers);
  } catch (error) {
    next(error);
  }
};


const addUser = async (req, res, next) => {
  const body = req.body;
  if (!(body.email && body.password)) {
    return res.status(400).json({ error: "Data not formatted properly" });
  }
  try {
    const find = await User.findOne({
      where: { email: body.email },
    });
    if (find) {
      return res.status(409).json({ error: "This User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    const newUser = await User.create(body);

    res.status(200).json({ message: "User added!" });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const update = await User.findByPk(id);
    if (update) {
      User.update(req.body, {
        where: { id },
      });
      res.status(200).json({ message: "User update" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const remove = await User.findByPk(id);
    if (remove) {
      User.destroy({
        where: { id },
      });
      res.status(200).json({ message: "User delete" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

const getOrdersByUser = async (req, res) => {
  // codigo:
  try {
    const { id } = req.params;
    const ordersByUser = await User.findByPk(id, {
      include: [
        {
          model: Order,
        }
      ]
    });
    res.status(200).json(ordersByUser);

  } catch (error) {
    console.log(error);
    res.status(404)
  }
}

const login = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err) return next(err);

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const payload = {
          id: user.id,
          exp: Math.floor(Date.now() / 1000) + (60 * 60), //1h
          email: user.email
        }

        const token = jwt.sign(payload, process.env.AUTH_JWT_SECRET);
        return res.json({ token });
      })
    } catch (err) {
      return next(err)
    }
  })(req, res, next)
}

const example = (req, res, next) => {
  res.json({
    message: 'You made it to the secure route',
    user: req.user,
    //token: req.query.token
  })
}

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getOrdersByUser,
  login,
  example,
};
