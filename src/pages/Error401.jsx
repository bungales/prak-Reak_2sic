import ErrorPage from "../components/ErrorPage";
export default function Error401() {
  return (
    <ErrorPage
      errorCode={401}
      errorDescription="Unauthorized — kamu harus login terlebih dahulu untuk mengakses halaman ini."
    />
  );
}
