import { App } from "vue";
import * as dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime' // import plugin
import 'dayjs/locale/zh-cn' // import locale

export default {
  install: (app: App, options: any) => {
    // $dayjs
    dayjs.extend(RelativeTime)
    dayjs.locale('zh-cn') // use locale
    app.config.globalProperties.$dayjs = dayjs
  }
}