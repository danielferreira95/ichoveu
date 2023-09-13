const APIKEY = import.meta.env.VITE_TOKEN;
export const searchCities = async (term) => {
  const resposta = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${APIKEY}&q=${term}`);
  const dado = await resposta.json();
  if (dado.length === 0) {
    alert('Nenhuma cidade encontrada');
    return [];
  }
  return dado;
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
