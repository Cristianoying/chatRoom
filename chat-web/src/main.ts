import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import globalPlugin from '@/utils/plugin/global'
import Vconsole from 'vconsole'
import { 
  Tabbar, TabbarItem, Search, Lazyload,
  Skeleton, SwipeCell, Card, Button, Image as VanImage,
  Badge, NavBar, PullRefresh, Grid, GridItem, 
} from 'vant';

const app = createApp(App)

app.use(router)
app.use(Tabbar).use(TabbarItem).use(Search).use(Lazyload, {
  lazyComponent: true,
}).use(Skeleton).use(SwipeCell).use(Card).use(Button).use(VanImage)
.use(Badge).use(NavBar).use(PullRefresh).use(Grid).use(GridItem)

new Vconsole();
app.use(globalPlugin)
app.mount('#app')
