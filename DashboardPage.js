class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pimMenu = page.locator('//span[text()="PIM"]');
        this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
    }

    async verifyLogin() {
        await this.dashboardHeader.waitFor({ state: 'visible' });
    }

    async goToPIM() {
        await this.pimMenu.click();
    }
}

module.exports = DashboardPage;