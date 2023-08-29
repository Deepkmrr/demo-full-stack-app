const employeeController = require("../Controller/loginEmoloyeeController");
const router = require("express").Router();

router.post("/addEmployee", employeeController.addEmployee);
router.get(
  "/viewEmployee/:email/:password",
  employeeController.getOneEmployeelogin
);
router.post("/checkemployeelogin", employeeController.checkEmployeeLogin);

module.exports = router;
