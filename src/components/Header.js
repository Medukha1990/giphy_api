const Header = ({ setItemSearch, setCount }) => {

    return (
      <header>
          <div className="mainSearch">
              <nav className="navbar navbar-light bg-light">
                  <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search"
                             placeholder="Search" aria-label="Search"
                             onChange={(e) => {
                                 setItemSearch(e.target.value);
                                 setCount(5)}}/>
                  </form>
              </nav>
          </div>
      </header>
    );
};

export default Header;
