{{--
  Template Name: Container Template
--}}

@extends('layouts.app')

@section('content')
    @while(have_posts()) @php(the_post())
      <div class="container mx-auto px-4 py-16 pt-24 sm:px-6 md:pt-32 lg:px-8 lg:pt-32 xl:pt-40">
        <div class="prose max-w-none">
          @php(the_content())
        </div>
      </div>
    @endwhile
@endsection
