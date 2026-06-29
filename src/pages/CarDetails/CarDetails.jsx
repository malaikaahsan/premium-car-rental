import { useParams } from "react-router-dom";

export default function CarDetails() {
  const { id } = useParams();

  return (
    <h1 className="text-4xl text-center mt-10">
      Car Details {id}
    </h1>
  );
}