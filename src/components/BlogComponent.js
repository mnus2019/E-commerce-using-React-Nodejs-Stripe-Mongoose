import React from "react";
import {

  Jumbotron,
} from "reactstrap";



function Blog(props) {


  return (
  <>
   
    <Jumbotron fluid>
    <div class="container">
      <div class="text-center ">
      <h1 class="text-info  "><strong>Blog</strong></h1>
   
    </div>
    </div>
  
        </Jumbotron>
 
  
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="card  flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h3 class="mb-0">
                  Morning Coffee
                </h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">People have a tendency 
                  to drink coffee first thing in the morning.</p>
              </div>
              <img width="100%" class="img-fluid card-img-right flex-auto d-none d-md-block" src="./img/coffeeImg/morningCoffee.jpg" alt="Card  cap"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h3 class="mb-0">
                  Bellevue Coworking Space
                </h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="card-text mb-auto">Giving You The Freedom 
                  & Flexibility To Work How You Like.</p>
              
              </div>
              <img width="100%"  class="img-fluid card-img-right flex-auto d-none d-md-block" src="./img/suiteImg/buzyguy.jpg" alt="Card cap"/>
            </div>
          </div>
        </div>
      
  
      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <h3 class="pb-3 mb-4 font-italic border-bottom">
              From the Coworking And Coffee Space..
            </h3>
  
            <div class="blog-post">
              <h2 class="blog-post-title">Coworking is Mom Approved</h2>
              <p class="blog-post-meta">January 1, 2014 by </p>
  
             
              <p>Cum sociis natoque penatibus et magnis  nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </blockquote>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <h2>History Throwback</h2>
              <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <h3>virtual Tour at Coworking place</h3>
              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <pre><code>Example code block</code></pre>
              <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
  
              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
              <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
              </ol>
              <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
            </div>
  
            <div class="blog-post">
              <h2 class="blog-post-title">Community Spot light</h2>
              <p class="blog-post-meta">December 23, 2013 by </p>
  
              <p>Cum sociis natoque penatibus et magnis nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </blockquote>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            </div>
            </div>
            </div>
          </main>
  </>
  );
}

export default Blog;
