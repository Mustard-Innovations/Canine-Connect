// app/utils/fetchUnsplashData.ts

const UNSPLASH_API_KEY = '3aHkxAeszwU6Y7rCyFXHWknFOpU6zcqymSnG-x8NJEk'; // Replace with your Unsplash API key

export const fetchUnsplashData = async (query: string, perPage: number = 5) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&client_id=${UNSPLASH_API_KEY}`);
  const data = await response.json();
  return data.results.map((item: any) => ({
    id: item.id,
    title: item.description ? item.description.split('.')[0] : 'No title', // Ensure the title is a single sentence
    description: item.alt_description || 'No description',
    imageUrl: item.urls.regular,
  }));
};

export const fetchItemDetails = async (id: string) => {
  const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${UNSPLASH_API_KEY}`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return {
    id: data.id,
    title: data.description ? data.description.split('.')[0] : 'No title', // Ensure the title is a single sentence
    description: data.alt_description || 'No description',
    imageUrl: data.urls.regular,
  };
};
