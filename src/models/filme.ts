export class Filme {
	constructor() {
		this.poster_path = '';
		this.title = '';
		this.release_date = {dia: '', mes: '', ano: ''};
		this.original_language = '';
		this.genres = [{id: 0, name: ''}];
		this.original_title = '';
		this.vote_average = 0;
		this.vote_count = 0;
		this.revenue = 0;
		this.budget = 0;
		this.original_language = '';
		this.runtime = 0;
		this.spoken_languages = [{iso_639_1: '', name:''}];
		this.overview = '';
		this.genres = [{id: 0, name: ''}];
	}

	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: {
		backdrop_path: string, id: number, name: string, poster_path: string
	};
	budget: number;
	genres: [{id: number, name: string}];
	homepage: string;
	id: number;
	imdb_id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: [{
		name: string, id: number, logo_path: string, origin_country: string
	}];
	production_countries: [{
		iso_3166_1: string, name: string
	}];
	release_date: {dia: string, mes: string, ano: string};
	revenue: number;
	runtime: number;
	spoken_languages: [{
		iso_639_1: string, name: string
	}];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}