import ErrorPage from "../components/ErrorPage";
export default function Error400() {
  return (
    <ErrorPage
      errorCode={400}
      errorDescription="Bad Request — permintaan tidak valid atau tidak dapat diproses oleh server."
    />
  );
}
