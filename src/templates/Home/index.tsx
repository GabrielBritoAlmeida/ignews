import styles from './styles.module.scss'

import Head from 'next/head'
import { SubscribeButton } from 'components/SubscribeButton'
import { formatMoney } from 'utils/formatMoney'

export interface HomeTemplateProps {
  product: {
    priceId: string
    amount: number
  }
}

export function HomeTemplate({ product }: HomeTemplateProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋️ Hey, welcome</span>

          <h1>
            News about the <span>React</span> world.
          </h1>

          <p>
            Get access to all the publication <br />
            <span>for {formatMoney(product.amount)} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
