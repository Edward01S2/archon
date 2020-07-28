<footer>
  <div class="container mx-auto px-6 lg:px-8">
    <div class="flex flex-col space-y-6 py-12 text-sm md:flex-row md:justify-between md:py-16 md:space-y-0 md:space-x-6 md:text-xs lg:py-24 lg:text-sm lg:space-x-8 xl:py-32">

      <div class="md:w-1/5">
        <div>&copy; <?php echo esc_attr( date( 'Y' ) ); ?></div>
        <span>{{ $siteName }}</span>
      </div>

      @foreach($footer as $item)
        <div class="md:w-1/5">
          @foreach($item['items'] as $item)
            <div>{!! $item['item'] !!}</div>
          @endforeach
        </div>
      @endforeach


    </div>

  </div>
</footer>

{{-- @dump($footer) --}}
