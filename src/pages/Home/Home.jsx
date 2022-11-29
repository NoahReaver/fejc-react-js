import { useRef } from "react";
import { useState } from "react";
import { useArtistById } from "../../api/useArtistById";
import { useCategoriesById } from "../../api/useCategoriesById";
import { Accordion } from "../../components/Accordion/Accordion";
import { IconLink } from "../../components/IconLink/IconLink";

export const Home = () => {
  const artist = useArtistById();

  const categoryIds = new Set();
  artist.data?.forEach((item) =>
    item.categoryIds.forEach((ele) => categoryIds.add(ele))
  );

  const categories = useCategoriesById(Array.from(categoryIds));

  categories.data?.forEach((ele, i) => {
    const categoryImages = [];
    artist.data?.forEach((item) => {
      if (item.categoryIds.includes(ele.id)) categoryImages.push(item);
    });
    categories.data[i].images = categoryImages;
  });

  const [activeAccordion, setActiveAccordion] = useState();
  const categoryIcons = [
    categories.data?.at(0).images[1]?.imageUrl,
    categories.data?.at(0).images[0]?.imageUrl,
    categories.data?.at(2).images[2]?.imageUrl,
  ];

  const pageRef = useRef();

  return (
    <div className="page" ref={pageRef}>
      <h2 className="title-2">Mr. Van G</h2>

      {categories.data?.map((ele, i) => {
        return (
          <Accordion
            key={i}
            title={ele.title}
            icon={categoryIcons[i]}
            expanded={activeAccordion === i}
            onChange={() =>
              setActiveAccordion((prev) => {
                const newState = prev === i ? null : i;
                if (!newState)
                  pageRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });

                return prev === i ? null : i;
              })
            }
          >
            {ele.images.map((img, ind) => {
              return (
                <IconLink
                  key={ind}
                  icon={img.imageUrl}
                  label={img.title}
                  to={`paintings/${img.id}`}
                />
              );
            })}
          </Accordion>
        );
      })}
    </div>
  );
};
