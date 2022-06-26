<template>
  <div class="home">
    <header class="header">
      <div class="container header__container">
        <span class="header__title">KinoPoisk.dev</span>
      </div>
    </header>
    <section class="intro">
      <div class="container intro__container">
        <div class="intro__row">
          <h1 class="intro__title">КиноПоиск API</h1>
          <p class="intro__description">
            Получайте максимум данных о фильмах, сериалах, мультфильмах, тв-шоу,
            аниме, актерах режиссерах и т.д. максимально быстро с помощью
            неофициального API kinopoisk.
          </p>
          <div class="intro__stats">
            <div class="intro__stat">
              <span class="intro__stat-title">Фильмов</span>
              <span class="intro__stat-value">777 k.</span>
              <span class="intro__stat-arrow">&rarr;</span>
            </div>
            <div class="intro__stat">
              <span class="intro__stat-title">Актеров</span>
              <span class="intro__stat-value">17 kk.</span>
              <span class="intro__stat-arrow">&rarr;</span>
            </div>
            <div class="intro__stat">
              <span class="intro__stat-title">Изображений</span>
              <span class="intro__stat-value">1 kk.</span>
              <span class="intro__stat-arrow">&rarr;</span>
            </div>
          </div>
          <a class="btn btn--primary intro__btn" href="#">Подключиться</a>
        </div>
        <div class="intro__row">
          <picture>
            <source srcset="/img/victory.webp" type="image/webp">
            <source srcset="/img/victory.png" type="image/png">
            <img class="intro__img" src="/img/victory.png" alt="КиноПоиск">
          </picture>
        </div>
      </div>
    </section>
    <section class="graph">
      <div class="container graph__container">
        <div class="graph__row">
          <h2 class="graph__title">Вся база КиноПоиска в одном API</h2>
          <div class="graph__chart">
            <h3>Статистика выхода фильмов по годам</h3>
            <v-chart class="chart" :option="option"/>
          </div>
        </div>
      </div>
    </section>
    <section class="pricing">
      <div class="container pricing__container">

          <h2 class="pricing__title">Тарифы</h2>
        <p class="pricing__description">За 3 года разработки API стало понятно, что он используется для бизнеса и для обучения. Чтобы стать более удобными теперь только 2 самых нужных тарифа.</p>

        <div class="pricing-table">
          <div class="pricing-table__row">
            <h3 class="pricing-table__title">Обучение</h3>
            <p class="pricing-table__description">Это тариф создан для некоммерческого использования kinopoisk API с целью обучения программированию. Идеален для студентов :)</p>
            <ul class="pricing-table__items">
              <li class="pricing-table__item">Доступ ко всем методам API кинопоиска (3000 запросов в сутки)</li>
              <li class="pricing-table__item">Доступ к документации</li>
              <li class="pricing-table__item">Доступ исходному коду API</li>
              <li class="pricing-table__item">Нельзя использовать в приватных репозиториях в коммерческих целях</li>
              <li class="pricing-table__item">Тех. поддержка в чате @dev_to_dev</li>
            </ul>
            <a href="#" class="btn btn--secondary pricing-table-btn"></a>
          </div>
          <div class="pricing-table__row">
            <h3 class="pricing-table__title">Бизнес</h3>
            <p class="pricing-table__description">Для этого тарифа доступен тестовый период, который позволит вам не платить за апи во время эксперементов. Поумолчанию этот период длится 2 недели c момента активации тарифа, после 2000 р. в месяц.</p>
            <ul class="pricing-table__items">
              <li class="pricing-table__item">Безлимитный доступ ко всем методам API</li>
              <li class="pricing-table__item">Доступ к документации</li>
              <li class="pricing-table__item">Доступ исходному коду API</li>
              <li class="pricing-table__item">Возможность купить дамп базы</li>
              <li class="pricing-table__item">Возможность развернуть свой личный инстанс API</li>
              <li class="pricing-table__item">Оперативная тех. поддержка</li>
            </ul>
            <a href="#" class="btn btn--secondary pricing-table-btn"></a>
          </div>
          </div>
      </div>
    </section>
    <section class="support">
      <div class="container support__container">
        <div class="support__row">
          <div class="support__title-wrap">
            <h2 class="support__title">Поддержка</h2>
            <div class="support__title--background"></div>
          </div>
        </div>
        <div class="git support__row">
          <div class="support__content">
            <p class="support__tagline">Мы не оставим Вас без поддержки, сотрудники kinopoisk.dev онлайн 24/7. Готовы решить практически любой ваш вопрос, а также - подсказать, помочь, обновить, загрузить, даже доработать код для корректной работы с API kinopoisk.dev.
            </p>
            <a href="#" class="btn btn--primary support__btn">Подключиться к API</a>
          </div>
          <div class="support__hero">
            <picture>
              <source srcset="/img/ok.webp" type="image/webp">
              <source srcset="/img/ok.png" type="image/png">
              <img src="/img/ok.png"  alt="Поддержка API">
            </picture>
          </div>
        </div>
      </div>
    </section>
    <div class="background">
      <picture>
        <source media="(max-width: 767px)" srcset="/img/bg-mobile.webp" type="image/webp">
        <source media="(max-width: 767px)" srcset="/img/bg-mobile.jpg" type="image/jpg">
        <source srcset="/img/bg-5k.webp" type="image/webp" >
        <source srcset="/img/bg-5k.jpg" type="image/jpg">
        <img src="/img/bg-5k.jpg" alt="" class="background__image">
      </picture>
    </div>
  </div>
</template>

<script>
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {LineChart} from "echarts/charts";
import {
  DataZoomSliderComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent
} from "echarts/components";
import VChart, {THEME_KEY} from "vue-echarts";
import {defineComponent, ref} from "vue";
import {MOVIE_DATASET} from "../constants/movie-dataset.constant";

use([
  LineChart,
  GridComponent,
  DataZoomSliderComponent,
  ToolboxComponent,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
  setup() {
    const category = MOVIE_DATASET.map(genre => genre._id);
    const categoryCounts = MOVIE_DATASET.map(item => item.count);

    const option = ref({
      xAxis: {
        type: 'category',
        data: category,

      },
      yAxis: {
        type: 'value',

      },
      tooltip: {
        trigger: 'axis'
      },
      dataZoom: [
        {
          id: 'dataZoomX',
          type: 'slider',
          xAxisIndex: [0],
          filterMode: 'filter',
          start: 87,
          end: 97,

        },
      ],
      series: [
        {
          data: categoryCounts,
          type: 'line',
          color: '#F46F85',
          smooth: true
        }
      ]
    });

    return {option};
  }
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
