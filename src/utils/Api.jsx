const path = 'http://demo4861279.mockable.io/';

/*
export function playerInfo(id, onSuccess, onFailure) {
    const url = `${path}/games/${id}/player`;
    fetch(url)
      .then((r) => {
	  if (!r.ok) onFailure(Error(r.statusText));
	  return r.json();
      })
      .then(onSuccess)
      .catch(onFailure);
}
*/

export function playerInfo(id, onSuccess, onFailure) {
  if (id === -1) onFailure('Error');
  onSuccess({
    resources = ["brick", "lumber", "wool", "grain", "ore"],
    card = ["road_building", "year_of_plenty", "monopoly", "victory_point", "knight"],
  });
}
