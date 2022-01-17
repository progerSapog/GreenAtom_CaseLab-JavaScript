class Temperature {
    #celsius
    #fahrenheit

    constructor (temperature)
    {
        this.#celsius = temperature
        this.#fahrenheit = (temperature * 1.8) + 32
    }

    get celsius(){
        return this.#celsius
    }

    set celsius(temperature){
        this.#celsius = temperature
    }

    get fahrenheit(){
        return this.#fahrenheit
    }

    set fahrenheit(temperature){
        this.#fahrenheit = temperature
    }

    static fromFahrenheit(Temp)
    {
        return new Temperature((Temp - 32) / 1.8)
    }
}

const day1 = new Temperature(25);
console.log(day1.celsius);
console.log(day1.fahrenheit);

day1.celsius = 26;
day1.fahrenheit = 67;

const day2 = new Temperature(24);

const day3 = Temperature.fromFahrenheit(88);
