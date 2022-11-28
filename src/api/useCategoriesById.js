import { useQuery } from "@tanstack/react-query";

const getCategoriesById = (ids) => {
  return fetch(
    `https://api.artic.edu/api/v1/category-terms?${new URLSearchParams({
      ids,
    })}`
  )
    .then(async (response) => await response.json())
    .then(({ data }) =>
      data.map((item) => ({
        id: item.id,
        title: item.title,
      }))
    );
};

export const useCategoriesById = (categoryIds) => {
  return useQuery(
    ["categories", categoryIds],
    () => getCategoriesById(categoryIds),
    {
      staleTime: Infinity,
    }
  );
};
