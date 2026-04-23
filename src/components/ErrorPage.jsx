// src/components/ErrorPage.jsx
import { Link } from "react-router-dom";

export default function ErrorPage({ errorCode, errorDescription, errorImage }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        {/* Error Image */}
        {errorImage && (
          <img 
            src={errorImage} 
            alt={`Error ${errorCode}`} 
            className="mx-auto mb-8 h-64 w-64 object-contain"
          />
        )}
        
        {/* Error Code */}
        <h1 className="mb-4 text-8xl font-bold text-hijau">{errorCode}</h1>
        
        {/* Error Description */}
        <p className="mb-8 text-xl text-gray-600">{errorDescription}</p>
        
        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block rounded-lg bg-hijau px-6 py-3 text-white transition hover:bg-green-700"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}