const API_KEY =  'bf62e9bca0ff596020850a7a402916b8';
const API_BASE = 'https://api.themoviedb.org/3';


/*
- originais da netflix
- recomendados (trending)
- em alta (top rated)
- ação 
- comédia 
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE} ${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                itens: await basicFetch('')
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                itens: []
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                itens: []
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: []
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                itens: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                itens: []
            },

        ];
    }
}