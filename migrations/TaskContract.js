const TaskContract = artificts.require("TaskContract");

module.exports = function(deployer) {
    deployer.deploy(TaskContract);
}