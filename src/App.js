import React, { useEffect } from "react";
import "./styles.css";
import { getCountries } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const countryState = useSelector((state) => state.country);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries);
  }, []);

  return (
    <div className="App">
      <h2>Redux Thunk Middleware</h2>
      {countryState.isLoading ? (
        <p>Yükleniyor...</p>
      ) : (
        <div>
          {countryState.countries.map((country) => (
            <div key={country.name}>
              <h3>{country.name}</h3>
              <h4>{country.capital}</h4>
              <p>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "100px" }}
                />
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
