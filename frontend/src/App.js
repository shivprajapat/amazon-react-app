import './App.css';
import data from './data'
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {
              data.products.map((product) => {
                const { name, image, price, _id } = product;
                return (
                  <div className="card" key={_id}>
                    <a href={`product/${_id}`}>
                      <img className="medium" src={image} alt={name} />
                    </a>
                    <div className="card-body">
                    <a href={`product/${_id}`}>
                        <h2>{name}</h2>
                      </a>
                      <div className="rating">
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                      </div>
                      <div className="price">{price}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
