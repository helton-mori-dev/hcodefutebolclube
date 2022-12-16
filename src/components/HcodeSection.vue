<template>
    <section>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo notícias do {{ championship }}</h3>
            </div>
        </div>

        <HcodeSectionBanner />

        <HcodeSectionNews />

        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu clube é: {{ myClub }}</h2>
                </div>
                <div class="col-6">
                    <HcodeInput v-model="myClub" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import HcodeSectionBanner from './HcodeSectionBanner'
import HcodeSectionNews from './HcodeSectionNews'
import HcodeInput from './HcodeInput'

export default {
    components: {
        HcodeSectionBanner,
        HcodeSectionNews,
        HcodeInput
    },
    props: {
        championship: String
    },
    data () {
        return {
            myClub: 'Hcode treinamentos'
        }
    }
}
</script>

<style scoped>

</style>