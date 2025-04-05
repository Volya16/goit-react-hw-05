import DotLoader from "react-spinners/DotLoader";

export default function Loader({ loading }) {
  return (
    <DotLoader
      color="#4b865c"
      loading={loading}
      cssOverride={{
        display: "block",
        margin: "0 auto",
      }}
      size={70}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
