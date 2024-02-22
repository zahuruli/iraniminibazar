import React, { useState, useEffect } from "react";
import "./pos.css";
import PropTypes from "prop-types";

export const PosInvoice = React.forwardRef((props, ref) => {
  const { fixData, VAT, discount, netTotal, payment_id } = props;
  const [currentDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <React.Fragment key="pos-invoice">
      <div ref={ref} className="pos-pinter">
        <div className="container">
          <div className="receipt_header">
            <h1>
              <span>IRANI MINI BAZAR</span>
            </h1>
            <h2>
              Address: Khilpara Bazar, Chatkhil, Noakhali{" "}
              <span>Phone: +8801830112972</span>
            </h2>
          </div>

          <div className="receipt_body">
            <div
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Invoice/Bill
            </div>
            <div className="date_time_con">
              <div className="date">
                <span>Date : </span>
                {currentDate}
              </div>
              <div className="time">
                <span>Time : </span>
                {currentTime.toLocaleTimeString("en-US", {
                  timeZone: "Asia/Dhaka",
                })}
              </div>
            </div>

            <div className="items">
              <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                Description
              </span>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>QTY</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  {fixData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.product_name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.sale_price}</td>
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr>
                    <td style={{ fontSize: "12px" }}>Vat</td>
                    <td></td>
                    <td>{VAT}</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td></td>
                    <td>{discount}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    <td>{netTotal}</td>
                  </tr>

                  <tr>
                    <td>{payment_id}</td>
                    <td></td>
                    <td>{payment_id}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <h3 className="thank">Thank You, Come Again</h3>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "12px" }}>Powered By</div>
            <span style={{ fontSize: "12px" }}>
              &copy; MerinaSoft, 173 Arambag, Motijheel
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

// Prop validation
PosInvoice.propTypes = {
  fixData: PropTypes.array.isRequired,
  VAT: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  netTotal: PropTypes.number.isRequired,
  payment_id: PropTypes.string.isRequired,
};

// Set display name
PosInvoice.displayName = "PosInvoice";
