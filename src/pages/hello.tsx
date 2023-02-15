import { useState, useEffect } from "react";
import { Data } from "@/pages/api/hello";
export default function Hello() {
  const [data, setData] = useState<Data>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.greeting}</p>
    </div>
  );
}
