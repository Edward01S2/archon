<section id="pillars" class="section">
  <div class="container mx-auto px-6 pb-12 md:text-center md:pb-16 lg:px-8">
    <div class="subtitle uppercase font-space text-c-gray-200 mb-4 text-xs">{!! $subtitle !!}</div>
    <h2 class="font-space text-3xl md:text-5xl xl:text-6xl">{!! $title !!}</h2>
  </div>
  <div class="relative overflow-hidden md:flex">
    <div class="md:w-1/2 md:overflow-hidden md:relative">
      <div class="img-swipe-pillar hidden absolute bg-c-black-100 w-full h-full z-10 md:block"></div>
      <img class="object-cover z-0 absolute inset-0 object-center w-full h-full transform -translate-x-1/2 md:translate-x-0" src="{!! $image['url'] !!}"/>
    </div>
    <div class="operate-carousel bg-white mx-6 my-12 pb-8 md:w-1/2 md:pb-0 md:my-16 lg:max-w-512 lg:ml-20 lg:mr-auto lg:my-24 xl:max-w-screen-sm xl:ml-24 xl:my-32">
      @foreach($items as $item)
        <div class="slide relative z-10 bg-white p-8 mx-6 w-full min-h-full md:pb-8 md:mx-0 md:pt-0 lg:pb-12 lg:pt-0 lg:pl-0 lg:pr-16 xl:pr-12">
          <div class="font-space text-c-gray-200 text-xs mb-4"><span class="text-c-gold-100">{!! App\toRoman($loop->iteration) !!}</span>/{!! App\toRoman($loop->count) !!}</div>
          <h4 class="font-space mb-2 text-lg md:text-2xl lg:text-3xl">{!! $item['title'] !!}</h4>
          <p class="leading-8 text-c-gray-300 md:text-lg lg:leading-loose lg:text-xl">{!! $item['content'] !!}</p>
        </div>
      @endforeach
    </div>
  </div>
</section>       