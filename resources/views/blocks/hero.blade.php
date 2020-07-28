<section class="pt-16">
  <div class="relative z-30 container mx-auto px-6 lg:px-8">
    <div id="hero-text" class="pt-12 lg:pt-20 xl:pt-24">
      <h1 class="font-space text-4xl leading-10 mb-4 md:text-5xl md:leading-tight lg:text-6xl lg:mb-8 2xl:text-7xl">{!! $title !!}</h1>
      <p class="leading-8 md:max-w-xl md:text-lg xl:max-w-2xl">{!! $subtitle !!}</p>
    </div>
  </div>
  <div class="relative z-0 pt-4">
    {{-- <div class="absolute z-10 h-full w-full transparent-gradient"></div> --}}
    <div id="tsparticles" class="h-72 transform lg:h-96"></div>
    <div class="absolute inset-0">
      <div class="container mx-auto px-6 lg:px-8">
        <a id="scroll-down" href="{!! $scroll_down['url'] !!}" class="inline-block relative mt-24 z-20 overflow-hidden bg-c-black-100 py-2 px-2">
          <svg class="text-c-gold-100 h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  </div>
</section>