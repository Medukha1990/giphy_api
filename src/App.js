import { useEffect, useState } from "react";
import { requestSearch, requestTrending } from "./DataProvider";
import Header from "./components/Header";
import DataContent from "../src/components/DataContent";
import Context from "./context";
import './styles/App.css';

function App() {
    const [dataTrending, setDataTrending] = useState(null);
    const [dataSearch, setDataSearch] = useState(null);
    const [itemSearch, setItemSearch] = useState('');
    const [count, setCount] = useState(5);

    useEffect(() => {
        requestTrending(count)
          .then(response => setDataTrending(response));
    }, [count]);

    useEffect(() => {
        requestSearch(itemSearch, count)
          .then(response => setDataSearch(response));
    }, [itemSearch, count]);

    return (
      <Context.Provider value={{ setItemSearch, setCount }}>
          <div>
              <Header/>
              <button
                className="btn btn-outline-success my-2 my-sm-0 btnShowMore"
                type="submit"
                onClick={() => setCount(count + 5)}>
                  Show more
              </button>
              <DataContent
                data={itemSearch.length !== 0 ? dataSearch : dataTrending}/>
          </div>
      </Context.Provider>
    );
}

export default App;
