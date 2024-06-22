<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        @php
            $segments = request()->segments();
            //dd(request()->segments())
        @endphp
    
        @if (!empty($segments))
             @if (($segments[0] === "admin" || $segments[0] === "instructor") && count($segments) >= 2)
                @if ($segments[1] === "login" || $segments[1] === "register")
                    @include('assets.admin.login_css')
                @else
                    @include('assets.admin.css')

                @endif
            @else
                @include('assets.frontend_css')
            @endif
        @else
            @include('assets.frontend_css')
        @endif        

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body>
        @inertia


        {{-- Section to load javascript files below --}}


        @if (!empty($segments))
             @if (($segments[0] === "admin" || $segments[0] === "instructor") && count($segments) >= 2)
                @if ($segments[1] === "login" || $segments[1] === "register")
                    @include('assets.admin.login_js')
                @else
                    @include('assets.admin.js')

                @endif
            @else
                @include('assets.frontend_js')
            @endif
        @else
            @include('assets.frontend_js')
        @endif          
    </body>
</html>