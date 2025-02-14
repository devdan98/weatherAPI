import { faker } from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  const generateThreeDays = {
    day1: faker.number.int({min: -15, max: 30}),
    day2: faker.number.int({min: -15, max: 30}),
    day3: faker.number.int({min: -15, max: 30}),
  }

  // Return weather data
  // return generatedWeatherData;
  return generateThreeDays;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateGloucesterWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateGloucesterWeatherThree = (): WeatherThreeDays => {
  // Generate random weather data
  const generatedWeatherDataThree: WeatherThreeDays = {
    day1: faker.number.int({ min: -15, max: 30 }),
    day2: faker.number.int({ min: -15, max: 30 }),
    day3: faker.number.int({ min: -15, max: 30 }),
  };

  // Return weather data
  return generatedWeatherDataThree;
};

export const generateBristolWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};
