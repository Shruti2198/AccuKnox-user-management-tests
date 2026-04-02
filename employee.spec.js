const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const EmployeePage = require('../pages/EmployeePage');
const data = require('../utils/testData');

test('Search Employee', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const employee = new EmployeePage(page);

    await login.navigate();
    await login.login(data.username, data.password);

    await dashboard.goToPIM();
    await employee.searchEmployee(data.employeeName);
});

test('Update Employee', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const employee = new EmployeePage(page);

    await login.navigate();
    await login.login(data.username, data.password);

    await dashboard.goToPIM();
    await employee.searchEmployee(data.employeeName);
    await employee.updateEmployee(data.updatedName);
});

test('Delete Employee', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const employee = new EmployeePage(page);

    await login.navigate();
    await login.login(data.username, data.password);

    await dashboard.goToPIM();
    await employee.searchEmployee(data.updatedName);
    await employee.deleteEmployee();
});