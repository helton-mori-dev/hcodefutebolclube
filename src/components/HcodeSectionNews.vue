<template>
  <section class="section-news">
    <div class="container">
      <HcodeSectionNewsInvididual
        v-for="notice in news"
        :key="notice.id"
        :img-name="notice.img"
        :img-info="notice.imgInfo"
        :news-content="notice.content"
        :news-date="notice.date"
      >
        <template #title>
          <router-link
            :to="{
              name: 'notice',
              params: {
                idnotice: notice.id,
              },
            }"
            tag="h2"
            >{{ notice.title }}</router-link
          >
          <!-- <h2 @click="goToPage(`/news/${notice.id}`)">{{ notice.title }}</h2> -->
        </template>
        <p>{{ notice.content | truncate(200) }}</p>
      </HcodeSectionNewsInvididual>
    </div>
  </section>
</template>

<script>
import HcodeSectionNewsInvididual from "./HcodeSectionNewsInvididual";
import { mapGetters } from "vuex";

export default {
  components: {
    HcodeSectionNewsInvididual,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      news: "getNews",
    }),
  },
  methods: {
    // goToPage(page) {
    //     this.$router.push(page)
    // }
  },
};
</script>

<style>
.section-news {
  padding: 25px 0;
  margin-top: 25px;
  background-color: #f37520;
}
</style>