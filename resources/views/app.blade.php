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
                        <form method="POST" action="{{ route('login') }}">
                            @csrf

                            <div>
                                <x-jet-label for="name" value="{{ __('Name') }}" />
                                <x-jet-input id="name" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
                            </div>

                            <div class="block mt-4">
                                <label for="remember_me" class="flex items-center">
                                    <x-jet-checkbox id="remember_me" name="remember" />
                                    <span class="ml-2 text-sm text-gray-600">{{ __('Custom certificate ID') }}</span>
                                </label>
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="start" value="{{ __('Cource start') }}" />
                                <x-jet-input id="start" class="block mt-1 w-full" type="date" name="satrt" required autocomplete="current-start" />
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="finish" value="{{ __('Cource sinish') }}" />
                                <x-jet-input id="finish" class="block mt-1 w-full" type="date" name="satrt" required autocomplete="current-password" />
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="finish" value="{{ __('Level') }}" />
                                <select class="block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>A1</option>
                                    <option>A2</option>
                                    <option>B1</option>
                                </select>
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="time" value="{{ __('Number of hours') }}" />
                                <x-jet-input id="time" class="block mt-1 w-full" type="number" name="time" required autocomplete="current-password" />
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="location" value="{{ __('Place of study') }}" />
                                <x-jet-input id="location" class="block mt-1 w-full" type="text" name="time" required autocomplete="current-password" />
                            </div>

                            <div class="mt-4">
                                <x-jet-label for="date" value="{{ __('Date of issue') }}" />
                                <x-jet-input id="date" class="block mt-1 w-full" type="date" name="date" required autocomplete="current-password" />
                            </div>


                            <div class="grid grid-cols-2 gap-4 mt-4">
                                <x-jet-button class="w-full">
                                    {{ __('Download') }}
                                </x-jet-button>
                                <x-jet-button class="w-full">
                                    {{ __('Print') }}
                                </x-jet-button>
                            </div>
                        </form>
                    </div>
                    <div class="col-span-12 sm:col-span-9 bg-gray-100">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi consectetur dolorem ducimus enim exercitationem fugiat harum iste laboriosam, libero magnam, mollitia nisi, non officiis voluptatum? Aliquid asperiores consectetur cupiditate debitis dolorem fuga, harum ipsum iste molestiae optio pariatur sapiente sed velit vero voluptatibus. Assumenda blanditiis, consequuntur ducimus esse harum in ipsam natus odit perspiciatis quasi quibusdam, soluta temporibus veritatis! Aliquam aliquid amet aspernatur beatae consequuntur cumque dolor enim error expedita fugit id labore magni molestias nulla, numquam pariatur, quae quia, quisquam quod rem repellendus reprehenderit saepe sunt temporibus tenetur unde voluptate voluptatem? A expedita sequi ut vitae? Dicta dignissimos perspiciatis placeat quaerat qui, quia rerum. Consequatur, eligendi ex in ipsa ipsum odit omnis quibusdam sed tempore? Aspernatur autem dignissimos illum in molestias nesciunt nisi nobis porro quas tempore? In, odio, ut. Adipisci eius ex impedit in iusto, magnam maxime odio officia, pariatur quis veritatis, vitae voluptatem voluptates! Aperiam blanditiis cupiditate deleniti, eveniet necessitatibus neque quibusdam tenetur. A adipisci aliquid aut blanditiis consequatur corporis cupiditate deleniti eligendi et explicabo facere fuga fugit hic id, illo ipsa laboriosam magnam molestiae molestias mollitia nulla numquam obcaecati odit omnis perspiciatis provident quas quia quibusdam quidem rem temporibus velit vero voluptatem? Consectetur explicabo iure magni nobis odit officiis pariatur? Culpa debitis doloremque et inventore nam nesciunt quasi sint. Aspernatur dolores est magnam molestias quos. Accusantium ea illo ipsa quasi suscipit. Aliquam autem dolor et fugit officia, pariatur quam rerum. Dolores est et fugiat ipsum odio quam unde voluptas. Dignissimos earum error fuga pariatur quibusdam soluta tempore. Ab aperiam dignissimos exercitationem facilis fugit id labore laudantium libero magnam nemo odio odit pariatur placeat porro quas quibusdam quos rerum, saepe similique tempore tenetur vel voluptate? Aspernatur dolor, explicabo magnam non porro quo tenetur? Aliquam deserunt, doloribus eius eveniet exercitationem illo illum modi nam quas, quis repellendus reprehenderit sed voluptates! A alias animi atque autem consectetur consequatur dicta, dolores doloribus ex odio quam qui repudiandae saepe temporibus totam vel velit veniam veritatis voluptatem voluptatum. Accusamus accusantium blanditiis eius exercitationem inventore minima optio quas, repudiandae sit sunt unde, veniam vitae. A accusamus ad animi delectus dolore dolorem dolores eaque facilis hic iste laudantium minima, natus obcaecati perspiciatis quae qui quia rem repellendus sapiente sint, tenetur vel veniam veritatis. Consequatur delectus eaque, fugiat maiores minima numquam obcaecati praesentium ullam voluptates. A atque autem blanditiis consectetur consequatur distinctio dolor dolore dolores doloribus earum eius esse fugiat illum incidunt laborum minus molestiae mollitia, nemo officia, officiis omnis possimus quam, quasi quidem quod quos suscipit vero? Amet autem consectetur cumque cupiditate dicta doloribus ducimus, eum, expedita explicabo harum ipsum iusto laborum nam neque sed? Asperiores, aut debitis distinctio ducimus ea eos eum minus natus nesciunt odio odit optio porro quam quisquam rem tempore velit. Asperiores assumenda distinctio dolorem, dolorum earum eos et ex exercitationem expedita inventore itaque laudantium maxime minus nam nemo nisi nostrum possimus quo, repellendus reprehenderit, repudiandae rerum sed sint. Deserunt earum eius esse facilis fugiat, hic illum incidunt ipsam neque nisi, officia perferendis quas quos reiciendis repellat unde veritatis?
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
