const store = [
    { basePrice: 0, taxRate: 0, tipPercent: 0 }
];

function generatePage(store) {
    return `
    <div class="container">
        <div class="meal-details">
            <div class="meal-title">Enter the Meal Details</div>
            <form class="meal-form">
                <div class="meal-entry-container">
                    <div class="meal-text-container">
                        <div class="inner-text1">Base Meal Price:</div>
                        <div class="inner-text1"> Tax Rate:</div>
                        <div class="inner-text1"> Tip Percentage:</div>
                    </div>
                    <div class="meal-input-container">
                        <div class="inner-text">&nbsp;$&nbsp; 
                            <input type="text" name="base-price" class="js-input">
                        </div>
                        <div class="inner-text">&nbsp;% 
                            <input type="text" name="base-price" class="js-input">
                        </div>
                        <div class="inner-text">&nbsp;% 
                            <input type="text" name="base-price" class="js-input">
                        </div>
                    </div>
                </div>
                <div class="meal-button-container">
                    <button type="submit" class="meal-button">Submit</button>
                    <button type="submit" class="meal-button">Cancel</button>
                </div>
            </form>
        </div>
        <div class="inner-container">
            <div class="customer-charges">
                <div class="charges-title">Customer Charges</div>
                    <div class="charges-container">
                        <div class="charges-left-container">
                            <div class="charges-inner-text">Subtotal</div>
                            <div class="charges-inner-text">Tip</div>
                            <div class="line left"></div>
                            <div class="charges-inner-text">Total:</div>
                        </div>
                        <div class="charges-right-container">
                            <div class="charges-inner-text">&nbsp; 0.00</div>
                            <div class="charges-inner-text">&nbsp; 0.00</div>  
                            <div class="line"></div>
                            <div class="charges-inner-text">&nbsp; 0.00</div>
                        </div>
                    </div>
            </div>
            <div class="earnings-info">
                <div class="earnings-title">My Earnings Info</div>
                    <div class="charges-container">
                        <div class="charges-left-container">
                            <div class="charges-inner-text">Tip Total:</div>
                            <div class="charges-inner-text">Meal Count:</div>
                            <div class="charges-inner-text">Average Tip Per Meal:</div>
                        </div>
                        <div class="charges-right-container">
                            <div class="charges-inner-text">&nbsp; 0.00 </div>
                            <div class="charges-inner-text">&nbsp; 0</div>
                            <div class="charges-inner-text">&nbsp; 0.00</div>
                        </div>
                    </div>
            </div>
        </div>

    </div>
    <div class="reset-container">
        <button class="reset-button">Reset</button>
    </div>`;
}

function renderPage() {
    console.log(`Rendering page`);

    const pageString = generatePage(store);

    $('main').html(pageString);
}

function handleCalc() {
    renderPage();
}

$(handleCalc);