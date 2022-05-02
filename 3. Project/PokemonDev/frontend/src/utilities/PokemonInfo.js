export const getBattlePokemon = (
	idPokemon = 132,
	back = false,
	shiny = false,
) => {
	if (back) {
		if (shiny) {
			return `https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/animated/shiny/${idPokemon}.gif`;
		} else {
			return `https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/animated/${idPokemon}.gif`;
		}
	} else {
		if (shiny) {
			return `https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/animated/back/shiny/${idPokemon}.gif`;
		} else {
			return `https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/animated/back/${idPokemon}.gif`;
		}
	}
};

export const getTypeSkillEffect = (type = 'normal') => {
	return `https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/types/${type}.png`;
};

export const getAnimatedSkill = (type = 'normal') => {
	return `https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/animated/skill/${type}.gif`;
};
