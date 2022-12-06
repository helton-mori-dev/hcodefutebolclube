<template>
    <section>
        <div class="container">
            <HcodeSectionNewsInvididual 
                img-name="news1.jpg"
                img-info="Notícia 1"
                news-title="Começam os treinos para a nova temporada"
                news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus repudiandae delectus, praesentium quos ipsam minima, veritatis tempora rerum aliquam, quaerat aperiam unde. Quia quas repellat doloremque vel non amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt eaque ducimus ea accusantium perferendis nemo ad ab tempora doloribus omnis quos, cupiditate dolores deleniti saepe alias unde quisquam maiores."
                news-date="01/01/2020"
            />
            <HcodeSectionNewsInvididual 
                img-name="news2.jpg"
                img-info="Notícia 2"
                news-title="Jogo de quarta termina empatado"
                news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus repudiandae delectus, praesentium quos ipsam minima, veritatis tempora rerum aliquam, quaerat aperiam unde. Quia quas repellat doloremque vel non amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt eaque ducimus ea accusantium perferendis nemo ad ab tempora doloribus omnis quos, cupiditate dolores deleniti saepe alias unde quisquam maiores."
                news-date="07/01/2020"
            />
            <HcodeSectionNewsInvididual 
                img-name="news3.jpg"
                img-info="Notícia 3"
                news-title="A inauguração do estádio será semana que vem"
                news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus repudiandae delectus, praesentium quos ipsam minima, veritatis tempora rerum aliquam, quaerat aperiam unde. Quia quas repellat doloremque vel non amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt eaque ducimus ea accusantium perferendis nemo ad ab tempora doloribus omnis quos, cupiditate dolores deleniti saepe alias unde quisquam maiores."
                news-date="20/01/2020"
            />
        </div>
    </section>
</template>

<script>
import HcodeSectionNewsInvididual from './HcodeSectionNewsInvididual'

export default {
    components: {
        HcodeSectionNewsInvididual
    }
}
</script>

<style scoped>

section {
    padding: 25px 0;
    margin-top: 25px;
    background-color: #f37520;
}


</style>