import { useState, useEffect } from "react";
import axios from "axios";
import RestaurantDetails from "./component/RestaurantDetails";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [paymentMethods, setPaymentMethods] = useState({
    card: false,
    cash: false,
    upi: false,
  });
  const [votes, setVotes] = useState(0);
  const [review, setReview] = useState("");
  const [categories, setCategories] = useState("");
  const [itemCost, setItemCost] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [sortRes, setSortRes] = useState([]);

  const createRestaurant = async (e) => {
    e.preventDefault();
    const singleRest = {
      name,
      image,
      paymentMethods,
      votes,
      review,
      categories: categories.split(","),
      itemCost,
    };
    await axios.post("http://localhost:8080/restaurants", singleRest);
  };

  const fetchRestaurants = async () => {
    const { data } = await axios("http://localhost:8080/restaurants");
    setRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleSort = (val = 0) => {
    setSortRes(restaurants.filter((ele) => Number(ele.review) > val).sort((a, b) => Number(a.review) - Number(b.review)));
  };

  return (
    <div className="app">
      <h1>React Restaurants</h1>

      <div className="addRes">
        <h3>Add a new restaurant</h3>
        <form onSubmit={createRestaurant}>
          <div>
            <label htmlFor="name">Restaurant name: </label>
            <input type="text" placeholder="Enter restaurant name" id="name" onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="image">Image url:</label>
            <input type="text" placeholder="Submit image url" id="image" onChange={(e) => setImage(e.target.value)} />
          </div>

          <div>
            <label htmlFor="votes">Votes:</label>
            <input type="Number" placeholder="Votes" id="votes" onChange={(e) => setVotes(e.target.value)} />
          </div>

          <div>
            <label htmlFor="review">Review:</label>
            <input type="text" placeholder="review" id="review" onChange={(e) => setReview(e.target.value)} />
          </div>

          <div>
            <label htmlFor="cost">Cost per Item:</label>
            <input type="Number" placeholder="item per cost" id="cost" onChange={(e) => setItemCost(e.target.value)} />
          </div>

          <div>
            <label htmlFor="categories">Categories(comma values):</label>
            <input type="text" placeholder="comma separated categories" id="categories" onChange={(e) => setCategories(e.target.value)} />
          </div>

          <div>
            <h5>Payment methods:</h5>
            <label htmlFor="card">card</label>
            <input type="checkbox" id="card" checked={paymentMethods.card} onChange={(e) => setPaymentMethods({ ...paymentMethods, card: e.target.checked })} />

            <label htmlFor="cash">cash</label>
            <input type="checkbox" id="cash" checked={paymentMethods.cash} onChange={(e) => setPaymentMethods({ ...paymentMethods, cash: e.target.checked })} />

            <label htmlFor="upi">upi</label>
            <input type="checkbox" id="upi" checked={paymentMethods.upi} onChange={(e) => setPaymentMethods({ ...paymentMethods, upi: e.target.checked })} />
          </div>

          <button>Create a new restaurant</button>
        </form>
      </div>

      <div className="sort">
        <h2>Sort restaurants by rating</h2>
        <button onClick={() => handleSort(1)}>1 star</button>
        <button onClick={() => handleSort(2)}>2 star</button>
        <button onClick={() => handleSort(3)}>3 star</button>
        <button onClick={() => handleSort(4)}>4 star</button>
      </div>

      {sortRes.length <= 0
        ? restaurants.map((restaurant) => <RestaurantDetails key={restaurant.id} restaurant={restaurant} />)
        : sortRes.map((restaurant) => <RestaurantDetails key={restaurant.id} restaurant={restaurant} />)}
    </div>
  );
}

export default App;