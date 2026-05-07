import Flipkart from "../assets/companylogo/Flipkart.png";
import Adobe from "../assets/companylogo/Adobe.png";
import Amazon from "../assets/companylogo/Amazon.png";
import Google from "../assets/companylogo/Google.png";
import LinkedIn from "../assets/companylogo/LinkedIn.png";
import Microsoft from "../assets/companylogo/Microsoft.png";
import PayPal from "../assets/companylogo/PayPal.png";
import Uber from "../assets/companylogo/Uber.png";

const logos = [
  {
    id: 1,
    image: Flipkart,
    name: "Flipkart",
  },
  {
    id: 2,
    image: Adobe,
    name: "Adobe",
  },
  {
    id: 3,
    image: Amazon,
    name: "Amazon",
  },
  {
    id: 4,
    image: Google,
    name: "Google",
  },
  {
    id: 5,
    image: LinkedIn,
    name: "LinkedIn",
  },
  {
    id: 6,
    image: Microsoft,
    name: "Microsoft",
  },
  {
    id: 7,
    image: PayPal,
    name: "PayPal",
  },
  {
    id: 8,
    image: Uber,
    name: "Uber",
  },
];

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden bg-black py-8">
      <div className="flex gap-12 animate-scroll whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[180px]"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
