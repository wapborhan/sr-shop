import React from "react";

const About = () => {
  return (
    <section className="mn-about p-b-15">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="mn-about-img">
            <img
              src="/assets/img/common/about-1.html"
              className="v-img"
              alt="about"
            />
            <img
              src="/assets/img/common/about-2.html"
              className="h-img"
              alt="about"
            />
            <img
              src="/assets/img/common/about-3.html"
              className="h-img"
              alt="about"
            />
            <img
              src="/assets/img/common/about-4.html"
              className="h-img"
              alt="about"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="mn-about-detail">
            <div className="section-title m-t-991">
              <h2>
                Who We <span>Are?</span>
              </h2>
              <p>
                We’re here to serve only the best products for you. Enriching
                your homes with the best essentials.
              </p>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Lorem Ipsum has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
