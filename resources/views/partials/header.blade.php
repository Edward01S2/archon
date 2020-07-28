<nav id="nav" class="bg-white fixed w-full z-50 py-4">
  <div class="container mx-auto px-6 lg:px-8">
    <div class="flex justify-between">

      <div class="flex">
        <div class="flex-shrink-0 flex items-center">
          <a href="{{ home_url('/') }}" class="hover:opacity-50">
            <img id="logo-main" class="h-10 w-auto xl:h-12" src="{!! $logo['url'] !!}" alt="{{ $siteName }}" />
            <img id="logo-alt" class="hidden h-10 w-auto xl:h-12 transition duration-300" src="{!! $logo_alt['url'] !!}" alt="{{ $siteName }}">
          </a>
          {{-- <img class="block h-12 w-auto" src="{!! $mobile_logo['url'] !!}" alt="{{ $siteName }}" /> --}}
        </div>
      </div>

      <div class="nav-container flex items-center md:space-x-10 lg:space-x-16 xl:space-x-20">
        @foreach ($navigation as $item)
          <a class="nav-link hidden font-space leading-5 text-c-black-100 focus:outline-none group focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out md:block md:text-xs lg:text-base {{ $item->classes ?? '' }} {{ $item->active ? 'active' : '' }}" href="{{ $item->url }}">
            <div class="text-c-gray-100 nav-num">{!! sprintf("%02d.", $loop->iteration) !!}</div>
            <div class="nav-text group-hover:text-c-gold-100">{{ $item->label }}</div>
          </a>
        @endforeach
      </div>


      {{-- <div class="-mr-2 flex items-center sm:hidden">
        <!-- Mobile menu button -->
        <button @click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-c-black-100 bg-c-blue-100 hover:text-c-blue-400 focus:outline-none transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
          <!-- Icon when menu is closed. -->
          <svg :class="{'hidden': open, 'block': !open }" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <!-- Icon when menu is open. -->
          <svg :class="{'block': open, 'hidden': !open }" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div> --}}
    </div>
  </div>

  <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
  {{-- <div :class="{'block': open, 'hidden': !open }" class="mobile hidden bg-c-blue-300 sm:hidden">
    <div @click.away="open = false" class="py-4">
      <ul class="flex flex-col divide-y divide-c-blue-100 divide-opacity-50 px-6">
        @foreach ($navigation as $item)
          <li class="group relative text-center {{ $item->classes ?? '' }} {{ $item->active ? 'active' : '' }}">
            <a class="block py-4 text-xl text-white tracking-wider hover:font-semibold focus:outline-none transition duration-150 ease-in-out" href="{{ $item->url }}">
              {{ $item->label }}
            </a>
          </li>
        @endforeach
      </ul>
    </div>
  </div> --}}
</nav>