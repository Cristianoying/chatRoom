import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import globalPlugin from '@/utils/plugin/global'
import { 
  Tabbar, TabbarItem, Search, Lazyload,
  Skeleton, SwipeCell, Card, Button, Image as VanImage,
  Badge,
} from 'vant';

const app = createApp(App)

app.use(router)
app.use(Tabbar).use(TabbarItem).use(Search).use(Lazyload, {
  lazyComponent: true,
}).use(Skeleton).use(SwipeCell).use(Card).use(Button).use(VanImage)
.use(Badge)

app.use(globalPlugin)
app.mount('#app')
