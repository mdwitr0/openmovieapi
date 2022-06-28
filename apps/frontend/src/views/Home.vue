<template>
  <div class="home">
    <header class="header">
      <div class="container header__container">
        <span class="header__title">{{ pageData.header.logo }}</span>
      </div>
    </header>
    <section class="intro">
      <div class="container intro__container">
        <div class="intro__row">
          <h1 class="intro__title">{{ pageData.intro.title }}</h1>
          <p class="intro__description">
            {{ pageData.intro.description }}
          </p>
          <div class="intro__stats">
            <div
              class="intro__stat"
              v-for="stat in pageData.intro.stats"
              :key="stat.title"
            >
              <span class="intro__stat-title">{{ stat.title }}</span>
              <div class="intro__stat-content">
                <span class="intro__stat-value">{{ stat.value }}</span>
                <span class="intro__stat-arrow"
                  ><svg
                    class="intro__stat-arrow-icon"
                    width="60"
                    height="23"
                    viewBox="0 0 60 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M59.0791 12.0422C59.6547 11.4464 59.6383 10.4968 59.0425 9.92124L49.3334 0.541275C48.7376 -0.0343266 47.788 -0.017954 47.2124 0.577844C46.6368 1.17364 46.6532 2.12325 47.249 2.69885L55.8793 11.0366L47.5415 19.6669C46.9659 20.2627 46.9823 21.2123 47.5781 21.7879C48.1739 22.3635 49.1235 22.3471 49.6991 21.7513L59.0791 12.0422ZM1.02586 13.4826L58.0262 12.4998L57.9744 9.50025L0.974142 10.483L1.02586 13.4826Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <a
            class="btn btn--primary intro__btn"
            :href="pageData.intro.button.link"
          >
            {{ pageData.intro.button.text }}
          </a>
        </div>
        <div class="intro__row">
          <picture>
            <source srcset="/img/victory.webp" type="image/webp" />
            <source srcset="/img/victory.png" type="image/png" />
            <img class="intro__img" src="/img/victory.png" alt="КиноПоиск" />
          </picture>
        </div>
      </div>
    </section>
    <section class="graph">
      <div class="container graph__container">
        <div class="graph__row">
          <h2 class="graph__title">{{ pageData.graph.title }}</h2>
          <div class="graph__chart">
            <h3 class="graph__subtitle">{{ pageData.graph.subTitle }}</h3>
            <v-chart class="chart" :option="pageData.graph.options" />
          </div>
        </div>
      </div>
    </section>
    <section class="pricing">
      <div class="container pricing__container">
        <h2 class="pricing__title">{{ pageData.pricing.title }}</h2>
        <p class="pricing__description">
          {{ pageData.pricing.description }}
        </p>
        <div class="pricing__tables">
          <div
            class="pricing-table"
            v-for="table in pageData.pricing.pricingTables"
            :key="table.title"
          >
            <div class="pricing-table__row">
              <h3 class="pricing-table__title">{{ table.title }}</h3>
              <p class="pricing-table__description">
                {{ table.description }}
              </p>
              <ul class="pricing-table__items">
                <li
                  class="pricing-table__item"
                  v-for="item in table.items"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
              <a
                :href="table.button.link"
                class="btn btn--secondary pricing-table-btn"
              >
                {{ table.button.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="support">
      <div class="container support__container">
        <h2 class="support__title">{{ pageData.support.title }}</h2>

        <div class="support__info">
          <div class="support__content">
            <p class="support__description">
              {{ pageData.support.description }}
            </p>
            <a
              :href="pageData.support.button.link"
              class="btn btn--primary support__btn"
            >
              {{ pageData.support.button.text }}
            </a>
          </div>
          <div class="support__hero">
            <picture>
              <source srcset="/img/ok.webp" type="image/webp" />
              <source srcset="/img/ok.png" type="image/png" />
              <img
                src="/img/ok.png"
                class="support__hero-image"
                alt="Поддержка API"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
    <div class="background">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="/img/bg-mobile.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcset="/img/bg-mobile.jpg"
          type="image/jpg"
        />
        <source srcset="/img/bg-5k.webp" type="image/webp" />
        <source srcset="/img/bg-5k.jpg" type="image/jpg" />
        <img src="/img/bg-5k.jpg" alt="" class="background__image" />
      </picture>
    </div>
  </div>
</template>

<script>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
  DataZoomSliderComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { defineComponent, ref } from 'vue';
import { MOVIE_DATASET } from '../constants/movie-dataset.constant';

use([
  LineChart,
  GridComponent,
  DataZoomSliderComponent,
  ToolboxComponent,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: 'HelloWorld',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  setup() {
    const category = MOVIE_DATASET.map((genre) => genre._id);
    const categoryCounts = MOVIE_DATASET.map((item) => item.count);

    const pageData = ref({
      header: {
        logo: 'KinoPoisk.dev',
      },
      intro: {
        title: 'КиноПоиск API',
        description:
          'Получайте максимум данных о фильмах, сериалах, мультфильмах, тв-шоу, аниме, актерах режиссерах и т.д. максимально быстро с помощью неофициального API kinopoisk.',
        stats: [
          {
            title: 'Фильмов',
            value: '777 k.',
          },
          {
            title: 'Актеров',
            value: '17 kk.',
          },
          {
            title: 'Изображений',
            value: '1 kk.',
          },
        ],
        button: {
          text: 'Подключиться',
          link: '#',
        },
      },
      graph: {
        title: 'Вся база КиноПоиска в одном API',
        subTitle: 'Статистика выхода фильмов по годам',
        options: {
          xAxis: {
            type: 'category',
            data: category,
          },
          yAxis: {
            type: 'value',
          },
          tooltip: {
            trigger: 'axis',
          },
          dataZoom: [
            {
              id: 'dataZoomX',
              type: 'slider',
              xAxisIndex: [0],
              filterMode: 'filter',
              start: 85,
              end: 96,
            },
          ],
          series: [
            {
              data: categoryCounts,
              type: 'line',
              color: '#F46F85',
              smooth: true,
            },
          ],
        },
      },
      pricing: {
        title: 'Тарифы',
        description:
          'За 3 года разработки API стало понятно, что он используется для бизнеса и для обучения. Чтобы стать более удобными теперь только 2 самых нужных тарифа.',
        pricingTables: [
          {
            title: 'Обучение',
            description:
              'Это тариф создан для некомерческого использования kinopoisk API с целью обучения программированию. Идеален для студентов :)',
            items: [
              'Доступ ко всем методам API кинопоиска (3000 запросов в сутки)',
              'Доступ к документации',
              'Доступ исходному коду API',
              'Нельзя использовать в приватных репозиториях в коммерческих целях',
              'Тех. поддержка в чате @dev_to_dev',
            ],
            button: {
              text: 'Получить токен',
              link: '#',
            },
          },
          {
            title: 'Бизнес',
            description:
              'Для этого тарифа доступен тестовый период, который позволит вам не платить за апи во время экспериментов. По умолчанию этот период длится 2 недели c момента активации тарифа, после 2000 р. в месяц.',
            items: [
              'Безлимитный доступ ко всем методам API',
              'Доступ к документации',
              'Возможность купить дамп базы',
              'Возможность развернуть свой личный инстанс API',
              'Оперативная тех. поддержка',
            ],
            button: {
              text: 'Протестировать бесплатно',
              link: '#',
            },
          },
        ],
      },
      support: {
        title: 'Поддержка',
        description:
          'Мы не оставим Вас без поддержки, сотрудники kinopoisk.dev онлайн 24/7. Готовы решить практически любой ваш вопрос, а также — подсказать, помочь, обновить, загрузить, даже доработать код для корректной работы с API kinopoisk.dev.',
        button: {
          text: 'Подключить',
          link: '#',
        },
      },
    });

    return { pageData };
  },
});
</script>

<style>
h1,
h2,
h3,
h4,
p {
  margin: 0;
}
html {
  font-weight: 300;
  font-size: 27px;
  line-height: 33px;
}

h1 {
  font-weight: 700;
  font-size: 96px;
  line-height: 117px;
  text-align: center;
}

.chart {
  height: 50vh;
}

.header__title {
  font-weight: 700;
  font-size: 72px;
  line-height: 88px;
  color: rgba(129, 150, 181, 0.5);
  backdrop-filter: blur(20px);
}

.intro__title {
  font-weight: 700;
  font-size: 96px;
  line-height: 117px;
  color: #ffffff;
}

.intro__description {
  font-weight: 300;
  font-size: 27px;
  line-height: 33px;
  display: flex;
  align-items: center;
  max-width: 51vw;
}
.intro__stat-title {
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  /*! grid-area: 1fr; */
}
.intro__stat-value {
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
}
.intro__stat-arrow {
  /*! border: 3px solid rgba(234, 242, 246, 0.4); */
  backdrop-filter: blur(20px);
}
svg {
  /*! backdrop-filter: blur(20px); */
}
.intro__stat-arrow-icon {
  fill: #fff;
}
.intro__stat-arrow-icon:hover {
  fill: rgba(234, 242, 246, 0.4);
  backdrop-filter: blur(20px);
}
.btn.btn--primary.intro__btn {
  background: rgba(129, 150, 181, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  /*! display: flex; */
  /*! align-items: center; */
  text-align: center;
  padding: 25px 55px;
}
.btn.btn--primary.intro__btn:hover {
  background: rgba(155, 181, 219, 0.5);
}
.container {
  display: flex;
  height: 100vh;
}
.container {
  height: 100vh;
  margin: 0 100px;
  box-sizing: border-box;
}
.container.intro__container {
  height: 87vh;
  overflow: hidden;
}
.intro__img {
  /*! position: absolute; */
  height: 87vh;
  position: absolute;
  right: 0;
}
.intro__row {
}
.intro__stats {
  display: grid;
  /*! width: 100vw; */
  grid-template-columns: repeat(3, 1fr);
  padding: ;
  grid-gap: 20px;
}
.intro__stat {
  /*! display: flex; */
  /*! grid-template-columns: 1fr, 1fr 1fr; */
}
.intro__stat-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container.header__container {
  height: 12vh;
}
.graph__title {
  font-weight: 700;
  font-size: 72px;
  line-height: 88px;
  text-align: center;
  color: #8196b5;
}
h3 {
}
.graph__row {
}
.background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
  left: 0;
}

.graph__subtitle {
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
}

.graph__chart {
  background: #161d29;
  border: 2px solid rgba(129, 150, 181, 0.5);
  border-radius: 10px;
  width: ;
  padding: 50px 50px 50px 50px;
}

.graph__row {
  width: 62vw;
}

.container.graph__container {
  justify-content: center;
}

.background__image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

/* Inline таблица стилей #7 | http://localhost:8080/ */

.btn.btn--secondary {
  background: rgba(129, 150, 181, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 20px 40px;
  margin: 0 auto;
}

.pricing-table__items {
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.pricing-table__description {
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}

.pricing-table__item {
  padding: 10px;
}

.pricing-table__title {
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  align-items: center;
  text-align: center;
  color: #8196b5;
}

.pricing__description {
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  width: 100%;
}

.pricing__title {
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 88px;
  text-align: center;
  color: #8196b5;
  width: 100%;
}

.container.pricing__container {
  flex-flow: column;
  justify-content: center;
}

.pricing__tables {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
}

.pricing-table__row {
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pricing-table {
  justify-content: center;
  display: flex;
}

.btn.btn--primary.support__btn {
  backdrop-filter: blur(20px);
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 25px 55px;
  background: rgba(129, 150, 181, 0.5);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 25px 55px;
}

.support__title {
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 88px;
  text-align: center;
  color: #8196b5;
  width: 100%;
  width: 100%;
  flex: unset;
}

.container.support__container {
  flex-direction: column;
}

.support__description {
  font-weight: 300;
  font-size: 27px;
  line-height: 33px;
  display: flex;
  align-items: center;
  max-width: 51vw;
}

.pricing-table__row {
  background: #161d29;
  border: 2px solid rgba(129, 150, 181, 0.5);
  border-radius: 10px;
  width: ;
  padding: 50px 50px 50px 50px;
  box-sizing: border-box;
}

.support__info {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
}

img {
}

.support__hero-image {
  position: absolute;
  right: 0;
}

/* Inline таблица стилей #9 | http://localhost:8080/ */

.header__title {
}

.container.header__container {
  display: flex;
  align-items: center;
}

.container {
  align-content: center;
}

.intro__row {
  display: grid;
  align-content: space-between;
  height: 80vh;
  box-sizing: ;
}

.header__title {
}

.container.header__container {
  margin: 0px 94px;
}

.header__title {
  margin-top: 98px;
}

.intro__description {
  max-width: 41vw;
  margin-bottom: 22px;
}

.intro__title {
  margin-top: 160px;
  margin-left: -5px;
  text-align: left;
}

.btn.btn--primary.intro__btn {
}

.btn.btn--primary.intro__btn {
  margin-left: 8px;
}

/* Inline таблица стилей #6 | http://localhost:8080/ */

.container[data-v-fae5bece] {
  /* margin: 0 100px; */
  margin: 0 94px;
}

.container.header__container[data-v-fae5bece] {
  /* height: 12vh; */
  height: 21vh;
}

.container.intro__container[data-v-fae5bece] {
  /* height: 87vh; */
  height: 79vh;
}

/* Inline таблица стилей #6 | http://localhost:8080/ */

.intro__description[data-v-fae5bece] {
  /* max-width: 51vw; */
  max-width: 45vw;
}

.container[data-v-fae5bece] {
  /* margin: 0 100px; */
  margin: 0px 94px;
}

/* Inline таблица стилей #6 | http://localhost:8080/ */

.intro__description[data-v-fae5bece] {
  /* max-width: 51vw; */
}

/* h1[data-v-fae5bece], h2[data-v-fae5bece], h3[data-v-fae5bece], h4[data-v-fae5bece], p[data-v-fae5bece] { */
h2[data-v-fae5bece],
h3[data-v-fae5bece],
h4[data-v-fae5bece],
p[data-v-fae5bece] {
}

/* Inline таблица стилей #-1 | http://localhost:8080/ */

.intro__title {
  /* display: flex; */
  /* align-items: center; */
}

/* Inline таблица стилей #8 | http://localhost:8080/ */

.btn.btn--primary.intro__btn {
  /* padding: 25px 55px; */
  padding: 34px 89px;
  margin: 0 auto 0 0;
}

.intro__stats {
  /* grid-gap: 20px; */
  grid-gap: 26px;
  margin-bottom: 74px;
}

.container.intro__container {
  /* height: 87vh; */
  height: 88vh;
}

.intro__img {
  /* height: 87vh; */
  height: 89vh;
  bottom: 0;
}
</style>

<style>
body {
  margin: 0;
}
</style>
