<section id="{!! $section !!}" class="section section-5 relative overflow-hidden lg:mt-12">
  <div class="md:flex">
    <div class="md:w-1/2 md:overflow-hidden md:relative md:order-2">
      <div class="img-swipe-contact hidden absolute bg-c-black-100 w-full h-full z-10 ml-24 md:block"></div>
      <img class="object-cover z-0 absolute inset-0 object-center w-full h-full transform translate-x-1/2 md:translate-x-0 xl:pl-24" src="{!! $image['url'] !!}"/>
    </div>
    <div class="form-container relative z-10 bg-white my-12 p-6 py-12 pl-0 mx-6 md:w-1/2 md:pl-6 md:order-1 md:py-0 md:mx-0 md:mt-0 md:bg-transparent lg:pl-8 lg:pr-24 lg:max-w-512 lg:mb-24 lg:ml-auto xl:mb-40 xl:pl-8 xl:max-w-screen-sm 2xl:max-w-720 xl:ml-auto">
      <div>
        <h3 class="font-space text-3xl leading-tight mb-8 md:text-5xl 2xl:text-6xl">{!! $title !!}</h3>
        @include('partials.form', ['form' => 1])
      </div>
    </div>
  </div>
</section>       
{{-- @dump($this->block) --}}