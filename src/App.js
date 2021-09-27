import { useEffect, useState } from "react";
import Header from "./components/Header";
import DataContent from "../src/components/DataContent";
import API_KEY from "./heplers/keys";
import './styles/App.css';

function App() {
    const [dataTrending, setDataTrending] = useState(null);
    const [dataSearch, setDataSearch] = useState(null);
    const [itemSearch, setItemSearch] = useState('');
    const [count, setCount] = useState(5);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${count}&rating=g`)
          .then(response => response.json())
          .then(response => setDataTrending(response));
    }, [count]);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${itemSearch}&limit=${count}&offset=0&rating=g&lang=en`)
          .then(response => response.json())
          .then(response => setDataSearch(response));
    }, [itemSearch, count]);

    return (
      <div>
          <Header setItemSearch={setItemSearch} setCount={setCount}/>
          <button className="btn btn-outline-success my-2 my-sm-0 btnShowMore"
                  type="submit"
                  onClick={() => setCount(count + 5)}>
              Show more
          </button>
          <DataContent
            data={itemSearch.length !== 0 ? dataSearch : dataTrending}/>
      </div>
    );
}

export default App;
