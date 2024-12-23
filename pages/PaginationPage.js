
const locators = Object.freeze({
headfing: '..is-size-3',
subHeading: '#sub_heading',
paragraph: '#content',
previousBtn: '#previous',
nextBtn: '#next',
infos: '.city_info, .country_info, .population_info',
image: '.city_image'

})

class PaginationPage {
    locators = locators

/**
 * @param {string} button text of the button that needs to be clicked
 * clicks on button with provided text
 */

async clickButton(button) {
   await this.getButtonLocator(button).click() 
}

 async clickButtonTillDisabled(button) {
   let isEnabled = await this.getButtonLocator(button).isEnabled()

   while(isEnabled) {
   await this.clickButton(button)

   isEnabled = await this.getButtonLocator(button).isEnabled()
   }
 }

 getButtonLocator(button) {
    const buttonLocators = {
      Previous: locators.previousBtn,
      Next: locators.nextBtn
    }
    if (!(button in buttonLocators)) {
       throw new Error(`Button "${button}" is not recognized.`)
    
    }
    return page.locator(buttonLocators[button])
 
  }

};




module.exports = PaginationPage;

