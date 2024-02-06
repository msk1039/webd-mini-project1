import { useState } from "react";

import "./App.css";
import productcard from "./components/productcard";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary ">
        <div class="container-fluid">
          <span class="navbar-brand" href="$#">
            <img class="site-logo"
              src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-logo.png"
              alt=""
            />
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  MEN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  WOMEN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  KIDS
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <form class="d-flex search-bar" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>

    <div class="main-wrapper">
      <h3 class="section-heading">Top Brands</h3>

      <div class="products container">
        
        <div class="card">
          <img
            class="card-img-top"
            src="https://assets.turbologo.ru/blog/ru/2021/11/12081458/Gucci_logo.png"
            alt="Card image"
          ></img>
          <div class="card-body">
            
            <a href="#" class="btn btn-primary">
              checkout
            </a>
          </div>
        </div>

        <div class="card">
          <img
            class="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWUUyKKU_UKLe-eVl3WKax6HTZ4_-GNYBkg&usqp=CAU"
            alt="Card image"
          ></img>
          <div class="card-body">
            
            <a href="#" class="btn btn-primary">
             checkout
            </a>
          </div>
        </div>

        <div class="card">
          <img
            class="card-img-top"
            src="https://justcreative.com/wp-content/uploads/2023/05/Giorgio-Armani.png.webp"
            alt="Card image"
          ></img>
          <div class="card-body">
           
            <a href="#" class="btn btn-primary">
              checkout
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
