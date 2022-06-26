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
              <span class="intro__stat-value">{{ stat.value }}.</span>
              <span class="intro__stat-arrow">&rarr;</span>
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
            <h3>{{ pageData.graph.subTitle }}</h3>
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
        <div class="support__content">
          <p class="support__description"></p>
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
            <img src="/img/ok.png" alt="Поддержка API" />
          </picture>
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
        title: '',
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

<style scoped>
.chart {
  height: 50vh;
}

.background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
  left: 0;
}

.background__image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>

<style>
body {
  margin: 0;
}
</style>
