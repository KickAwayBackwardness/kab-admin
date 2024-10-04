const SampleNewPost = () => {
  return `<section>
  <div class="mt-content_top max-w-content h-fit ml-content_left mb-[10px]">
    <div class="w-[100%]">
      <div class=" w-full flex">
      <div
        class="w-spec_title_left_column_width flex-shrink-0 pt-[var(--title-padding-top)] pl-[var(--title-left-padding-left)]
        border-r-frame border-frame_color">
      <p class="group-hover:bg-white w-[var(--dot-size)] max-w-[var(--dot-size)] aspect-square bg-black mr-[var(--margin-right-dot)] inline-block"/>
      <span class="uppercase text-small_text leading-[1.1] text-ibm inline-block">community</span>
      </div>
      <div class="pt-[var(--title-padding-top)] pb-[var(--title-padding-bottom)] pl-[var(--title-right-padding-left)]">
        <h2 class=" uppercase leading-[var(--title-line-height)] text-spec_main_title tracking-[var(--title-letter-spacing)] text-whyteInktrap font-bold whitespace-wrap ">
          Ramen Wars Development Diary 1
        </h2>
      </div>
    </div>
      <Description />
    </div>
  </div>
</section>


<div class="relative z-[2] translate-y-[-3%]">
      <SpecificNewsParallax
        img=""
        alt=""
      />
      <div className="image-container-spec-news relative z-[2]">
      <img src="https://a.storyblok.com/f/165555/903x545/93b3cedb53/unnamed-1.png/m/1440x745/smart/filters:quality(85)" alt="Cover" style={{ translateY: translateY }} />
    </div>

      {/* top */}
      <div class=" absolute z-[3] top-[-1px] left-0 w-full h-[var(--img-top-interverted-cut-height-spec-news)] flex items-center justify-between">
        <div class="w-[var(--img-top-interverted-cut-width-spec-news)] h-full bg-transparent"></div>
        <img src="/img/top.svg" class="h-full w-auto " alt="" />
        <div class="flex-grow h-full bg-white"></div>
      </div>

      {/* bottom */}
      <div class=" absolute  z-[3]  bottom-[-1px] left-0 w-full h-[var(--img-bottom-interverted-cut-height-spec-news)] flex  items-center justify-between">
        <div class="h-full w-[var(--img-bottom-interverted-cut-width-spec-news-1)] bg-white"></div>

        <div class="flex-grow h-full bg-transparent relative justify-between ">
          <img
            src="/img/bottom.svg"
            class="h-full w-[var(--svg-cut-for-img-bottom-interverted-cut-width-spec-news)] object-cover absolute top-0 left-0 bg-transparent "
            alt=""
          />
          <img
            src="/img/bottom-2.svg"
            class="h-full w-[var(--svg-cut-for-img-bottom-interverted-cut-width-spec-news)] object-cover absolute top-0 right-0 bg-transparent "
          />
        </div>

        <div class="flex-grow h-full bg-white relative justify-between w-[var(--img-bottom-interverted-cut-width-spec-news-2)] "></div>
      </div>
    </div>

<article class="spec_news">
  <div
      class=" m-[var(--spec-news-margin-center)]
    w-[var(--spec-news-pharagraph-width)]
  "
    >
      <p
        class=" leading-[var(--spec-news-pharagraph-line-height)]
     tracking-[var(--spec-news-pharagraph-letter-spacing)]
   text-spec_pharagraph text-whyteInktrap"> In our <a href="google.com">first developer diaryfor</a>
   Ramen Wars, we showcased art for locations in Prisma City and the
   characters living in it. This month, we are exploring the ‘gamified’
   section of the event and previewing how the components of Ramen Wars
   convey a story that brings our world to life. <br /> <br />
   Before we take a deeper look, it’s exciting to see the art assets
   progressing. KPR has always focused on producing art that is both
   skillful and imaginative, so we’re going to make sure we continue with
   the many locations that will be an integral part of the Ramen Wars
   experience.
   <br />
   <br /> You know we take our world-building seriously when even the
   meatmongers are given this kind of attention…";</p>
    </div>
    <div
    class="w-[var(--spec-news-photo-width)] 
  m-[var(--spec-news-margin-center)]
  my-[var(--spec-news-photo-margin-y)]
  "
  >
    <div class=" relative">
      <img class="w-full h-auto rounded-[10px]" 
      src= "https://a.storyblok.com/f/165555/1920x1080/490e17d59b/rw_devdiary_aug_boonstorefront.jpg/m/715x0/smart/filters:quality(85)"
      alt= "Boon storefront" />
      <div class=" absolute right-0 bottom-0">
        <img src="/img/corner-photo.svg" alt="corner" />
      </div>
    </div>
    <div class=" flex items-center mt-[var(--spec-news-desc-photo-margin-top)]">
    <p
    class="group-hover:bg-white w-[var(--dot-size)] max-w-[var(--dot-size)] aspect-square bg-black mr-[var(--margin-right-dot)] inline-block"
  ></p>
  <span class="uppercase text-small_text leading-[1.1] text-ibm inline-block">
  Boon storefront
</span>
    </div>
  </div>
  <Pharagraph text={p2} sectionHeading={sectionHeading} />
  <ParallaxPhoto
    img="https://a.storyblok.com/f/165555/1920x1080/490e17d59b/rw_devdiary_aug_boonstorefront.jpg/m/715x0/smart/filters:quality(85)"
    alt="Boon storefront"
  />
  <BulletList bulletList={bulletList} />
  <Pharagraph text={p2} sectionHeading={sectionHeading} />
  <Devider />
  <Pharagraph
    text={p2}
    sectionHeading={sectionHeading}
    subHeading={subHeading}
  />
  <NumberList numberList={numberList} />
  <Signature text="Kick, Away, Backwardness." />
</article>`;
};

export default SampleNewPost;
