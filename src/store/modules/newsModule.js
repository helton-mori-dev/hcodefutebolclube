export default {
    state: {
        news: [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus repudiandae delectus, praesentium quos ipsam minima, veritatis tempora rerum aliquam, quaerat aperiam unde. Quia quas repellat doloremque vel non amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt eaque ducimus ea accusantium perferendis nemo ad ab tempora doloribus omnis quos, cupiditate dolores deleniti saepe alias unde quisquam maiores.',
            date: '2020-01-01',
            img: 'news1.jpg',
            imgInfo: 'Notícia 2'
        }, {
            id: 2,
            title: 'Jogo de quarta termina empatado',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus repudiandae delectus, praesentium quos ipsam minima, veritatis tempora rerum aliquam, quaerat aperiam unde. Quia quas repellat doloremque vel non amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt eaque ducimus ea accusantium perferendis nemo ad ab tempora doloribus omnis quos, cupiditate dolores deleniti saepe alias unde quisquam maiores.',
            date: '2020-01-07',
            img: 'news2.jpg',
            imgInfo: 'Notícia 2'
        }, {
            id: 3,
            title: 'A inauguração do estádio será semana que vem',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus repudiandae delectus, praesentium quos ipsam minima, veritatis tempora rerum aliquam, quaerat aperiam unde. Quia quas repellat doloremque vel non amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt eaque ducimus ea accusantium perferendis nemo ad ab tempora doloribus omnis quos, cupiditate dolores deleniti saepe alias unde quisquam maiores.',
            date: '2020-01-20',
            img: 'news3.jpg',
            imgInfo: 'Notícia 3'
        }],
    },
    getters: {
        getNews(state) {
            return state.news
        },
        getNewsFromId: state => id => {
            let notice = state.news.find(item => {
                return (item.id == id)
            })
            return notice
        }
    },
}