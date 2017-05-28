export default function reducer ( state = {
  options: null,
}, action) {
  switch (action.type) {
  case 'GET_OPTIONS': {
    const getOptions = (input) => {
      return fetch(`https://api.coinmarketcap.com/v1/ticker/`)
        .then((response) => {
          return response.json();
        }).then((json) => {
          json.forEach(function(obj) {
            var coinName = obj.id;
            obj.value = obj.id;
            obj.label = coinName.charAt(0).toUpperCase() + coinName.slice(1);
          });
          return  { options: json }  ;
        });
    }
    return {
      ...state,
      options: getOptions
    };
  }
  default:
    return state;
  }
}
