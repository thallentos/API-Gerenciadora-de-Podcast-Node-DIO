# Thallents Podcast

### Descrição

Um app ao estilo Netflix aonde possa centralizar diferentes episódios podcasts separados por categoria

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios dos podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:
Listar os episódios dos podcasts em sessões de categorias
### Como vou implementar:
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categorias
    ```js
      [{
        podcastName: "flow",
        episode: "DILERA - Flow #375",
        videoId: "LbBNooBc-E8"
        cover: "https://i.ytimg.com/vi/LbBNooBc-E8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDRydVm-ClOrb5ro7tv-VWNcgMnjw",
        link: "https://www.youtube.com/live/LbBNooBc-E8?si=qX3uQd-rtgLbsmOI",
        categories: ["deficiência", "tourette"]
      }]
    ```