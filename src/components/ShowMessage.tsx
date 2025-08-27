export default function ShowMessage({
  message,
  type,
}: {
  message: string;
  type?: string;
}) {
  return (
    <p
      className={`text-center text-2xl font-bold ${type === "error" ? "text-red-500" : ""}`}
    >
      {message}
    </p>
  );
}
