import { useArtistById } from "../../api/useArtistById";
import { useCategoriesById } from "../../api/useCategoriesById";

export const Home = () => {
  const artist = useArtistById();
  const categoryIds = new Set();

  artist.data?.forEach((item) =>
    item.categoryIds?.forEach((ele) => categoryIds.add(ele))
  );

  const categories = useCategoriesById(Array.from(categoryIds));

  return (
    <div className="page">
      <h2 className="title-2">Mr. Van G</h2>
    </div>
  );
};
