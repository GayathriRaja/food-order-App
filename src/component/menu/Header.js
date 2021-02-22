import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cuisines } from "../../utils/constants";
import "../FoodDescription.css";
import LogoImage from "../Images/GImage1.jpg";
import { useSelector, useDispatch } from "react-redux";
import DefaultArrayCartAction from "./Redux/Action/defaultArrayCartAction";
import DefaultCartUpdateValue from "./Redux/Action/DefaultCartUpdateValue";
import defultPriceAction from "./Redux/Action/defultPriceAction";
import db, { firebaseApp, auth } from "../../FirebaseConfig/firebase";

const Header = (props) => {
  const selector = useSelector((state) => state.updateCart);
  const Dispatch = useDispatch();

  const onItemClick = (clickedItem) => () => {
    if (props.updateCuisine) {
      props.cartValueFromHeader(false);
      props.getSearchKeyValue();
      props.updateCuisine(clickedItem);
    }
  };

  const [keyvalue, setKeyValue] = useState("Enter the key");

  const onChangesearchButton = (event) => {
    var key = event.target.value;
    setKeyValue(key);
  };

  const onClickedSearchButton = () => {
    if (props.getSearchKeyValue) {
      props.cartValueFromHeader(false);
      props.updateCuisine();
      props.getSearchKeyValue(keyvalue);
    }
  };

  const onClickHomeButton = () => {
    if (props.updateCuisine) {
      props.updateCuisine();
    }
    if (props.getSearchKeyValue) {
      props.getSearchKeyValue();
    }
    if (props.cartValueFromHeader) {
      props.cartValueFromHeader(false);
    }
  };

  const [cartDisplay, setCartDisplay] = useState(false);

  const onClickHandlerCart = () => {
    setCartDisplay(true);

    if (props.cartValueFromHeader) {
      props.updateCuisine();
      props.getSearchKeyValue();
      props.cartValueFromHeader(cartDisplay);
    }
  };

  useEffect(() => {
    if (props.cartValueFromHeader) {
      props.updateCuisine();
      props.getSearchKeyValue();
      props.cartValueFromHeader(cartDisplay);
    }
  }, [cartDisplay]);

  var i = 0;
  function change() {
    var doc = document.getElementById("logo");

    var color = [
      "#990026",
      "#990073",
      "#4d0099",
      "#007399",
      "#4d9900",
      "#997300",
      "#994d00",
    ];

    //  doc.style.borderStyle="dotted";

    doc.style.borderColor = color[i];

    //  doc.style.background = color[i];

    i = (i + 1) % color.length;
  }
  setInterval(change, 1000);

  /////Multiple event Listener
  return (
    <div id="HeaderColor">
      <div className="backgroundImage"></div>

      <nav id="navColor" className="navbar navbar-expand-lg navbar-primary ">
        <ul class="navbar-nav">
          <li class="nav-item active" onClick={onClickHomeButton}>
            <span height="40px" width="40px" id="one">
              <img id="logo" src={LogoImage} />
              FoodOrder{" "}
            </span>{" "}
          </li>
        </ul>
        <div>
          <ul class="navbar-nav">
            {cuisines.map((cuisine) => (
              <li
                id="navColour"
                class="nav-link navbar-light"
                onClick={onItemClick(cuisine)}
              >
                {" "}
                {cuisine}
              </li>
            ))}
          </ul>
        </div>
        <ul class="form-inline my-2 my-lg-0 list-unstyled">
          <li>
            {" "}
            <input
              class="form-control  mr-sm-2"
              type="search"
              onChange={onChangesearchButton}
              placeholder="Search"
              aria-label="Search"
            />{" "}
          </li>
          <li>
            {" "}
            <button
              id="navColour"
              class="btn btn-outline-success my-2 my-sm-0 "
              onClick={onClickedSearchButton}
              type="submit"
            >
              Search
            </button>{" "}
          </li>
          <li
            id="navColour"
            class="nav-link navbar-light"
            onClick={onClickHandlerCart}
          >
            Cart({selector})
          </li>
          {/* <Link to="/">LOGOUT</Link> */}
          <Link
            id="navColour"
            class="nav-link navbar-light"
            exact
            strict
            to="/"
            onClick={() => {
              Dispatch(DefaultArrayCartAction());
              Dispatch(DefaultCartUpdateValue());
              Dispatch(defultPriceAction());
            }}
            onClick={() => {
              auth.signOut();
            }}
          >
            LOGOUT <span class="sr-only">LOGOUT</span>
          </Link>
          {/* <li
            class="nav-link navbar-light"
            id="navColour"
            class="nav-link navbar-light"
          >
            {auth.currentUser.email}
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
