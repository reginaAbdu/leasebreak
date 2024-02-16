const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $("span[class = 'lead relative'] > span:nth-child(2)");
    }
    get featuredListings () {
        return $("span[class = 'lead relative'] > span:first-child");
    }
}

module.exports = new SecurePage();
