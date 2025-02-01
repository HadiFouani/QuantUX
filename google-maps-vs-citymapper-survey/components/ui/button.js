export function Button({ children, onClick }) {
    return (
      <button className="bg-blue-500 text-white p-2 rounded-md w-full" onClick={onClick}>
        {children}
      </button>
    );
  }
  