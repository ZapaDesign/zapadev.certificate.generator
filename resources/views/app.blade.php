<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="grid grid-cols-12 gap-6 p-6">
                    <div class="col-span-12 sm:col-span-3">
                        <form>
                            @csrf

                            <div class="block mt-4">
                                <x-jet-label for="student" value="{{ __('Name') }}"></x-jet-label>

                                <x-jet-input
                                        id="student"
                                        class="block mt-1 w-full"
                                        type="text"
                                        name="student"
                                        value=""
                                        list="studentList"
                                        required
                                ></x-jet-input>
                                <datalist id="studentList">
                                    @foreach( $students as $student )
                                        <option value="{{ $student->name }}"></option>
                                    @endforeach
                                </datalist>
                            </div>

                            <div class="block mt-4">
                                <label for="remember_me" class="flex items-center">
                                    <x-jet-checkbox id="remember_me" name="remember"/>
                                    <span class="ml-2 text-sm text-gray-600">{{ __('Custom certificate ID') }}</span>
                                </label>
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="start" value="{{ __('Cource start') }}"/>
                                <x-jet-input
                                        id="start"
                                        class="block mt-1 w-full"
                                        type="month"
                                        name="start"
                                        value="{{ date('Y-m') }}"
                                        required
                                ></x-jet-input>
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="finish" value="{{ __('Cource sinish') }}"></x-jet-label>
                                <x-jet-input id="finish"
                                             class="block mt-1 w-full"
                                             type="month"
                                             name="finish"
                                             value="{{ date('Y-m') }}"
                                             required
                                ></x-jet-input>
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="finish" value="{{ __('Level') }}"></x-jet-label>
                                <select class="block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-state">
                                    <option>A1</option>
                                    <option>A2</option>
                                    <option>B1</option>
                                </select>
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="time" value="{{ __('Number of hours') }}"></x-jet-label>
                                <x-jet-input
                                        id="time"
                                        class="block mt-1 w-full"
                                        type="number"
                                        name="time"
                                        value="152"
                                        required
                                ></x-jet-input>
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="location" value="{{ __('Place of study') }}"></x-jet-label>
                                <x-jet-input
                                        id="location"
                                        class="block mt-1 w-full"
                                        type="text"
                                        name="time"
                                        required
                                        value="Poltava"></x-jet-input>
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="date" value="{{ __('Date of issue') }}"></x-jet-label>
                                <x-jet-input id="date" class="block mt-1 w-full" value="{{ date('Y-m-d') }}" type="date"
                                             name="date" required autocomplete="current-password"></x-jet-input>
                            </div>


                            <div class="grid grid-cols-2 gap-4 mt-4">
                                <x-jet-button id="downloadBtn" class="w-full">
                                    {{ __('Download') }}
                                </x-jet-button>
                                <x-jet-button class="w-full">
                                    {{ __('Print') }}
                                </x-jet-button>
                            </div>
                        </form>
                    </div>
                    <div class="canvas-wrap col-span-12 sm:col-span-9">
                        <canvas
                                class="canvas"
                                id="canvas"
                                data-imgsrc=""
                                width="2480"
                                height="3508">
                        </canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
