<section id="case-study" class="section xl:overflow-hidden">
  <div class="">
    <div class="py-16">
      <div class="overflow-hidden">
        <div class="title-container mb-12 container mx-auto px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div class="subtitle uppercase font-space text-c-gray-200 mb-4 text-xs lg:mb-0">{!! $subtitle !!}</div>
          <h2 class="title font-space text-3xl leading-tight md:text-5xl xl:text-6xl">{!! $title !!}</h2>
        </div>
      </div>

      <div x-data="{ tab: 'none'}" class="bg-c-black-100 overflow-hidden relative">
        <div class="color-swipe-study absolute bg-c-black-100 w-full h-full z-10 md:block"></div>
        <div class="container px-6 lg:px-8 mx-auto relative">
          <div class="study-carousel bg-c-black-100 pt-12 w-full lg:pt-16 flickity-resize">
            @foreach($posts as $item)

              <div class="slide w-4/5 mb-12 pb-0 ml-8 flex flex-col md:w-1/2 md:pb-0 md:ml-12 md:mb-12 lg:w-2/5 xl:w-1/3">
                <img class="object-cover w-full h-48 mb-4 md:h-56 xl:h-64" src="{!! $item['image'] !!}" alt="">
                <div class=" pb-12 flex-grow md:w-4/5 lg:pb-12">
                  <h3 class="text-white font-space text-xl mb-4 md:leading-snug md:text-2xl lg:pr-0">{!! $item['title'] !!}</h3>
                  <p class="text-c-gray-300 text-sm flex-grow lg:text-base xl:text-lg">{!! $item['excerpt'] !!}</p>
                </div>
                <div>
                  <button @click="tab = '{!! $loop->index !!}'" class="border border-c-gray-400 px-4 py-4 text-c-gold-100 inline-block font-space text-xs absolute bottom-0 hover:bg-white transition duration-200 md:text-sm lg:px-6 xl:text-base">
                    {!! $item['link'] !!}
                  </button>
                </div>
              </div>

            @endforeach
          </div>
        </div>

         {{-- MODALS --}}
        @foreach($posts as $item)
        <div x-show="tab === '{!! $loop->index !!}'" 
          class="fixed inset-0 px-6 pb-6 pt-24 z-30 sm:inset-0 sm:flex sm:items-center sm:justify-center md:p-8 md:pt-28"
          x-cloak>

          <div x-show="tab === '{!! $loop->index !!}'" class="fixed inset-0 transition-opacity"
            x-transition:enter="ease-out duration-300"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="ease-in duration-200"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            x-cloak
          >
            <div class="absolute inset-0 bg-black opacity-75" x-cloak></div>
          </div>
        
          <div x-on:click.away="tab = ''" x-show="tab === '{!! $loop->index !!}'" class="bg-c-black-100 container max-w-3xl transform transition-all max-h-full overflow-y-auto z-30 md:max-h-full"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline"
            x-transition:enter="ease-out duration-300"
            x-transiton:enter-start ="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            x-transition:enter-leave="opacity-100 translate-y-0 sm:scale-100"
            x-transition:leave="ease-in duration-200"
            x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
            x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            x-cloak
          >
            <div class="relative">
              <img class="relative w-full h-64 object-cover object-center z-10 lg:h-72" src="{!! $item['image'] !!}" alt="">
              <div class="relative z-20 -mt-20 flex flex-col md:flex-row">
                <div class="bg-white p-6 pb-12 md:p-12 md:pb-16 md:pt-8 md:-mt-12 lg:-mt-24 lg:pb-24">
                  <h3 class="font-space text-xl mb-4 leading-tight md:mb-8 md:text-4xl">{!! $item['title'] !!}</h3>
                  <div class="prose-sm md:prose">
                    {!! $item['content'] !!}
                  </div>
                </div>
                <div class="bg-c-black-100 z-30">

                  @if($loop->last)
                    <div class="h-full p-6 flex flex-col items-center">
                      <div class="md:flex md:flex-col md:items-center md:space-y-8">
                        <img class="h-20 w-16 object-cover object-center hidden md:block lg:h-24 lg:w-20" src="{!! $posts[0]['image'] !!}" alt="">
                        <div class="mb-8 writing-mode md:mb-0">
                          <div class="uppercase text-c-gold-100">Return to Start</div>
                          <div class="text-white font-space">{!! $posts[0]['title'] !!}</div>
                        </div>
                      </div>
                      <div class="md:mt-12 xl:mt-16">
                        <button @click="tab = '0'" class="text-c-gold-100 border border-c-gray-200 py-2 px-6">
                          <svg class="w-6 transform rotate-180" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.7071 8.7071C33.0976 8.31658 33.0976 7.68341 32.7071 7.29289L26.3431 0.928928C25.9526 0.538403 25.3195 0.538403 24.9289 0.928928C24.5384 1.31945 24.5384 1.95262 24.9289 2.34314L30.5858 7.99999L24.9289 13.6568C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.7071ZM1.74846e-07 9L32 8.99999L32 6.99999L-1.74846e-07 7L1.74846e-07 9Z" fill="#D6A95B"/>
                            </svg>  
                        </button>
                      </div>
                    </div>
                  @else
                    <div class="h-full p-6 flex flex-col items-center">
                      <div class="md:flex md:flex-col md:items-center md:space-y-8">
                        <img class="h-20 w-16 object-cover object-center hidden md:block lg:h-24 lg:w-20" src="{!! $posts[$loop->index + 1]['image'] !!}" alt="">
                        <div class="mb-8 writing-mode md:mb-0">
                          <div class="uppercase text-c-gold-100">Up Next</div>
                          <div class="text-white font-space">{!! $posts[$loop->index + 1]['title'] !!}</div>
                        </div>
                      </div>
                      <div class="md:mt-12 xl:mt-16">
                        <button @click="tab = '{!! $loop->index + 1 !!}'" class="text-c-gold-100 border border-c-gray-200 py-2 px-6 hover:bg-white transiton duration-200">
                          <svg class="w-6" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.7071 8.7071C33.0976 8.31658 33.0976 7.68341 32.7071 7.29289L26.3431 0.928928C25.9526 0.538403 25.3195 0.538403 24.9289 0.928928C24.5384 1.31945 24.5384 1.95262 24.9289 2.34314L30.5858 7.99999L24.9289 13.6568C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.7071ZM1.74846e-07 9L32 8.99999L32 6.99999L-1.74846e-07 7L1.74846e-07 9Z" fill="#D6A95B"/>
                            </svg>  
                        </button>
                      </div>
                    </div>
                  @endif

                </div>
              </div>

            </div>
          </div>
        </div>
        @endforeach

      </div>
      

    </div>
  </div>
</section>

{{-- @dump($posts) --}}
