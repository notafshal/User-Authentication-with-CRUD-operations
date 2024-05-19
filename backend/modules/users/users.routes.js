const userRouter = require("express").Router();
const register = require("./controllers/register");
const login = require("./controllers/login");
const userDashboard = require("./controllers/userDashboard");
const auth = require("../../middleware/auth");
const editUser = require("./controllers/editUser");
const deleteUser = require("./controllers/deleteUser");

//Routes
userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.use(auth);
//protected routes
userRouter.get("/profile", userDashboard);
userRouter.put("/profile/:id", editUser);
userRouter.delete("/profile/:id", deleteUser);

module.exports = userRouter;
