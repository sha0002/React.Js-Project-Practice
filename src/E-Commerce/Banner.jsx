import React from "react";

const ShoppingBanner = () => {
  return (
    <section
      className="py-5 overflow-hidden mb-5"
      style={{
        background: "linear-gradient(135deg, #fff5ed 0%, #ffe1cc 100%)",
        minHeight: "560px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 py-4">

            {/* Offer Badge */}
            <span
              className="badge rounded-pill px-3 py-2 mb-3"
              style={{
                backgroundColor: "#ff5b35",
                fontSize: "13px",
                letterSpacing: "0.5px",
              }}
            >
              🔥 LIMITED TIME OFFER
            </span>

            {/* Heading */}
            <h1
              className="fw-bold mt-3 mb-4"
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                lineHeight: "1.1",
                color: "#202124",
              }}
            >
              Upgrade Your{" "}
              <span style={{ color: "#ff5b35" }}>
                Style
              </span>
              <br />
              With Our Latest Collection
            </h1>

            {/* Description */}
            <p
              className="text-secondary mb-4"
              style={{
                maxWidth: "530px",
                fontSize: "17px",
                lineHeight: "1.7",
              }}
            >
              Discover trending products, premium quality and unbeatable
              prices. Shop our newest collection today and get up to{" "}
              <strong>50% OFF.</strong>
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">

              <a
                href="/shop"
                className="btn text-white px-4 py-3 fw-semibold"
                style={{
                  backgroundColor: "#ff5b35",
                  borderRadius: "8px",
                  border: "2px solid #ff5b35",
                }}
              >
                Shop Now →
              </a>

              <a
                href="/collection"
                className="btn px-4 py-3 fw-semibold"
                style={{
                  color: "#202124",
                  border: "2px solid #202124",
                  borderRadius: "8px",
                }}
              >
                View Collection
              </a>

            </div>

            {/* Features */}
            <div className="d-flex flex-wrap gap-3 text-secondary small">
              <span>✓ Free Shipping</span>
              <span>✓ Secure Payment</span>
              <span>✓ Easy Returns</span>
            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="col-lg-6 mt-4 mt-lg-0">

            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "560px" }}
            >

              {/* Product Image */}
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
                alt="Latest Collection"
                className="img-fluid w-100 shadow-lg"
                style={{
                  height: "480px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />


              {/* DISCOUNT CARD */}
              <div
                className="position-absolute bg-white shadow p-3 rounded-3"
                style={{
                  top: "40px",
                  right: "-15px",
                  minWidth: "160px",
                }}
              >
                <div className="d-flex align-items-center gap-2">

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#fff0ea",
                      color: "#ff5b35",
                      fontWeight: "bold",
                    }}
                  >
                    %
                  </div>

                  <div>
                    <strong
                      className="d-block"
                      style={{ color: "#ff5b35" }}
                    >
                      50% OFF
                    </strong>

                    <small className="text-muted">
                      Selected Products
                    </small>
                  </div>

                </div>
              </div>


              {/* FREE SHIPPING CARD */}
              <div
                className="position-absolute bg-white shadow p-3 rounded-3"
                style={{
                  bottom: "30px",
                  left: "-15px",
                  minWidth: "170px",
                }}
              >
                <div className="d-flex align-items-center gap-2">

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#fff0ea",
                      fontSize: "18px",
                    }}
                  >
                    🚚
                  </div>

                  <div>
                    <strong
                      className="d-block"
                      style={{ color: "#ff5b35" }}
                    >
                      FREE
                    </strong>

                    <small className="text-muted">
                      Worldwide Shipping
                    </small>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ShoppingBanner;
