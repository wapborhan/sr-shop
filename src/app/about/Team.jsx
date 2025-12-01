import React from "react";

const Team = () => {
  return (
    <section className="mn-team-section p-tb-15">
      <div className="mn-title">
        <h2>
          Our <span>Team</span>
        </h2>
      </div>
      <div
        className="mn-team owl-carousel"
        style={{ display: "flex", gap: "20px" }}
      >
        <div className="mn-team-box">
          <div className="mn-team-img">
            <img src="assets/img/user/1.jpg" alt="user" />
            <div className="mn-team-socials">
              <ul className="align-itemn-center">
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-twitter-line"></i>
                  </a>
                </li>
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-facebook-line"></i>
                  </a>
                </li>
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-linkedin-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mn-team-info">
            <h5>Olivia Smith</h5>
            <p>Founder</p>
          </div>
        </div>
        <div className="mn-team-box">
          <div className="mn-team-img">
            <img src="assets/img/user/2.jpg" alt="user" />
            <div className="mn-team-socials">
              <ul className="align-itemn-center">
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-twitter-line"></i>
                  </a>
                </li>
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-facebook-line"></i>
                  </a>
                </li>
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-linkedin-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mn-team-info">
            <h5>William Dalin</h5>
            <p>Co-Founder</p>
          </div>
        </div>
        <div className="mn-team-box">
          <div className="mn-team-img">
            <img src="assets/img/user/3.jpg" alt="user" />
            <div className="mn-team-socials">
              <ul className="align-itemn-center">
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-twitter-line"></i>
                  </a>
                </li>
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-facebook-line"></i>
                  </a>
                </li>
                <li className="mn-social-link">
                  <a href="#">
                    <i className="ri-linkedin-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mn-team-info">
            <h5>Emma Welson</h5>
            <p>Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
