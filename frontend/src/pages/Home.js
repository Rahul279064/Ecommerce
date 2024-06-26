import{Fragment} from 'react'


export default function Home(){
    return<Fragment>
<nav class="navbar row">
      <div class="col-12 col-md-3">
        <div className="navbar-brand"> 
         <div className='rahul'><img width="80px" src="/images/logo.png" /> <span></span>FLIPKART  </div> 
       
        </div>
      </div>

      <div class="col-12 col-md-6 mt-2 mt-md-0">
        <div class="input-group">
          <input
            type="text"
            id="search_field"
            class="form-control"
            placeholder="Enter Product Name ..."
          />
          <div class="input-group-append">
            <button id="search_btn" class="btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <span id="cart" class="ml-3">Cart</span>
        <span class="ml-1" id="cart_count">2</span>
      </div>
    </nav>

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" class="container mt-5">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/1.jpg"                     // starting products
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">iphone 15 pro max (BLACK, 1TB Storage) with No Cost EMI/Additional Exchange Offers</a>
              </h5>
              <div class="ratings mt-auto">
                <div class="rating-outer">
                  <div class="rating-inner"></div>
                </div>
              </div>
              <p class="card-text">$245.67</p>
              <a href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/2.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href=""
                  > Smart Watch with 1.99 Inch Display, Calling, , Replacement Strap for Apple Watch Series. (Orange)</a>
              </h5>
              <div class="ratings mt-auto">
               <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>    
              <p class="card-text">$150.32</p>
              <a href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/3.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href=""
                  >Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 1080p  Works with iPhone/iPad; Starlight</a
                >
              </h5>
              <div class="ratings mt-auto">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p class="card-text">$440.57</p>
              <a href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/4.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">i AIRPOD 5, 15 days battery life, Water Resistant, 60Hrs Playtime</a>
              </h5>
              <div class="ratings mt-auto">
               <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p class="card-text">$15.46</p>

              <a type="button" href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="/images/products/5.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href="">Campus Men's Maxico Running Shoes</a>
              </h5>
              <div class="ratings mt-auto">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p class="card-text">$10.12</p>
              <a href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-1 bg-dark">
      <p class="text-center text-white mt-1 ">
        RAHUL FLIPKART  - 2023-2025, All Rights Reserved
      </p>
    </footer>





    </Fragment>
 
    
}