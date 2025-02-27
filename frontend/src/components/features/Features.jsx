import "../style.css";
import FeaturesItem from "./FeatureItem";
import iconChat from "../../images/iconChat.png";
import iconMoney from "../../images/iconMoney.png";
import iconSecurity from "../../images/iconSecurity.png";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeaturesItem
        image={iconChat}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeaturesItem
        image={iconMoney}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <FeaturesItem
        image={iconSecurity}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money
        is always safe."
      />
    </section>
  );
}

export default Features;
