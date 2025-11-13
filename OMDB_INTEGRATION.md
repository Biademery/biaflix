# Integração com OMDB API

## Visão Geral

O Biaflix agora utiliza a API do OMDB (Open Movie Database) para buscar informações reais sobre filmes e séries, substituindo os dados locais estáticos.

## Configuração

### API Key
- **Key**: `a9cd5145`
- **Base URL**: `https://www.omdbapi.com/`

A chave da API está configurada em `src/services/omdb.service.js`.

## Estrutura de Arquivos

### Novos Arquivos Criados

1. **`src/services/omdb.service.js`**
   - Serviço principal para comunicação com a API do OMDB
   - Métodos disponíveis:
     - `searchByTitle(title)` - Busca filme por título
     - `searchById(imdbId)` - Busca filme por ID do IMDB
     - `searchMovies(searchTerm, page)` - Busca múltiplos filmes
     - `getMoviesByIds(imdbIds)` - Busca múltiplos filmes por IDs
     - `mapToAppFormat(omdbMovie)` - Mapeia dados do OMDB para o formato da aplicação
     - `mapGenre(genreString)` - Mapeia gêneros do OMDB para os gêneros da aplicação

2. **`src/data/movie-ids.js`**
   - Lista curada de IDs do IMDB organizados por gênero
   - Contém aproximadamente 100+ filmes e séries populares
   - Gêneros disponíveis:
     - Action (Ação)
     - Adventure (Aventura)
     - Comedy (Comédia)
     - Romantic Comedy (Comédia Romântica)
     - Drama
     - Fantasy (Fantasia)
     - Horror (Terror)
     - Musical
     - Romance
     - Sci-Fi (Ficção Científica)
     - TV Shows (Séries)

3. **`src/services/movie.service.js`**
   - Gerenciador de estado dos filmes
   - Cache de filmes carregados
   - Métodos de filtragem por gênero e tipo

## Formato de Dados

### Dados do OMDB (Original)
```json
{
  "Title": "Guardians of the Galaxy Vol. 2",
  "Year": "2017",
  "Rated": "PG-13",
  "Released": "05 May 2017",
  "Runtime": "136 min",
  "Genre": "Action, Adventure, Comedy",
  "Director": "James Gunn",
  "Writer": "James Gunn, Dan Abnett, Andy Lanning",
  "Actors": "Chris Pratt, Zoe Saldaña, Dave Bautista",
  "Plot": "...",
  "Poster": "https://...",
  "Ratings": [...],
  "imdbRating": "7.6",
  "imdbID": "tt3896198",
  "Type": "movie"
}
```

### Dados Mapeados (Aplicação)
```json
{
  "id": "tt3896198",
  "name": "Guardians of the Galaxy Vol. 2",
  "imageURL": "https://...",
  "movieURL": "https://www.imdb.com/title/tt3896198",
  "genre": "action",
  "type": "movie",
  "year": "2017",
  "rated": "PG-13",
  "runtime": "136 min",
  "director": "James Gunn",
  "actors": "Chris Pratt, Zoe Saldaña, Dave Bautista",
  "plot": "...",
  "imdbRating": "7.6"
}
```

## Componentes Atualizados

Todos os componentes foram atualizados para usar o `movieService`:

- `Home.vue` - Página principal com carrosséis por gênero
- `All.vue` - Todos os filmes e séries
- `Filmes.vue` - Apenas filmes
- `Series.vue` - Apenas séries
- `Action.vue` - Filmes de ação
- `Adventure.vue` - Filmes de aventura
- `Comedy.vue` - Comédias
- `Drama.vue` - Dramas
- `Fantasy.vue` - Fantasia
- `Horror.vue` - Terror
- `Musical.vue` - Musicais
- `Romance.vue` - Romances
- `RomanticComedy.vue` - Comédias românticas
- `Sci-Fi.vue` - Ficção científica

### Padrão de Implementação

Todos os componentes seguem o mesmo padrão:

```vue
<script>
import movieService from '../services/movie.service';

export default {
  name: "ComponentName",
  data() {
    return {
      movies: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const allMovies = await movieService.loadAllMovies();
      this.movies = allMovies.filter(movie => movie.genre === 'genre-name');
      this.loading = false;
    } catch (error) {
      this.error = 'Erro ao carregar filmes. Por favor, tente novamente.';
      this.loading = false;
      console.error(error);
    }
  },
};
</script>
```

## Estados de Carregamento

Cada componente agora exibe:
- **Loading**: "Carregando filmes..." enquanto busca dados
- **Error**: Mensagem de erro se a requisição falhar
- **Success**: Exibe os filmes quando carregados

## Como Adicionar Novos Filmes

1. Encontre o ID do IMDB do filme (ex: `tt3896198`)
2. Adicione o ID na categoria apropriada em `src/data/movie-ids.js`
3. O filme será carregado automaticamente na próxima vez que a aplicação iniciar

## Limitações da API

- A API gratuita do OMDB tem limite de 1000 requisições por dia
- Os filmes são carregados em lotes de 10 para não sobrecarregar a API
- O cache é mantido em memória durante a sessão

## Performance

- **Cache**: Os filmes são carregados uma vez e mantidos em cache
- **Batch Loading**: Requisições são feitas em lotes para otimizar o tempo de carregamento
- **Lazy Loading**: Cada componente carrega os dados apenas quando necessário

## Próximos Passos

Possíveis melhorias futuras:
1. Implementar busca de filmes por título
2. Adicionar paginação para grandes listas
3. Implementar cache persistente (localStorage)
4. Adicionar filtros avançados (ano, rating, etc.)
5. Implementar sistema de favoritos
