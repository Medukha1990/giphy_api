import { useContext } from "react";
import Context from "../context";

const Input = () => {
    const { setItemSearch, setCount} = useContext(Context)

    return (
      <form className="form-inline">
          <input className="form-control mr-sm-2" type="search"
                 placeholder="Search" aria-label="Search"
                 onChange={(e) => {
                     setItemSearch(e.target.value);
                     setCount(5);
                 }}/>
      </form>
    );
};

export default Input;
