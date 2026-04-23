import ErrorPage from "../components/ErrorPage";
export default function Error403() {
  return (
    <ErrorPage
      errorCode={403}
      errorDescription="Forbidden — kamu tidak memiliki izin untuk mengakses halaman ini."
    />
  );
}
