import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Warehouseview from '@/views/warehouse/Warehouseview'
import Warehouse from '@/views/warehouse/Warehouse'
import Area from '@/views/warehouse/Area'
import Order from '@/views/order/Order'
import Pickup from '@/views/order/Pickup'
import Arrival from '@/views/order/Arrival'
import Announce from '@/views/announce/Announce'
import Bulletin from '@/views/announce/bulletin/Bulletin'
import PostBulletin from '@/views/announce/bulletin/Post'
import BulletinList from '@/views/announce/bulletin/List'
import ShopCart from '@/views/announce/shopcart/ShopCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: '首页',
      component: Layout,
      children: [
        {
          path: '/warehouse',
          name: '仓库管理',
          component: Warehouseview,
          children: [
            {
              path: '/warehouse/warehouse',
              name: '仓库',
              component: Warehouse
            },
            {
              path: '/warehouse/area',
              name: '区域',
              component: Area
            }
          ]
        },
        {
          path: '/order',
          name: '订单管理',
          component: Order,
          children: [
            {
              path: '/order/pickup',
              name: '提货订单',
              component: Pickup
            },
            {
              path: '/order/arrival',
              name: '到货订单',
              component: Arrival
            }
          ]
        },
        {
          path: '/announce',
          name: '公告栏',
          component: Announce,
          children: [
            {
              path: '/announce/bulletin',
              name: '公告',
              component: Bulletin,
              children: [
                {
                  path: '/announce/bulletin/post',
                  name: '发布',
                  component: PostBulletin
                },
                {
                  path: '/announce/bulletin/list',
                  name: '列表',
                  component: BulletinList
                }
              ]
            },
            {
              path: '/announce/shopcart',
              name: '飞入购物车',
              component: ShopCart
            }
          ]
        }
      ]
    }
  ]
})
