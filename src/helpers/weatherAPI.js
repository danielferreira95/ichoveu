const APIKEY = import.meta.env.VITE_TOKEN;
export const searchCities = async (term) => {
  const resposta = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${APIKEY}&q=${term}`);
  const dado = await resposta.json();
  if (dado.length === 0) {
    alert('Nenhuma cidade encontrada');
  }
  console.log(dado);
  return dado;
};

export const getWeatherByCity = async (URL_CIDADE) => {
//   seu código aqui
  const resposta = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${APIKEY}&q=${URL_CIDADE}`);
  const dado = await resposta.json();

  const obj = {
    name: dado.location.name,
    country: dado.location.country,
    temp: dado.current.temp_c,
    condition: dado.current.condition.text,
    icon: dado.current.condition.icon,
    url: URL_CIDADE,
  };
  return obj;
};
