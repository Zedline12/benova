import { Component } from '@angular/core';

@Component({
  selector: 'about-us-section',
  template: `
    <section class="about_section layout_padding ">
      <div class="container">
        <div class="row">
          <div class="col-md-7 px-0">
            <div class="img_container">
              <div class="img-box">
                <img src="assets/images/aboutus-vector.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-5 px-0">
            <div class="row d-flex justify-content-center">
              <div class="col-12 mb-3">
                <h1 class="text-center bold">Who are we ?</h1>
              </div>
              <div class="col-12 ">
                <h6 class="text-center light">
                  At Benova, we're dedicated to transforming the way you learn.
                  As a global leader in online education, we offer an extensive
                  library of over 150,000 premium courses across a wide range of
                  subjects. Our mission is to make high-quality education
                  accessible to everyone, no matter where they are in the world.
                  Whether you're looking to advance your career.
                </h6>
              </div>
              <div class="col-12 mt-4 d-flex justify-content-center">
                <rectangle-btn [size]="'medium'">More About Us</rectangle-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @import 'global';
      .img-box {
        width: 100%;
      }
      .about_section .row {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .about_section .img_container .img-box img {
        width: 100%;
      }

      .about_section .detail-box {
        background-color: #ffffff;
        padding: 45px 25px;
        -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
        position: relative;
        margin-left: -45px;
      }

      .about_section .detail-box p {
        margin-top: 5px;
      }

      .about_section .detail-box a {
        display: inline-block;
        padding: 10px 35px;
        background-color: $secondary;
        color: #ffffff;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        text-decoration: none;
        border: 1px solid transparent;
        text-transform: uppercase;
      }

      .about_section .detail-box a:hover {
        background-color: transparent;
        border-color: $secondary;
        color: $secondary;
      }
      .layout_padding {
        padding-top: 90px;
        padding-bottom: 90px;
      }
      section {
        margin-top: 25vh;
        margin-bottom: 25vh;
      }
      .heading_container h2 {
        font-size: clamp(2rem, 3vw, 3rem) !important;
      }
      .detail-box p {
        font-size: clamp(1rem, 1.1vw, 1.1rem) !important;
      }
    `,
  ],
})
export class AboutUsComponent {}
