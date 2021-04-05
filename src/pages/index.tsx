import { GetStaticProps } from "next";
import { stripe } from "services/stripe";
import { HomeTemplate, HomeTemplateProps } from "templates/Home";

function Home({ product }: HomeTemplateProps) {
  return <HomeTemplate product={product} />;
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1IcvYEAYvAmPvxJu5epPpjfV");

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
