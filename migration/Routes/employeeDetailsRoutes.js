const employeeDetailsController = require("../Controller/EmployeeDetailsController.js");
const verifyToken = require("../middleware/verifyToken.js");
const router = require("express").Router();

router.post("/employeedetails", employeeDetailsController.addEmployeeDetails);

router.get(
  "/allemployee",
  verifyToken,
  employeeDetailsController.getAllEmployee
);

router.get("/:id", employeeDetailsController.getOneEmployee);

router.put("/:id", employeeDetailsController.updateEmployee);

router.delete("/:id", employeeDetailsController.deleteEmployee);

module.exports = router;
