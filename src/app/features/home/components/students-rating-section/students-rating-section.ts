import { Component } from '@angular/core';

@Component({
  selector: 'students-rating-section',
  template: `
    <section class="mb-5">
      <div class="container">
        <h2 class="text-center lg-text mb-4">What Our Students Say</h2>
        <div class="row">
          <!-- Testimonial 1 -->
          <div class="col-md-4 mb-4">
            <div
              class="card shadow text-center d-flex justify-content-center p-3"
            >
              <div
                class="mb-3 d-flex flex-row align-items-center justify-content-between"
              >
                <div class="d-flex flex-row align-items-center">
                  <img
                    class="card-profilePic"
                    src="assets/images/profile-pic-vector.png"
                  />
                  <h6 class="ps-3 bold" style="font-size:0.9rem;">
                    Abdallah Mohamed
                  </h6>
                </div>
                <h6>
                  4.6 <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </h6>
              </div>
              <div class="card-body">
                <p class="card-text">
                  "This platform has transformed my learning experience. The
                  courses are top-notch!"
                </p>
                <footer class="blockquote-footer">
                  John Doe, <cite title="Source Title">Student</cite>
                </footer>
              </div>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div class="col-md-4 mb-4">
            <div
              class="card shadow text-center d-flex justify-content-center p-3"
            >
              <div
                class="mb-3 d-flex flex-row align-items-center justify-content-between"
              >
                <div class="d-flex flex-row align-items-center">
                  <img
                    class="card-profilePic"
                    src="assets/images/profile-pic-vector.png"
                  />
                  <h6 class="ps-3 bold" style="font-size:0.9rem;">
                    Yousef Ahmed
                  </h6>
                </div>
                <h6>
                  4.6 <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </h6>
              </div>
              <div class="card-body">
                <p class="card-text">
                  "This platform has transformed my learning experience. The
                  courses are top-notch!"
                </p>
                <footer class="blockquote-footer">
                  John Doe, <cite title="Source Title">Student</cite>
                </footer>
              </div>
            </div>
          </div>
          <!-- Testimonial 3 -->
          <div class="col-md-4 mb-4">
            <div
              class="card shadow text-center d-flex justify-content-center p-3"
            >
              <div
                class="mb-3 d-flex flex-row align-items-center justify-content-between"
              >
                <div class="d-flex flex-row align-items-center">
                  <img
                    class="card-profilePic"
                    src="assets/images/profile-pic-vector.png"
                  />
                  <h6 class="ps-3 bold" style="font-size:0.9rem;">
                    Kareem Waleed
                  </h6>
                </div>
                <h6>
                  4.6 <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </h6>
              </div>
              <div class="card-body">
                <p class="card-text">
                  "This platform has transformed my learning experience. The
                  courses are top-notch!"
                </p>
                <footer class="blockquote-footer">
                  John Doe, <cite title="Source Title">Student</cite>
                </footer>
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
      * {
        color: white;
      }
      .card {
        background-color: transparent;
      }
      .card-profilePic {
        width: 3rem;
      }
    `,
  ],
})
export class StudentsRatingComponent {}
