import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <b>
        This page wasn`t found. Please follow this <Link to="/">link</Link>
      </b>
    </div>
  );
}
