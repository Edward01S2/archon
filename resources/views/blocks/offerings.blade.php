<section id="{!! $section !!}" class="section section-2">
  <div class="container mx-auto lg:px-8">
    <div class="py-16 pb-24">
      <div class="mb-12 px-6 lg:px-16 xl:pl-28">
        <div class="subtitle flex-wrap-reverseuppercase font-space text-c-gray-200 mb-4 text-xs">{!! $subtitle !!}</div>
        <h2 class="font-space text-3xl md:text-5xl 2xl:text-6xl">{!! $title !!}</h2>
      </div>
      <div class="offer-carousel lg:grid lg:grid-cols-3 lg:gap-8">
        @foreach($items as $item)
          <div class="slide-container ml-6 min-h-full flex w-4/5 overflow-hidden md:w-1/2 lg:w-auto lg:ml-0">
            <div class="slide p-6 bg-c-black-100 z-10 min-h-full pb-12 flex-grow md:p-10 md:ml-6 lg:h-auto lg:w-auto lg:mb-0 lg:pb-12 lg:mx-0 xl:pb-20 xl:p-12">
              <div class="relative z-10 flex flex-col space-y-6">
                <img class="h-10 w-10 md:h-12 md:w-12" src="{!! $item['icon']['url'] !!}" alt="">
                <h3 class="text-white font-space text-xl md:leading-snug md:text-2xl md:pr-16 lg:pr-0 2xl:text-3xl xl:pr-12">{!! $item['title'] !!}</h3>
                <p class="text-c-gray-300 lg:text-base xl:text-lg">{!! $item['content'] !!}</p>
              </div>
            </div>
          </div>

        @endforeach
      </div>
    </div>
  </div>
</section>