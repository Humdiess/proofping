const Alert = ({ message, type }) => (
    <div className={`p-4 mb-4 rounded ${type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
      {message}
    </div>
  );
  
  export default Alert;
  