import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import globalPlugin from '@/utils/plugin/global'
import Vconsole from 'vconsole'
import { createPinia } from 'pinia'
import { 
  Tabbar, TabbarItem, Search, Lazyload,
  Skeleton, SwipeCell, Card, Button, Image as VanImage,
  Badge, NavBar, PullRefresh, Grid, GridItem, Field, CellGroup,
} from 'vant';

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.use(router)

app.use(Tabbar).use(TabbarItem).use(Search).use(Lazyload, {
  lazyComponent: true,
}).use(Skeleton).use(SwipeCell).use(Card).use(Button).use(VanImage)
.use(Badge).use(NavBar).use(PullRefresh).use(Grid).use(GridItem).use(Field, CellGroup)

new Vconsole();

app.use(globalPlugin)

app.mount('#app')
