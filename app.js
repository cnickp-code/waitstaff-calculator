let store = [
    { basePrice: 0, taxRate: 0, tipPercent: 0 }
];

function generatePage(store) {
    let subTotal = calcSubtotal(store);
    let newTip = calcTip(store);
    let customerTotal = Number.parseFloat(Number(subTotal) + Number(newTip)).toFixed(2);
    let finalTipTotal = Number.parseFloat(Number(calcTipTotal(store))).toFixed(2);
    let mealCount = Number(store.length - 1);
    let avgTip = Number.parseFloat(0).toFixed(2);

    if(mealCount !== 0) {
        avgTip = Number(finalTipTotal / mealCount);
    }

    return `
    <div class="container">
        <div class="meal-details">
            <div class="meal-title">Enter the Meal Details</div>
            <form id="meal-form">
                <div class="meal-entry-container">
                    <div class="meal-text-container">
                        <div class="inner-text1">Base Meal Price:</div>
                        <div class="inner-text1"> Tax Rate:</div>
                        <div class="inner-text1"> Tip Percentage:</div>
                    </div>
                    <div class="meal-input-container">
                        <div class="inner-text">&nbsp;$&nbsp; 
                            <input type="text" name="base-price" class="js-input js-base-price">
                        </div>
                        <div class="inner-text">&nbsp;% 
                            <input type="text" name="tax-rate" class="js-input js-tax-rate">
                        </div>
                        <div class="inner-text">&nbsp;% 
                            <input type="text" name="tip-percentage" class="js-input js-tip-percentage">
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
                            <div class="charges-inner-text">Subtotal:</div>
                            <div class="charges-inner-text">Tip</div>
                            <div class="line left"></div>
                            <div class="charges-inner-text">Total:</div>
                        </div>
                        <div class="charges-right-container">
                            <div class="charges-inner-text meal-subtotal">&nbsp; ${subTotal}</div>
                            <div class="charges-inner-text meal-tip">&nbsp; ${newTip}</div>  
                            <div class="line"></div>
                            <div class="charges-inner-text meal-total">&nbsp; ${customerTotal}</div>
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
                            <div class="charges-inner-text meal-tip-total">&nbsp; ${finalTipTotal} </div>
                            <div class="charges-inner-text meal-count">&nbsp; ${mealCount}</div>
                            <div class="charges-inner-text meal-average">&nbsp; ${avgTip}</div>
                        </div>
                    </div>
            </div>
        </div>

    </div>
    <div class="reset-container">
        <button class="reset-button">Reset</button>
    </div>`;
}

// Math functions

// Calculate subtotal (base meals + (base meals*tax rate))
function calcSubtotal(meals) {
    console.log(`ran calcSubTotal`);
    let base = Number(meals[meals.length-1].basePrice);
    let tax = Number(meals[meals.length-1].taxRate) / 100;
    let subTotal = base + (base*tax);

    return Number.parseFloat(subTotal).toFixed(2);
}

// Calculate tip for current meal
function calcTip(meals) {
    console.log(`ran calcTips`);
    let base = Number(meals[meals.length-1].basePrice);
    let tipPercent = Number(meals[meals.length-1].tipPercent) / 100;
    let tip = base * tipPercent;

    return Number.parseFloat(tip).toFixed(2);
}

// Calculate tip total (add all tips)
function calcTipTotal(meals) {
    console.log(`ran calcTipTotal`);
    let tipTotal = 0;

    meals.forEach(item => {
        let tip = Number(item.basePrice) * Number(item.tipPercent) / 100;
        tipTotal += tip;
    });

    return Number.parseFloat(tipTotal).toFixed(2);
}

// Reset page
function handleReset() {
    $('main').on('click', '.reset-button', event => {
        store = [
            { basePrice: 0, taxRate: 0, tipPercent: 0 }
        ];
        renderPage();
    });


}

// Render page
function renderPage() {
    console.log(`Rendering page`);

    const pageString = generatePage(store);

    $('main').html(pageString);
}

// Validate input
function isNumber(num) {
    return /^\d+$/.test(num);
}

// Add item to store
function addItemToStore(base, rate, percent) {
    store.push({ basePrice: base, taxRate: rate, tipPercent: percent});
}

// Handle click submit
function handleSubmitClicked() {
    $('main').on('submit', '#meal-form', event => {
        event.preventDefault();
        console.log(`Submit button clicked. handleSubmitClicked ran`);
        const basePrice = $('.js-base-price').val();
        const taxRate = $('.js-tax-rate').val();
        const tipPercentage = $('.js-tip-percentage').val();
        console.log(basePrice);
        console.log(taxRate);
        console.log(tipPercentage);
        
        if(isNumber(basePrice) && isNumber(taxRate) && isNumber(tipPercentage)) {
            console.log(`conditions are met`);
            addItemToStore(basePrice, taxRate, tipPercentage);
        } else {
            alert('Must enter a valid number.');
        }
        
        console.log(store);
        renderPage();
    });
}

function handleCalc() {
    renderPage();
    handleSubmitClicked();
    handleReset();
}

$(handleCalc);