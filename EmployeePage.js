class EmployeePage {
    constructor(page) {
        this.page = page;

        // Search
        this.searchBox = page.locator('(//input[@placeholder="Type for hints..."])[1]');
        this.searchBtn = page.locator('//button[text()=" Search "]');

        // Table
        this.table = page.locator('.oxd-table-body');

        // Update
        this.editBtn = page.locator('(//button[@type="button"])[1]');
        this.firstName = page.locator('input[name="firstName"]');
        this.saveBtn = page.locator('//button[@type="submit"]');

        // Delete
        this.deleteBtn = page.locator('(//button[@type="button"])[2]');
        this.confirmDelete = page.locator('//button[text()=" Yes, Delete "]');
    }

    async searchEmployee(name) {
        await this.searchBox.fill(name);
        await this.searchBtn.click();
        await this.table.waitFor();
    }

    async updateEmployee(newName) {
        await this.editBtn.click();
        await this.firstName.fill(newName);
        await this.saveBtn.click();
    }

    async deleteEmployee() {
        await this.deleteBtn.click();
        await this.confirmDelete.click();
    }
}

module.exports = EmployeePage;