import { useSelector, useDispatch } from "react-redux";
import { addData } from "../Redux/actions";
import { useEffect, useState, useRef } from "react";
import { store } from "../Redux/store";

export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  const userorders = useSelector((store) => store.orders);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [problem, setProblem] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch("http://localhost:8080/orders");
    data = await data.json();
    dispatch(addData(data));
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  async function handleSubmit() {
    let obj = {
      problem: problem,
      owner_name: user.username,
      brand: brand,
      cost: 142,
      status: "Not Accepted",
    };

    fetch("http://localhost:8080/orders/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    getData();
  }

  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
          onChange={(e) => setProblem(e.target.value)}
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          id="owner"
          placeholder="yourname"
          value="John Doe"
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
          onChange={(e) => setBrand(e.target.value)}
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit" onClick={() => handleSubmit()}>
          submit
        </button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter" onClick={() => handleToggle()}>
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
          {toggle ? "showUnfinished" : "Only unfinished"}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        <div className="past-orders">
          {userorders.map((el) => {
            if (el.owner_name == user.username) return;
            else
              return (
                <div key={el.id}>
                  <span className="id">{el.id}</span>.{" "}
                  <span className="problem">{el.problem}</span>{" "}
                  <span className="cost">
                    {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
                    {el.status == "Accepted" ? null : el.cost}
                  </span>
                  <p className="status">Status: {el.status} </p>
                  <hr />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};
