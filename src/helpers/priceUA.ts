// price transformer
    export const priceUA = (number: number) => {
        const numberUah = Math.floor(number / 5);
        return numberUah
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            .concat(" ₴");
    };
