<section id="section-1" class="section section-1 relative overflow-hidden -mt-12 md:-mt-32">
  <div class="md:flex">
    <div class="md:w-1/2 md:relative md:order-2">
      <div class="img-swipe hidden absolute bg-c-black-100 w-full h-full z-10 md:block xl:ml-24"></div>
      <img class="object-cover z-0 absolute inset-0 object-center w-full h-full transform translate-x-1/2 md:translate-x-0 xl:pl-24" src="{!! $image['url'] !!}"/>
    </div>
    <div class="fade-left relative z-20 bg-white my-12 p-6 py-12 mx-6 md:w-1/2 md:order-1 md:py-4 md:mt-32 md:mb-24 md:mx-0 md:pr-12 md:bg-transparent lg:pl-8 lg:pr-24 lg:my-28 lg:max-w-512 lg:ml-auto lg:pt-8 xl:max-w-screen-sm xl:ml-auto 2xl:pr-36 2xl:my-32 2xl:max-w-720">
      <div class="uppercase font-space text-c-gray-200 mb-4 text-xs">{!! $subtitle !!}</div>
      <p class="leading-8 md:text-xl xl:text-2xl lg:leading-loose">{!! $content !!}</p>
    </div>
  </div>
</section>       