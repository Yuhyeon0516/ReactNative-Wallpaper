export const ACTION_CLICKED_FAVORITE = "ACTION_CLICKED_FAVORITE";

export function onClickFavorite(clickedItem) {
  return {
    type: ACTION_CLICKED_FAVORITE,
    clicked: clickedItem,
  };
}
