<template>
    <section>
        <div class="container">
            <HcodeSectionNewsInvididual v-for="notice in news" :key=notice.id :img-name="notice.img"
                :img-info="notice.imgInfo" :news-content="notice.content" :news-date="notice.date">
                <template #title>
                    <h2>{{ notice.title }}</h2>
                </template>
                <p>{{ notice.content | truncate(200) }}</p>
            </HcodeSectionNewsInvididual>
        </div>
    </section>
</template>

<script>
import HcodeSectionNewsInvididual from './HcodeSectionNewsInvididual'
import { mapGetters } from 'vuex';

export default {
    components: {
        HcodeSectionNewsInvididual
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            news: 'getNews'
        })
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