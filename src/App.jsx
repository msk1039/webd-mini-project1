import { useState } from "react";

import "./App.css";
import productcard from "./components/productcard";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary ">
        <div class="container-fluid">
          <span class="navbar-brand" href="$#">
            <img
              class="site-logo"
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
            <ul class="navbar-nav navbar-nav1">
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
            <ul class="navbar-nav navbar-nav2">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  sign in
                </a>
              </li>
              </ul>

          </div>
        </div>
      </nav>

      <div class="main-wrapper">
        <h3 class="section-heading">Top Brands</h3>

        <div class="products ">
          <div class="card">
            <img
              
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
          
              src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"
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
              src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
              alt="Card image"
            ></img>
            <div class="card-body">
              <a href="#" class="btn btn-primary">
                checkout
              </a>
            </div>
          </div>
        </div>

        <h3 class="section-heading" >Shop by category</h3>
      </div>
    </div>
  );
}

export default App;
