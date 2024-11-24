import data from "./qurstions.json";

export const getResponse = (userInput) => {
  const cleanedInput = userInput.toLowerCase().trim();
  return data[cleanedInput]?.response || data["default"].response;
};
