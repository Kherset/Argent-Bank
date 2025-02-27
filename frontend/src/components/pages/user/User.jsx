import Account from "../../account/Account";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import "../../style.css";
import Welcome from "../../welcome/Welcome";

function User() {
  return (
    <div>
      <Nav />
      <div className="main bg-dark">
        <Welcome />
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </div>
      <Footer />
    </div>
  );
}

export default User;
