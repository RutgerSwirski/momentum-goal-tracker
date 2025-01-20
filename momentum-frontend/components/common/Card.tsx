// components/common/Card.jsx
const Card = ({ title, children }) => (
  <div className="p-4 bg-white shadow rounded mb-6">
    {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
    <div>{children}</div>
  </div>
);

export default Card;
