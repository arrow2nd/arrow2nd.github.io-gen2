import * as React from 'react'
import Detail from '../../components/detail/detail'

const images = [
  'works/sticker/honorific-cat-1.png',
  'works/sticker/honorific-cat-2.png'
]

const sections = [
  {
    title: '概要',
    text: 'フォーマルな場でも使えるかもしれない 敬語風のねこのスタンプです'
  },
  {
    title: 'ひとこと',
    text: '敬語テイストなので良い感じにつかえます'
  }
]

const links = [
  {
    name: 'LINE STORE',
    icon: 'linechat',
    color: 'green',
    href: 'https://store.line.me/stickershop/product/14523908'
  }
]

const HonorificCat = () => (
  <Detail
    category="sticker"
    title="敬語っぽいねこのようなもの。"
    images={images}
    sections={sections}
    links={links}
  />
)

export default HonorificCat
