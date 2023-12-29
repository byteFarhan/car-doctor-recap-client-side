import img1 from "../../../assets/images/banner/5.jpg";
import img2 from "../../../assets/images/banner/1.jpg";
import img3 from "../../../assets/images/banner/2.jpg";
import img4 from "../../../assets/images/banner/3.jpg";
import img5 from "../../../assets/images/banner/4.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    // Next time i will create fully functional carosul using array map method. And storing carousel datas in Array of object.
    <>
      <section className="w-full my-5 text-white rounded-md md:rounded-xl carousel p-0 lg:max-h-[700px]">
        {/* Carousel Item-1 */}
        <CarouselItem
          sliderNo={"slide1"}
          img={img1}
          title="Affordable Price For Car Servicing"
          description="There are many variations of passages of  available, but the majority have suffered alteration in some form"
          rightBtnText={`Discover More`}
          rightBtnPath="#"
          leftBtnText={`Latest Project`}
          leftBtnPath="#"
          rightSlideIconPath="#slide4"
          leftSlideIconPath="#slide2"
        />
        {/* Carousel Item-2 */}
        <CarouselItem
          sliderNo={"slide2"}
          img={img2}
          title="Affordable Price For Car Servicing"
          description="There are many variations of passages of  available, but the majority have suffered alteration in some form"
          rightBtnText={`Discover More`}
          rightBtnPath="#"
          leftBtnText={`Latest Project`}
          leftBtnPath="#"
          rightSlideIconPath="#slide1"
          leftSlideIconPath="#slide3"
        />
        {/* Carousel Item-3 */}
        <CarouselItem
          sliderNo={"slide3"}
          img={img3}
          title="Affordable Price For Car Servicing"
          description="There are many variations of passages of  available, but the majority have suffered alteration in some form"
          rightBtnText={`Discover More`}
          rightBtnPath="#"
          leftBtnText={`Latest Project`}
          leftBtnPath="#"
          rightSlideIconPath="#slide2"
          leftSlideIconPath="#slide4"
        />
        {/* Carousel Item-4 */}
        <CarouselItem
          sliderNo={"slide4"}
          img={img4}
          title="Affordable Price For Car Servicing"
          description="There are many variations of passages of  available, but the majority have suffered alteration in some form"
          rightBtnText={`Discover More`}
          rightBtnPath="#"
          leftBtnText={`Latest Project`}
          leftBtnPath="#"
          rightSlideIconPath="#slide3"
          leftSlideIconPath="#slide5"
        />
        {/* Carousel Item-5 */}
        <CarouselItem
          sliderNo={"slide5"}
          img={img5}
          title="Affordable Price For Car Servicing"
          description="There are many variations of passages of  available, but the majority have suffered alteration in some form"
          rightBtnText={`Discover More`}
          rightBtnPath="#"
          leftBtnText={`Latest Project`}
          leftBtnPath="#"
          rightSlideIconPath="#slide4"
          leftSlideIconPath="#slide6"
        />
        {/* Carousel Item-6 */}
        <CarouselItem
          sliderNo={"slide6"}
          img={img6}
          title="Affordable Price For Car Servicing"
          description="There are many variations of passages of  available, but the majority have suffered alteration in some form"
          rightBtnText={`Discover More`}
          rightBtnPath="#"
          leftBtnText={`Latest Project`}
          leftBtnPath="#"
          rightSlideIconPath="#slide5"
          leftSlideIconPath="#slide1"
        />
      </section>
    </>
  );
};

export default Carousel;
