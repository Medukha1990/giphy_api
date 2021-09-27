import Input from "./Input";


const Header = () => {

    return (
      <header>
          <div className="mainSearch">
              <nav className="navbar navbar-light bg-light">
                  <Input/>
              </nav>
          </div>
      </header>
    );
};

export default Header;
