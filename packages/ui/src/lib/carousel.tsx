import { Carousel } from '@mantine/carousel';

export const BannerCarousel = () => {
  return (
    <Carousel height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
};