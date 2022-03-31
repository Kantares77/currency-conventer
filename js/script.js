{
    const calculateResult = (enteredAmount, currency) => {
        const valueEUR = 4.83;
        const valueGBP = 5.84;
        const valueUSD = 4.39;
        const valueCHF = 4.77;

        switch (currency) {
            case "EUR":
                return enteredAmount / valueEUR;

            case "GBP":
                return enteredAmount / valueGBP;

            case "USD":
                return enteredAmount / valueUSD;

            case "CHF":
                return enteredAmount / valueCHF;
        }
    };

    const updateResultText = (enteredAmount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `Aktualnie za: ${enteredAmount} PLN możesz nabyć: <strong>${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (even) => {
        even.preventDefault();

        const enteredAmountElement = document.querySelector(".js-enteredAmount");
        const currencyElement = document.querySelector(".js-currency");

        const enteredAmount = enteredAmountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(enteredAmount, currency);

        updateResultText(enteredAmount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}