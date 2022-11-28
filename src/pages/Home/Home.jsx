import { useArtistById } from "../../api/useArtistById";

export const Home = () => {
  const artist = useArtistById();
  console.log(artist);
  return (
    <div className="page">
      <h2 className="title-2">Mr. Van G</h2>
    </div>
  );
};
