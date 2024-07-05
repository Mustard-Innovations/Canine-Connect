export const getFavorites = (): string[] => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };
  
  export const addFavorite = (imageUrl: string): void => {
    const favorites = getFavorites();
    if (!favorites.includes(imageUrl)) {
      favorites.push(imageUrl);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };
  
  export const removeFavorite = (imageUrl: string): void => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(favorite => favorite !== imageUrl);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  