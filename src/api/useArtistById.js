import { useQuery } from "@tanstack/react-query";

const fieldIncludes = [
  "id",
  "title",
  "category_ids",
  "image_id",
  "thumbnail",
].join(",");

const getArtistById = (id, size) => {
  return fetch(
    `https://api.artic.edu/api/v1/artworks/search?${new URLSearchParams({
      fields: fieldIncludes,
    })}&query[term][artist_id]=${id}&size=${size}`
  )
    .then(async (response) => await response.json())
    .then(({ data, config }) =>
      data.map((item) => ({
        id: item.id,
        title: item.title,
        categoryIds: item.category_ids,
        imageUrl: `${config.iiif_url}/${item.image_id}/full/${size},/0/default.png`,
        imageAltText: item.thumbnail.alt_text,
      }))
    );
};

export const useArtistById = (artistId = "40610", size = 20) => {
  return useQuery(
    ["artist", artistId, size],
    () => getArtistById(artistId, size),
    {
      staleTime: Infinity,
    }
  );
};
